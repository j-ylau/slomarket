// pages/edit-listing/[id].jsx
"use client"
import { useRouter, useParams } from 'next/navigation';
import { useState, useEffect, useCallback, Timestamp } from "react";
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../../../../firebase/firebaseConfig';
import { useAuth } from '../../../app/AuthProvider'; 
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
  import CloseIcon from "@mui/icons-material/Close";
  import AddIcon from "@mui/icons-material/Add";
  import { useDropzone } from "react-dropzone";
  import { uploadImage } from "../../../lib/firebaseUtils";
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

  export default function EditListing() {
    const router = useRouter();
    const { id } = useParams();
    const { getUser, isAuthenticated } = useAuth();
    const [listing, setListing] = useState(null);
    const [snackbar, setSnackbar] = useState({ open: false, message: "" });
    const [selectedCity, setSelectedCity] = useState("");
    const [category, setCategory] = useState("");
    const [listingImages, setListingImages] = useState([]);
    const [isListingImageDialogOpen, setIsListingImageDialogOpen] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [loading, setLoading] = useState(true); 

    
    useEffect(() => {
        const fetchListing = async () => {
          if (!id) return;
          const docRef = doc(db, "listings", id);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            const data = docSnap.data();
            setListing({
              title: data.title,
              description: data.description,
              price: data.price,
              location: data.location,
              category: data.category,
            });
            setSelectedCity(data.location);
            setCategory(data.category);
          } else {
            console.error("No such listing!");
          }
          setLoading(false);
        };
    
        fetchListing();
      }, [id]);
  
    const handleChange = (event) => {
      const { name, value } = event.target;
      setListing({ ...listing, [name]: value });
    };

  const handleSubmit = async () => {

    const validationError = validateForm();
    if (validationError) {
      setSnackbar({ open: true, message: validationError });
      return;
    }

    setIsSubmitting(true);
    try {
      const listingRef = doc(db, "listings", id);
      await updateDoc(listingRef, {
        ...listing,
        location: selectedCity,
        category: category,
        updatedAt: Timestamp.fromDate(new Date()), 
      });
      
      setSnackbar({ open: true, message: "Listing updated successfully!" });
      setIsSubmitting(false);
      router.push(`/listing/${id}`);
    } catch (error) {
      console.error(error);
      setSnackbar({ open: true, message: error.message });
      setIsSubmitting(false);
    }
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

  const removeImage = (index) => {
    setListingImage((prevImages) => prevImages.filter((_, i) => i !== index));
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

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!listing) {
    return <div>Listing not found or you do not have permission to edit it.</div>;
  }

  return (
    <Grid container justifyContent="center" alignItems="center" style={{ padding: "40px" }}>
      <Grid item xs={12} md={8} lg={6}>
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column" }}>
          {/* help pls */}
          <TextField
            autoFocus
            margin="dense"
            id="title"
            name="title"
            label="Listing Title"
            type="text"
            variant="outlined"
            value={listing.title}
            onChange={handleChange}
            required
          />
          {/* help pls */}
          <Button
            type="submit"
            color="primary"
            variant="contained"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Updating..." : "Update Listing"}
          </Button>
        </form>
      </Grid>
      {/* help pl */}
    </Grid>
  );
}