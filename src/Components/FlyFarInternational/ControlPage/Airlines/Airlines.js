import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import "./Airlines.css";

const Airlines = () => {
  return (
    <Box style={{ width: "97%" }}>
      <Box mt={3}>
        <Grid container>
          <Grid md={6}>
            <Box>
              <Typography
                style={{
                  color: "#000000",
                  fontSize: "20px",
                  fontWeight: "500",
                }}
              >
                Airlines
              </Typography>
            </Box>
          </Grid>
          <Grid md={6} display="flex" justifyContent={"flex-end"}>
            <Box style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <Box>
                <button
                  style={{
                    cursor: "pointer",
                    fontSize: "15px",
                    border: "none",
                    height: "30px",
                    backgroundColor: "#003566",
                    color: "#fff",
                    padding: "0px 22px",
                  }}
                >
                  Add Airlines
                </button>
              </Box>
              <Box className="airlineBtn1">
                <input type="text" placeholder="search" />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Box className="balance-transaction" marginTop={"20px"}>
        <table>
          <tr>
            <th>Airlines ID</th>
            <th>Airlines Name</th>
            <th style={{ textAlign: "right", paddingRight: "12px" }}>
              Action{" "}
            </th>
          </tr>

          <tr>
            <td>0055</td>
            <td>JAZZERA AIRLINES</td>
            <td style={{ textAlign: "right" }}>
              <Box>
                <button
                  style={{
                    cursor: "pointer",
                    fontSize: "14px",
                    border: "none",
                    height: "24px",
                    backgroundColor: "#003566",
                    color: "#fff",
                    padding: "0px 22px",
                    marginRight: "10px",
                  }}
                >
                  Update
                </button>
                <button
                  style={{
                    cursor: "pointer",
                    fontSize: "14px",
                    border: "none",
                    height: "24px",
                    backgroundColor: "#003566",
                    color: "#fff",
                    padding: "0px 22px",
                  }}
                >
                  Delate
                </button>
              </Box>
            </td>
          </tr>
        </table>
      </Box>
    </Box>
  );
};

export default Airlines;
