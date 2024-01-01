"use client";
import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Searchbar from "../components/Searchbar";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../styles/theme";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import localFont from "next/font/local";
import Link from "next/link";
import {
  AppBar,
  CssBaseline,
  Box,
  Container,
  Toolbar,
  Typography,
  Snackbar,
  Alert,
  IconButton,
  Menu,
  MenuItem,
  Button,
} from "@mui/material";
import { useAuth, isLoggedIn } from "./AuthProvider";
import { useRouter } from "next/navigation";
import AdbIcon from "@mui/icons-material/Adb";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import logo from "../../public/logo.svg";
import firebase from "firebase/app";
import { auth } from "../../firebase/firebaseConfig";

// Configure sans font
const sans = localFont({
  src: "../../public/fonts/PTSans-Regular.ttf",
  weight: "400",
  style: "normal",
});

export default function RootLayout({ children, title }) {
  const { isLoggedIn, getUser, signOut } = useAuth();
  const [anchorEl, setAnchorEl] = useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const [snackbar, setSnackbar] = useState({ open: false, message: "" });
  const router = useRouter();
  const firebaseAuth = useAuth();
  const isFirebaseLoggedIn = firebaseAuth.currentUser !== null;

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleViewProfileClick = () => {
    handleMenuClose();
    const userId = getUser().uid;
    router.push(`/profile/${userId}`);
  };

  const handleCreateListingClick = () => {
    console.log("Context isLoggedIn:", isLoggedIn());
    console.log("Firebase isLoggedIn:", isFirebaseLoggedIn);

    if (isFirebaseLoggedIn) {
      router.push("/create-listing");
    } else {
      router.push("/login");
    }
  };

  const renderMenu = () => (
    <Menu anchorEl={anchorEl} open={isMenuOpen} onClose={handleMenuClose}>
      {isLoggedIn() ? (
        <div>
          <MenuItem onClick={handleViewProfileClick}>View Profile</MenuItem>
          {/* <MenuItem onClick={handleMenuClose}>Settings</MenuItem> */}
          <MenuItem
            onClick={() => {
              handleMenuClose();
              signOut();
              router.push("/"); // Redirect to the home page after logout
              setSnackbar({ open: true, message: "Successfully logged out" }); 
            }}
          >
            Log Out
          </MenuItem>
        </div>
      ) : (
        <div>
          <MenuItem component={Link} href="/login" onClick={handleMenuClose}>
            Log In
          </MenuItem>
          <MenuItem component={Link} href="/signup" onClick={handleMenuClose}>
            Sign Up
          </MenuItem>
        </div>
      )}
    </Menu>
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <main className={sans.className}>
          <Box display="flex" flexDirection="column" minHeight="100vh">
            <AppBar position="static">
              <Container maxWidth="xl">
                <Toolbar
                  disableGutters
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Link
                      href="/"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        textDecoration: "none",
                      }}
                    >
                      <img
                        src={logo}
                        alt="Logo"
                        style={{ height: "40px", marginRight: "10px" }} // Adjust the height as needed
                      />
                      <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                          mr: 2,
                          display: { xs: "flex", md: "flex" },
                          fontFamily: "monospace",
                          fontWeight: 700,
                          letterSpacing: ".1rem",
                          color: "white",
                          textDecoration: "none",
                          lineHeight: "inherit", // Adjust the line height to align with the logo
                        }}
                      >
                        {title}
                      </Typography>
                    </Link>
                  </Box>

                  <Box
                    sx={{
                      flexGrow: 1,
                      display: "flex",
                      justifyContent: { md: "center" },
                    }}
                  >
                    <Searchbar
                      sx={{
                        width: {
                          xs: "calc(100% - 120px)",
                          sm: "60%",
                          md: "40%",
                        }, 
                        // mx: { xs: 1, sm: 2 },
                      }}
                    />
                  </Box>

                  <Box sx={{ flexGrow: 0 }}>
                    <Button
                      variant="contained"
                      color="secondary"
                      sx={{
                        mx: 2, 
                        display: { xs: "none", sm: "inline-flex" }, // Hide on xs, show on sm and above
                        maxWidth: { xs: "100px", sm: "none" },
                      }}
                      onClick={handleCreateListingClick}
                    >
                      <strong>Create Listing</strong>
                    </Button>

                    <IconButton
                      color="inherit"
                      onClick={handleProfileMenuOpen}
                      sx={{
                        p: { xs: 0, sm: 1 }, 
                      }}
                    >
                      <AccountCircleIcon
                        fontSize="large"
                        sx={{ color: "white" }}
                      />
                      <ArrowDropDownIcon
                        fontSize="large"
                        sx={{ color: "white" }}
                      />
                    </IconButton>
                  </Box>
                </Toolbar>
              </Container>
            </AppBar>
            {renderMenu()}
            {/* Main content area */}
            <Box component="main" sx={{ flexGrow: 1 }}>
              {children}
            </Box>

            {/* Footer */}
            <Box component="footer" sx={{ height: "100vh" }}>
              <Footer />
            </Box>
            <Snackbar
              open={snackbar.open}
              autoHideDuration={6000}
              onClose={() => setSnackbar({ ...snackbar, open: false })}
            >
              <Alert
                onClose={() => setSnackbar({ ...snackbar, open: false })}
                severity="success"
                sx={{ width: "100%" }}
              >
                {snackbar.message}
              </Alert>
            </Snackbar>
          </Box>
        </main>
      </CssBaseline>
    </ThemeProvider>
  );
}
