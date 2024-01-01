import React, { useState, useCallback } from 'react';
import {
  Alert, Avatar, Dialog, DialogActions, DialogContent, DialogTitle,
  Button, TextField, Grid, FormControlLabel, Box, Radio, Typography, IconButton, Paper
} from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
import ImageIcon from '@mui/icons-material/Image';
import { useRouter } from 'next/navigation';
import { updateUser, uploadImage } from '@/lib/firebaseUtils';
import { useDropzone } from 'react-dropzone';
import { useAuth } from "../../app/AuthProvider";
import { updatePassword } from 'firebase/auth';
import { db } from "../../../firebase/firebaseConfig";
import { doc, deleteDoc } from "firebase/firestore";

export default function Settings( {user, setUser, setCurrentTab} ) {

    const [formState, setFormState] = useState({});
    const [errorMessage, setErrorMessage] = useState();
    const [profileImage, setProfileImage] = useState([]);
    const [heroImage, setHeroImage] = useState([]);
    const [isProfileImageDialogOpen, setIsProfileImageDialogOpen] = useState(false);
    const [isHeroDialogOpen, setIsHeroDialogOpen] = useState(false);
    
    const router = useRouter();
    const { getUser } = useAuth();

    const [selectedOption1, setSelectedOption1] = useState(null);
    const handleChange1 = (event) => {
        setSelectedOption1(event.target.value);
    };
    const [selectedOption2, setSelectedOption2] = useState(null);
    const handleChange2 = (event) => {
        setSelectedOption2(event.target.value);
    };
    const [selectedOption3, setSelectedOption3] = useState(null);
    const handleChange3 = (event) => {
        setSelectedOption3(event.target.value);
    };

    const onProfileImageDrop = useCallback(acceptedFiles => {
        const file = acceptedFiles[0];
        const objectUrl = URL.createObjectURL(file);
        setProfileImage([file, objectUrl]);
        setIsProfileImageDialogOpen(false);
    }, []);
    
    const onHeroDrop = useCallback(acceptedFiles => {
        const file = acceptedFiles[0];
        const objectUrl = URL.createObjectURL(file);
        setHeroImage([file, objectUrl]);
        setIsHeroDialogOpen(false);
    }, []);

    const { getRootProps:getProfileImageRootProps, getInputProps:getProfileImageInputProps } = useDropzone({
        onDrop: onProfileImageDrop,
        maxFiles: 1,
        accept: {
            'image/*': ['.jpeg', '.jpg', '.png']
        }
    });
    
    const { getRootProps:getHeroRootProps, getInputProps:getHeroInputProps } = useDropzone({
        onDrop: onHeroDrop,
        maxFiles: 1,
        accept: {
            'image/*': ['.jpeg', '.jpg', '.png']
        }
    });

    const handleChangeProfileImage = () => {
        setIsProfileImageDialogOpen(true);
    };
    
    const handleChangeHero = () => {
        setIsHeroDialogOpen(true);
    };

    const handleProfileImageDialogClose = () => {
        setIsProfileImageDialogOpen(false);
    };

    const handleHeroDialogClose = () => {
        setIsHeroDialogOpen(false);
    };

    function handleSetupSubmit(event) {
      if (event.nativeEvent.submitter.name == "saveSettings") {
        handleSaveSettings(event);
     } else if (event.nativeEvent.submitter.name == "saveNewPassword") {
         handleResetPassword(event);
     } else if (event.nativeEvent.submitter.name == "yesDeleteAccount") {
         handleDeleteAccount(event);
    }
  }


    async function handleSaveSettings(event) {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const userId = user.uid;
        const name = data.get('name');
        const location = data.get('location');
        const phoneNumber = data.get('phoneNumber');

        if (phoneNumber &&
            (!event.currentTarget.reportValidity() ||
            !phoneNumber.match(/^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/))) {
                setFormState({...formState, phoneNumber: { error: true, message: "Your phone number is not formatted correctly." }});
                return false;
        }

        let userData = {
            name,
            location,
            phoneNumber
        }
        
        if (profileImage.length != 0) {
            try {
                const profileImageURL = await uploadImage(userId, profileImage[0]);
                userData.profileImage = profileImageURL;
            } catch (err) {
                console.error(err);
                setErrorMessage(err.message);
                return false;
            }
        }

        if (heroImage.length != 0) {
            try {
                const heroImageURL = await uploadImage(userId, heroImage[0]);
                userData.heroImage = heroImageURL;
            } catch (err) {
                console.error(err);
                setErrorMessage(err.message);
                return false;
            }
        }
      
        await updateUser(userId, userData).then(() => {
            router.push(`/profile/${userId}`);
        }).catch(err => {
            console.error(err);
            setErrorMessage(err.message);
        });

        const newUser = {...user, ...userData};
        setUser(newUser);

        setCurrentTab(0);

        return false;
    }

        const [openPopup1, setOpenPopup1] = useState(false);
        const [openPopup2, setOpenPopup2] = useState(false);

        const handleOpenPopup1 = () => {
            setOpenPopup1(true);
        };

        const handleClosePopup1 = () => {
            setOpenPopup1(false);
        };

        const handleOpenPopup2 = () => {
            setOpenPopup2(true);
        };

        const handleClosePopup2 = () => {
            setOpenPopup2(false);
        };


        const [newPassword, setNewPassword] = useState('');
        const [error, setError] = useState('');

        const handleResetPassword = async (event) => {
            event.preventDefault();
            const data = new FormData(event.currentTarget);
            const newPassword = data.get('newPassword');

            if (newPassword &&
                (!event.currentTarget.reportValidity() ||
                newPassword.length < 6)) {
                setError("Your password must be at least 6 characters long.");
                return false;
            }

            const authUser = getUser();

            await updatePassword(authUser, newPassword).then(() => {
                handleClosePopup1();
            }).catch(err => {
                console.error(err);
                setError(err.message);
            });
        }


        const handleDeleteAccount = async (event) => {
            event.preventDefault();
            const userId = user.uid;

            const contactRef = doc(db, "users", userId, "private", "contact");
            const favoritesRef = doc(db, "users", userId, "private", "favorites");
            const userRef = doc(db, "users", userId);
            await deleteDoc(contactRef).catch(err => {
                console.error(err);
                setError(err.message);
            });
            await deleteDoc(favoritesRef).catch(err => {
                console.error(err);
                setError(err.message);
            });
            await deleteDoc(userRef).catch(err => {
                console.error(err);
                setError(err.message);
            });

            const authUser = getUser();
            await authUser.delete();

            router.push('/');
        }


return (
    <div style={{width: '100%', textAlign: 'left', height:'100vh'}}>
        <form onSubmit={handleSetupSubmit} style={{padding: 2, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          { errorMessage ? (
          <Alert severity="error">
            {errorMessage}
          </Alert>
          ) : null }

            <Grid container spacing={2} columnSpacing={8} alignItems="center" justifyContent="center" mt={3}>

                <Grid item>
                    <Typography align='center'>Profile Picture</Typography>
                    <IconButton onClick={handleChangeProfileImage}>
                        <Paper elevation={3}
                            sx={{
                                width: 100,
                                height: 100,
                                backgroundImage: `url(${profileImage[1]})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                position: 'relative',
                                borderRadius: '50%'
                            }}
                        >
                            {!profileImage[1] &&
                            <Avatar alt="Banner" sx={{ width: 100, height: 100 }} variant='circular'>
                                <PersonIcon />
                            </Avatar>}
                        </Paper>
                    </IconButton>
                </Grid>

                <Grid item>
                    <Typography align='center'>Banner Image</Typography>
                    <IconButton onClick={handleChangeHero} sx={{borderRadius: 0}}>
                        <Paper elevation={3}
                            sx={{
                                width: 200,
                                height: 100,
                                backgroundImage: `url(${heroImage[1]})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                position: 'relative'
                            }}
                        >
                            {!heroImage[1] &&
                            <Avatar alt="Banner" sx={{ width: 200, height: 100 }} variant='square'>
                                <ImageIcon />
                            </Avatar>}
                        </Paper>
                    </IconButton>
                </Grid>

            </Grid>

          <br></br>
          <div style={{width: '30%'}}>

            {/* NAME */}
            <TextField
              margin="dense"
              variant="standard"
              id="fname"
              name="name"
              label="Name"
              defaultValue={user.name}
              type="text"
              required
              fullWidth
              inputProps={{ maxLength: 64 }}
            />
            <br></br>

            <Box sx={{ ml: 2 }}>
                    <FormControlLabel
                        control={
                            <Radio
                                checked={selectedOption1 === 'option1'}
                                onChange={handleChange1}
                                value="option1"
                            />
                        }
                        label="Show Email to Registered Users"
                    />
                </Box>
                <Box sx={{ ml: 2 }}>
                    <FormControlLabel
                        control={
                            <Radio
                                checked={selectedOption1 === 'option2'}
                                onChange={handleChange1}
                                value="option2"
                            />
                        }
                        label="Verified Students Only"
                    />
                </Box>

            <br></br>

            {/* LOCATION */}
            <TextField
              margin="dense"
              variant="standard"
              id="location"
              name="location"
              label="Location"
              type="text"
              defaultValue={user.location}
              fullWidth
              inputProps={{ maxLength: 64 }}
            />
            <br></br>
            <Box sx={{ ml: 2 }}>
                    <FormControlLabel
                        control={
                            <Radio
                                checked={selectedOption2 === 'option1'}
                                onChange={handleChange2}
                                value="option1"
                            />
                        }
                        label="Show Location to Registered Users"
                    />
                </Box>
                <Box sx={{ ml: 2 }}>
                    <FormControlLabel
                        control={
                            <Radio
                                checked={selectedOption2 === 'option2'}
                                onChange={handleChange2}
                                value="option2"
                            />
                        }
                        label="Verified Students Only"
                    />
                </Box>
            <br></br>

            {/* PHONE */}
            <TextField
              margin="dense"
              name="phoneNumber"
              id="phoneNumber"
              label="Phone Number"
              defaultValue={user.phoneNumber}
              type="tel"
              fullWidth
              error={formState.phoneNumber?.error}
              helperText={formState.phoneNumber?.message}
              variant='standard'
              inputProps={{ maxLength: 16 }}
            />
            <br></br>
                <Box sx={{ ml: 2 }}>
                    <FormControlLabel
                        control={
                            <Radio
                                checked={selectedOption3 === 'option1'}
                                onChange={handleChange3}
                                value="option1"
                            />
                        }
                        label="Show Phone Number to Registered Users"
                    />
                </Box>
                <Box sx={{ ml: 2 }}>
                    <FormControlLabel
                        control={
                            <Radio
                                checked={selectedOption3 === 'option2'}
                                onChange={handleChange3}
                                value="option2"
                            />
                        }
                        label="Verified Students Only"
                    />
                </Box>
            <br></br>
            <br></br>
            <Button type="submit" name="saveSettings" variant="contained" color="primary" sx={{color:'white'}} fullWidth>
                Save Settings
            </Button>

            {/* RED BUTTONS */}
            <Grid container spacing={3} justifyContent="center" pt={6}>
                <Grid item xs={12} sm={6} md={6} lg={6}>
                    <Button variant="contained" onClick={handleOpenPopup1} name="resetPassword" color="error" sx={{color:'white'}} fullWidth>
                        Reset Password
                    </Button>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={6}>
                <Button variant="contained" onClick={handleOpenPopup2} name="resetPassword" color="error" sx={{color:'white'}} fullWidth>
                        Delete Account
                    </Button>
                </Grid>
            </Grid>
            <div>
                <Dialog open={openPopup1} onClose={handleClosePopup1}>
                    <DialogContent>
                        <>
                            <form onSubmit={handleSetupSubmit}>
                                
                                <TextField
                                    margin="dense"
                                    variant="standard"
                                    id="newPassword"
                                    name="newPassword"
                                    label="New Password"
                                    type="password"
                                    fullWidth
                                    required
                                    inputProps={{ maxLength: 64 }}
                                    value={newPassword}
                                    onChange={(e) => setNewPassword(e.target.value)}
                                />

                                {/* Add vertical spacing */}
                                <Box mt={3} />

                                <Button
                                    type="submit"
                                    name="saveNewPassword"
                                    variant="contained"
                                    color="primary"
                                    sx={{ color: 'white' }}
                                    fullWidth
                                >
                                    Save New Password
                                </Button>

                                {error && <div style={{ color: 'red' }}>{error}</div>}
                            </form>
                        </>
                    </DialogContent>
                </Dialog>
            </div>
            <div>
                <Dialog open={openPopup2} onClose={handleClosePopup2}>
                    <DialogContent>
                        <>
                            <Box mt={6} />
                            <div>
                                <Typography align='center'>
                                    Are you sure you want to delete your account?<br></br>
                                    This action cannot be undone.
                                </Typography>
                            </div>

                            {/* Add vertical spacing */}
                            <Box mt={1} />

                            <Grid container spacing={3} justifyContent="center" pt={6}>
                                <Grid item xs={12} sm={6} md={6} lg={6}>
                                    <Button type="submit" name="yesDeleteAccount" variant="contained" color="primary" sx={{color:'white'}} fullWidth onClick={handleDeleteAccount}>
                                        Yes
                                    </Button>
                                </Grid>
                                <Grid item xs={12} sm={6} md={6} lg={6}>
                                    <Button type="submit" name="deleteAccount" variant="contained" color="error" sx={{color:'white'}} fullWidth onClick={handleClosePopup2}>
                                        No
                                    </Button>
                                </Grid>
                            </Grid>
                        </>
                    </DialogContent>
                </Dialog>
            </div>
            <br></br>
          </div>
        </form>

        <Dialog
            open={isProfileImageDialogOpen}
            onClose={handleProfileImageDialogClose}
            aria-labelledby="responsive-dialog-title"
        >
            <DialogTitle id="responsive-dialog-title">{"Upload Profile Image"}</DialogTitle>
            <DialogContent>
                <div {...getProfileImageRootProps()} style={{ border: '1px dashed gray', padding: '20px', cursor: 'pointer' }}>
                    <input {...getProfileImageInputProps()} />
                    <Typography variant="body1">Drag & drop an image here, or click to select one</Typography>
                </div>
            </DialogContent>
            <DialogActions>
                <Button autoFocus onClick={handleProfileImageDialogClose} color="primary">
                    Cancel
                </Button>
            </DialogActions>
        </Dialog>

        <Dialog
            open={isHeroDialogOpen}
            onClose={handleHeroDialogClose}
            aria-labelledby="responsive-dialog-title"
        >
            <DialogTitle id="responsive-dialog-title">{"Upload Banner Image"}</DialogTitle>
            <DialogContent>
                <div {...getHeroRootProps()} style={{ border: '1px dashed gray', padding: '20px', cursor: 'pointer' }}>
                    <input {...getHeroInputProps()} />
                    <Typography variant="body1">Drag & drop an image here, or click to select one</Typography>
                </div>
            </DialogContent>
            <DialogActions>
                <Button autoFocus onClick={handleHeroDialogClose} color="primary">
                    Cancel
                </Button>
            </DialogActions>
      </Dialog>
    </div>
);

}