"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import {
  CircularProgress,
  Grid,
  Typography,
  Paper,
  Box,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Breadcrumbs,
  Link,
  Card,
  CardMedia,
  CardContent,
  IconButton,
} from "@mui/material";
// import SwipeableViews from "react-swipeable-views";
// import { virtualize } from "react-swipeable-views-utils";
import ShareIcon from "@mui/icons-material/Share";
import { db } from "../../../../firebase/firebaseConfig";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import GoogleMapReact from "google-map-react";
import { useRouter } from "next/navigation";
import { useAuth } from "../../AuthProvider";
import { getUser } from "@/lib/firebaseUtils";

// const VirtualizeSwipeableViews = virtualize(SwipeableViews);

const ListingPage = () => {
  const router = useRouter();
  const { id } = useParams();
  const [listing, setListing] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [sellerInfo, setSellerInfo] = useState(null);
  const [currentUserOwnsProfile, setCurrentUserOwnsProfile] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isAdminStatus, setIsAdminStatus] = useState(false);
  const [isFavorited, setFavorited] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [selectedImageUrl, setSelectedImageUrl] = useState(null);
  const [user, setUser] = useState({ isAdmin: false, isStudent: false });

  const { getUser: getCurrentUser, isLoggedIn, isAdmin } = useAuth();

  const [selectedImage, setSelectedImage] = useState(0);

  const handleImageSelect = (index) => {
    setSelectedImage(index);
  };

  useEffect(() => {
    if (id) {
      const fetchListing = async () => {
        setLoading(true);
        try {
          const docRef = doc(db, "listings", id);
          const docSnap = await getDoc(docRef);

          if (docSnap.exists()) {
            setListing({ id: docSnap.id, ...docSnap.data() });
          } else {
            setError("Listing not found");
          }
        } catch (err) {
          setError("An error occurred while fetching the listing");
          console.error(err);
        } finally {
          setLoading(false);
        }
      };

      fetchListing();
    }
  }, [id]);

  useEffect(() => {
    const fetchSellerInfo = async () => {
      if (listing && listing.sellerId) {
        try {
          // Correcting the path to match the Firestore structure
          const contactRef = doc(
            db,
            "users",
            listing.sellerId,
            "private",
            "contact"
          );
          const contactSnap = await getDoc(contactRef);

          if (contactSnap.exists()) {
            const sellerData = contactSnap.data();
            // so we're not checking contactInfoVisibility here
            setSellerInfo({
              email: sellerData.email,
              phoneNumber: sellerData.phoneNumber,
              location: sellerData.location,
            });
          } else {
            console.error("Seller contact information not found");
          }
        } catch (error) {
          console.error("Error fetching seller contact information:", error);
        }
      }
    };

    if (listing) {
      fetchSellerInfo();
    }
  }, [listing]);

  useEffect(() => {
    if (isLoggedIn()) {
    }
    const user = getCurrentUser();
    console.log(user);

    if (user == null) {
      console.log("user not logged in");
    } else {
      setLoggedIn(true);
      getUser(user.uid)
        .then((userData) => {
          if (!userData) {
            setUser(userData);
            setIsLoading(false);
            return;
          }

          if (userData.profileImage == "") {
            userData.profileImage = null;
          }
          if (userData.heroImage == "") {
            userData.heroImage = null;
          }
          userData["uid"] = user.uid;

          if (isLoggedIn()) {
            const currentUser = getCurrentUser();
            if (currentUser.uid == user.uid) {
              setCurrentUserOwnsProfile(true);

              if (
                currentUser.emailVerified &&
                currentUser.email.split("@").pop() == "calpoly.edu" &&
                !userData.isStudent
              ) {
                fetch(`/api/verify/${user.uid}`, { method: "put" }).catch(
                  (err) => {
                    console.error(err);
                    setErrorMessage(err.message);
                  }
                );
              }
            } else {
              isAdmin()
                .then((admin) => {
                  if (admin) {
                    setCurrentUserOwnsProfile(true);
                  }
                })
                .catch((err) => {
                  console.error(err);
                  setErrorMessage(err.message);
                });
            }
          }

          const checkAdminStatus = async () => {
            const adminStatus = await isAdmin();
            setIsAdminStatus(adminStatus);
          };

          if (isLoggedIn()) {
            checkAdminStatus();
          }

          setUser(userData);
          setIsLoading(false);

          console.log(userData);
          if (userData.favoriteListings.includes(id)) {
            setFavorited(true);
          }
        })
        .catch((err) => {
          console.error(err);
          setErrorMessage(err.message);
        });
    }
  }, [isLoggedIn, isAdmin]);

  const handleFavorite = async () => {
    console.log(user);
    user.favoriteListings.push(id);

    const favoritesRef = doc(db, "users", user.uid, "private", "favorites");

    await updateDoc(favoritesRef, {
      favoriteListings: user.favoriteListings,
    });

    setFavorited(true);
  };

  const handleUnfavorite = async () => {
    console.log(user);
    const index = user.favoriteListings.indexOf(id);
    const random = user.favoriteListings.splice(index);

    const favoritesRef = doc(db, "users", user.uid, "private", "favorites");

    await updateDoc(favoritesRef, {
      favoriteListings: user.favoriteListings,
    });

    setFavorited(false);
  };

  const renderSlide = ({ index, key }) => {
    const imageUrl = listing.images[index];
    return (
      <img
        key={key}
        src={imageUrl}
        alt={`${listing.title} - image ${index + 1}`}
        style={{
          maxWidth: "700px",
          maxHeight: "700px",
          width: "auto",
          height: "auto",
          cursor: "pointer",
        }}
        onClick={() => {
          setSelectedImageUrl(imageUrl);
          setDialogOpen(true);
        }}
      />
    );
  };

  if (loading) {
    return (
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        style={{ height: "100vh" }}
      >
        <CircularProgress />
      </Grid>
    );
  }

  if (error) {
    return (
      <Typography variant="h6" color="error" textAlign="center">
        {error}
      </Typography>
    );
  }

  if (!listing) {
    return null;
  }

  return (
    <Box sx={{ padding: 30 }}>
      {/* <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
          Home
        </Link>
        <Typography color="text.primary">{listing.title}</Typography>
      </Breadcrumbs> */}

      <Paper elevation={3} sx={{ mt: 2, p: 2 }}>
        <Typography variant="h4" gutterBottom>
          {listing.title}
        </Typography>

        {/* {listing.images && listing.images.length > 0 && (
          <VirtualizeSwipeableViews slideRenderer={renderSlide} />
        )} */}

        <Typography variant="body1" gutterBottom>
          {listing.description}
        </Typography>
        <Typography variant="h6" gutterBottom>
          Price: ${listing.price}
        </Typography>
        <Typography variant="body2" color="textSecondary" gutterBottom>
          Location: {listing.location}
        </Typography>

        {sellerInfo && (
          <Card
            sx={{ maxWidth: 345, cursor: "pointer" }}
            onClick={() => router.push(`/profile/${listing.sellerId}`)}
          >
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Contact Seller
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Email: {sellerInfo.email}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Phone: {sellerInfo.phoneNumber}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Location: {sellerInfo.location}
              </Typography>
            </CardContent>
          </Card>
        )}

        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
          {/* <Button
            variant="contained"
            startIcon={<LocationOnIcon />}
            onClick={() => {}}
          >
            View on Map
          </Button> */}

          {!isFavorited && loggedIn && (
            <Button variant="contained" onClick={handleFavorite}>
              Favorite
            </Button>
          )}

          {isFavorited && loggedIn && (
            <Button variant="contained" onClick={handleUnfavorite}>
              Unfavorite
            </Button>
          )}

          {/* <Button
            variant="outlined"
            startIcon={<ShareIcon />}
            onClick={() => {}}
          >
            Share
          </Button> */}
        </Box>
      </Paper>
      <Dialog
        open={isDialogOpen}
        onClose={() => setDialogOpen(false)}
        aria-labelledby="image-dialog-title"
        maxWidth="md" // Adjust size as needed
      >
        <DialogTitle id="image-dialog-title">Image View</DialogTitle>
        <DialogContent>
          <img
            src={selectedImageUrl}
            alt="Enlarged View"
            style={{ width: "100%", height: "auto" }} 
          />
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={() => setDialogOpen(false)}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default ListingPage;
