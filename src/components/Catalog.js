
import React, { useState } from "react";
import { Box, Typography, Link, IconButton, Grid } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import HomeCard from "./HomeCardDemo";
import Categories from "./Categories"; 
import NewItems from "./NewItems"; 

function Catalog() {
  const [startIdx, setStartIdx] = useState(0);
  const [endIdx, setEndIdx] = useState(3); 

  const handleNextClick = () => {
    
    const newStartIdx = startIdx + 1;
    const newEndIdx = endIdx + 1;

    setStartIdx(newStartIdx);
    setEndIdx(newEndIdx);
  };

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h3" sx={{ marginBottom: 2, color: "#2B7257" }}>
        <strong>Available now on the platform</strong>
      </Typography>
      {/* Use the Categories component */}
      <Categories />
      <Grid container spacing={3} sx={{ marginTop: 3, position: "relative" }}>
          <NewItems isHomePage={true} />
      </Grid>
    </Box>
  );
}

export default Catalog;
