import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import "./CurrencyPage.css";

const CurrencyPage = () => {
  return (
    <Box style={{ width: "97%" }}>
      <Box mt={3}>
        <Box>
          <Typography
            style={{
              color: "#000000",
              fontSize: "20px",
              fontWeight: "500",
            }}
          >
            Currency Converter 
          </Typography>
        </Box>
        <Grid container spacing={2}>
          <Grid item md={4}>
            <Box className="currencyBtn1">
              <label>ERP GDS Converter</label>
              <input type="text" placeholder="" />
            </Box>
          </Grid>
          <Grid item md={4}>
            <Box className="currencyBtn1">
              <label>ERP GDS Converter</label>

              <input type="text" placeholder="" />
            </Box>
          </Grid>

          <Grid item md={2} display={"flex"} alignItems="flex-end">
            <Box>
              <button
                style={{
                  cursor: "pointer",
                  fontSize: "14px",
                  border: "none",
                  height: "30px",
                  backgroundColor: "#70A5D8",
                  color: "#fff",
                  padding: "0px 30px",
                  marginRight: "10px",
                }}
              >
                Save
              </button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default CurrencyPage;
