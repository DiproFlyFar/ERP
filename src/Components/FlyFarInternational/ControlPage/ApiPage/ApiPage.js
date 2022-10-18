import { Box, Typography } from "@mui/material";
import React from "react";
import "./ApiPage.css";

const ApiPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        mt: "20px",
        flexWrap: "wrap",
        width: "100%",
      }}
    >

        
      <Typography
        style={{ color: "#000000", fontSize: "20px", fontWeight: "500" }}
      >
        Manage API
      </Typography>

      <Box>
        <span>Sabre</span>
        <button>Deactivate</button>
      </Box>
    </Box>
  );
};

export default ApiPage;
