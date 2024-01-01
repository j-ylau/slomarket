"use client";
import { useState, useEffect, useCallback } from "react";
import {
  Autocomplete,
  TextField,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Snackbar,
  Alert,
  IconButton,
  Paper,
  Grid,
  Typography,
} from "@mui/material";
import { useDropzone } from "react-dropzone";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import { db } from "../../../firebase/firebaseConfig";
import { useAuth } from "../AuthProvider";
import { uploadImage } from "../../lib/firebaseUtils";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import { useRouter } from "next/navigation";
import Image from "next/image";

const categories = [
  "Furniture",
  "Electronics",
  "School Supplies",
  "Home Decor",
  "Clothing and Accessories",
  "Appliances",
  "Bicycles and Transportation",
  "Textbooks",
  "Sports and Fitness Equipment",
  "Home Office",
  "Miscellaneous",
];

const californiaCities = [
  "Los Angeles",
  "San Diego",
  "San Jose",
  "San Francisco",
  "San Luis Obispo",
  "Pismo Beach",
  "Morro Bay",
  "Arroyo Grande",
  "Atascadero",
  "Paso Robles",
  "Grover Beach",
  "Cambria",
  "Templeton",
  "Nipomo",
  "Cayucos",
];


const ImageUploadSquare = ({ image, onRemove }) => {
  return (
    <Paper
      elevation={3}
      sx={{
        width: 250,
        height: 250,
        backgroundImage: `url(${image.preview})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        "&:hover": {
          
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
        },
      }}
    >
      <IconButton
        onClick={onRemove}
        sx={{
          position: "absolute",
          top: 8,
          right: 8,
          backgroundColor: "rgba(255, 255, 255, 0.7)", 
          color: "black", 
          "&:hover": {
            backgroundColor: "rgba(255, 255, 255, 0.9)",
          },
          zIndex: 2, 
        }}
      >
        <CloseIcon />
      </IconButton>
    </Paper>
  );
};

export default function CreateListing() {
  const router = useRouter();
  const { getUser, isAuthenticated } = useAuth(); 
  const [listing, setListing] = useState({
    title: "",
    description: "",
    created: "",
    price: 0,
    location: "",
  });
  const [selectedCity, setSelectedCity] = useState(null);
  const [listingImage, setListingImage] = useState([]); 
  const [snackbar, setSnackbar] = useState({ open: false, message: "" });
  const [isListingImageDialogOpen, setIsListingImageDialogOpen] =
    useState(false);
  const [cities, setCities] = useState([]);
  const [listingCreated, setListingCreated] = useState(false);
  const [newListingId, setNewListingId] = useState(null);
  const firebaseAuth = useAuth();
  const isFirebaseLoggedIn = firebaseAuth.currentUser !== null;
  const [category, setCategory] = useState("");
  const [isStudent, setIsStudent] = useState(false);

  
  useEffect(() => {
    
    if (firebaseAuth.currentUser && firebaseAuth.currentUser.reloadUserInfo) {
      const attributes =
        firebaseAuth.currentUser.reloadUserInfo.customAttributes;
      if (attributes) {
        
        try {
          const customAttributes = JSON.parse(attributes);
          setIsStudent(customAttributes["student"] === true);
        } catch (error) {
          console.error("Error parsing customAttributes", error);
        }
      }
    }
  }, [firebaseAuth.currentUser]);

  useEffect(() => {
    
    if (!isFirebaseLoggedIn) {
      
      router.push("/login");
    }
  }, [isFirebaseLoggedIn, router]);

  const handleCancel = () => {
    router.push("/"); 
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    
    if (name === "price") {
      const priceValue = parseFloat(value);
      if (isNaN(priceValue) || priceValue < 0) {
        setSnackbar({ open: true, message: "Price must be a positive number." });
        return;
      }
      if (!/^\d+(\.\d{0,2})?$/.test(value)) {
        setSnackbar({ open: true, message: "Price must not exceed two decimal places." });
        return;
      }
      if (priceValue === 0) {
        setSnackbar({ open: true, message: "The price will be registered as 'free'." });
      }
      setListing({ ...listing, price: priceValue });
    } else {
      setListing({ ...listing, [name]: value });
    }
};

  const handleSubmit = async () => {
    const validationError = validateForm();
    if (validationError) {
      setSnackbar({ open: true, message: validationError });
      return;
    }
    try {
      
      if (!router || !isFirebaseLoggedIn) {
        console.error("Router is not defined or user is not logged in");
        return;
      }

      const user = getUser();
      if (!user || !user.uid) {
        console.error("No user found");
        return;
      }
      const userId = user.uid;

      
      const listingData = {
        title: listing.title,
        description: listing.description,
        price: listing.price,
        location: listing.location,
        images: [], 
        createdAt: Timestamp.fromDate(new Date()),
        sellerId: userId,
        studentVerification: isStudent,
        category: category, 
      };

      
      if (listingImage.length) {
        const imageUploadResponse = await uploadImage(
          userId,
          listingImage[0].file
        );
        listingData.images.push(imageUploadResponse); 
      }

      
      const docRef = await addDoc(collection(db, "listings"), listingData);

      setSnackbar({ open: true, message: "Listing created successfully!" });
      setNewListingId(docRef.id);
      setListingCreated(true);

      
      router.push(`/listing/${docRef.id}`);
    } catch (err) {
      console.log(err);
      setSnackbar({ open: true, message: err.message });
    }
  };

  const validateForm = () => {
    if (!listing.title.trim()) return "Title is required.";
    if (!listing.description.trim()) return "Description is required.";
    if (listing.price == null) return "Price is required."; 
    if (listing.price < 0) return "Price cannot be negative.";
    if (!/^\d+(\.\d{0,2})?$/.test(listing.price.toString())) {
        return "Price must not exceed two decimal places.";
    }
    if (!listing.location) return "Location is required.";
    if (listingImage.length === 0) return "At least one image is required.";
    return "";
};

  const handleChangeListingImage = () => {
    setIsListingImageDialogOpen(true);
  };

  const handleListingImageDialogClose = () => {
    setIsListingImageDialogOpen(false);
  };

  
  const removeImage = (index) => {
    setListingImage((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  const onListingImageDrop = useCallback((acceptedFiles) => {
    setListingImage((prevImages) => [
      ...prevImages,
      ...acceptedFiles.map((file) => ({
        file: file,
        preview: URL.createObjectURL(file),
      })),
    ]);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: onListingImageDrop,
    maxFiles: 10,
    accept: { "image/*": [".jpeg", ".jpg", ".png"] },
  });

  if (listingCreated) {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <Image
          src="/../../assets/illustrations/sitting-4.svg"
          alt="Listing Created"
          width={200} 
          height={200}
        />
        <Typography variant="h5" style={{ marginTop: "20px" }}>
          Listing Created Successfully!
        </Typography>
        <Button
          variant="contained"
          color="primary"
          style={{ marginTop: "20px" }}
          onClick={() => router.push(`/listing/${newListingId}`)}
        >
          View Listing
        </Button>
      </div>
    );
  }

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{ padding: "40px" }}
    >
      <Grid item xs={12} md={8} lg={6}>
        <form style={{ display: "flex", flexDirection: "column" }}>
          {" "}
          {/* Form Fields here */}
          <h1>New Listing</h1>
          {firebaseAuth.currentUser && (
            <Typography variant="body1" style={{ marginBottom: "1rem" }}>
              {isStudent
                ? "Your listing will be displayed with a student verification symbol."
                : "If you want to add student verification to your listing, please register your account as a student."}
            </Typography>
          )}
          <TextField
            autoFocus
            margin="dense"
            id="title"
            name="title"
            label="Listing Title"
            type="text"
            variant="outlined"
            onChange={handleChange}
            required
          />
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={4}>
              <TextField
                autoFocus
                margin="dense"
                id="price"
                name="price"
                label="Price"
                type="number"
                fullWidth
                variant="outlined"
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={4}>
              <Autocomplete
                id="location"
                required
                options={californiaCities}
                getOptionLabel={(option) => option}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Choose a city"
                    variant="outlined"
                    fullWidth
                  />
                )}
                value={selectedCity}
                onChange={(event, newValue) => {
                  setSelectedCity(newValue);
                  setListing({ ...listing, location: newValue });
                }}
              />
            </Grid>
            <Grid item xs={4}>
              <Autocomplete
                id="category"
                options={categories}
                required
                getOptionLabel={(option) => option}
                
                renderInput={(params) => (
                  <TextField {...params} label="Category" variant="outlined" />
                )}
                value={category}
                onChange={(event, newValue) => {
                  setCategory(newValue);
                }}
              />
            </Grid>
          </Grid>
          <TextField
            autoFocus
            margin="dense"
            id="description"
            name="description"
            label="Description"
            type="text"
            fullWidth
            variant="outlined"
            onChange={handleChange}
            multiline={true}
            rows={5}
            required
          />
          <h3>Upload Images</h3>
          <Grid container spacing={2} alignItems="center">
            {listingImage.map((image, index) => (
              <Grid item key={index}>
                <ImageUploadSquare
                  image={image}
                  onRemove={() => removeImage(index)}
                />
              </Grid>
            ))}
            {listingImage.length < 10 && (
              <Grid item>
                <IconButton
                  onClick={handleChangeListingImage}
                  sx={{
                    width: 250,
                    height: 250,
                    border: "1px dashed grey",
                    borderRadius: "4px", 
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    "&:hover": {
                      backgroundColor: "rgba(0, 0, 0, 0.04)", 
                    },
                  }}
                >
                  <AddIcon fontSize="large" />
                </IconButton>
              </Grid>
            )}
          </Grid>
          <Dialog
            open={isListingImageDialogOpen}
            onClose={() => setIsListingImageDialogOpen(false)}
          >
            <DialogTitle id="responsive-dialog-title">
              {"Upload Listing Image"}
            </DialogTitle>
            <DialogContent>
              <div
                {...getRootProps()}
                style={{
                  border: "1px dashed gray",
                  padding: "6rem",
                  cursor: "pointer",
                }}
              >
                <input {...getInputProps()} />{" "}
                {/* Corrected from getListingImageInputProps */}
                <Typography variant="body1">
                  Drag & drop an image here, or click to select one
                </Typography>
              </div>
            </DialogContent>

            <DialogActions>
              <Button
                autoFocus
                onClick={handleListingImageDialogClose}
                color="primary"
              >
                Cancel
              </Button>
            </DialogActions>
          </Dialog>
          <div align="left">
            <Button
              sx={{ marginTop: "3rem", backgroundColor: "grey" }}
              variant="contained"
              onClick={handleCancel}
            >
              Cancel
            </Button>
            <Button
              sx={{
                marginTop: "3rem",
                marginLeft: "3rem",
                backgroundColor: "4FB18C",
              }}
              onClick={handleSubmit}
              variant="contained"
            >
              Create Listing
            </Button>
          </div>
          <Snackbar
            open={snackbar.open}
            autoHideDuration={6000}
            onClose={() => setSnackbar({ ...snackbar, open: false })}
          >
            <Alert
              onClose={() => setSnackbar({ ...snackbar, open: false })}
              severity="error" 
              sx={{ width: "100%" }}
            >
              {snackbar.message}
            </Alert>
          </Snackbar>
        </form>
      </Grid>
    </Grid>
  );
}
