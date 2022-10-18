import { Box, Typography } from "@mui/material";
import React from "react";
import "./ApiPage.css";

const ApiPage = () => {
  return (
    <Box style={{ width: "97%" }}>
      <Box mt={3}>
        <Typography
          style={{ color: "#000000", fontSize: "20px", fontWeight: "500" }}
        >
          Manage API
        </Typography>
      </Box>

      <Box
        style={{
          backgroundColor: "#E0ECFB",
          display: "block !important",
          borderRadius: "8px",
        }}
        mt={3}
      >
        <Box
          style={{
            display: "flex",
            justifyContent: "space-between",
            height: "50px",
            alignItems: "center",
            padding: "0px 20px",
          }}
        >
          <Typography style={{ color: "#003566", fontSize: "16px" }}>
            Sabre
          </Typography>
          <Box className="apiBtn1">
            <button>Deactivate</button>
          </Box>
        </Box>
      </Box>
      <Box
        style={{
          backgroundColor: "#E0ECFB",
          display: "block !important",
          borderRadius: "8px",
        }}
        mt={2}
      >
        <Box
          style={{
            display: "flex",
            justifyContent: "space-between",
            height: "50px",
            alignItems: "center",
            padding: "0px 20px",
          }}
        >
          <Typography style={{ color: "#003566", fontSize: "16px" }}>
            Travel Port Galelio
          </Typography>
          <Box className="apiBtn2">
            <button
              style={{
                cursor: "pointer",
                fontSize: "15px",
                border: "none",
                height: "30px",
                backgroundColor: "#003566",
                color: "#fff",
                padding: "0px 22px",
                borderRadius: " 5px",
              }}
            >
              Activate
            </button>
          </Box>
        </Box>
      </Box>

      <Box
        style={{
          backgroundColor: "#E0ECFB",
          display: "block !important",
          borderRadius: "8px",
        }}
        mt={2}
      >
        <Box
          style={{
            display: "flex",
            justifyContent: "space-between",
            height: "50px",
            alignItems: "center",
            padding: "0px 20px",
          }}
        >
          <Typography style={{ color: "#003566", fontSize: "16px" }}>
            Flyhub
          </Typography>
          <Box className="apiBtn2">
            <button
              style={{
                cursor: "pointer",
                fontSize: "15px",
                border: "none",
                height: "30px",
                backgroundColor: "#003566",
                color: "#fff",
                padding: "0px 22px",
                borderRadius: " 5px",
              }}
            >
              Activate
            </button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ApiPage;
