import { Box, Grid, Typography, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./Airlines.css";
import Pagination from "@mui/material/Pagination";

const Airlines = () => {
  const [airData, setAirData] = useState([]);
  const [mainAirData, setMainAirData] = useState([]);

  // Sets the state of the const for the given page and state.
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(1);
  let size = 20;

  // Handle a page change.
  const handlePageChange = (event, value) => {
    setPage(value);
    setMainAirData(airData.slice((value - 1) * size, value * size));
  };

  useEffect(() => {
    fetch("https://api.flyfarint.com/v.1.0.0/AirMaterials/Airlines.php?all")
      .then((res) => res.json())
      .then((data) => {
        const count = data.length;
        const pageNumber = Math.ceil(count / size);
        setPageCount(pageNumber);
        setAirData(data);
        setMainAirData(data);
      });
  }, []);

  return (
    <Box style={{ width: "97%" }}>
      <Box mt={3}>
        <Grid container>
          <Grid md={4}>
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
          <Grid md={8} display="flex" justifyContent={"flex-end"}>
            <Box
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
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
            <th>Airlines Code</th>
            <th>Airlines Name</th>
            <th>Airlines Bengali Name</th>

            <th style={{ textAlign: "right", paddingRight: "12px" }}>
              Action{" "}
            </th>
          </tr>

          {mainAirData?.slice(0, size).map((data) => (
            <tr>
              <td>{data?.code}</td>
              <td>{data?.name}</td>
              <td>{data?.nameBangla}</td>

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
          ))}
        </table>

        <Box
          sx={{
            width: "100%",
            my: 3,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Stack spacing={2}>
            <Pagination
              count={pageCount}
              onChange={handlePageChange}
              shape="rounded"
            />
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default Airlines;
