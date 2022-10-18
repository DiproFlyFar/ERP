import React, { useState, useContext } from "react";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, Grid, Typography } from "@mui/material";
import { DarkmodeEnable } from "../../App";
import { CircularProgress } from "@material-ui/core";
import { useLocation } from "react-router-dom";

function Row({ row, isLoading }) {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const { isDark } = useContext(DarkmodeEnable);

  return (
    <React.Fragment>


      <TableRow className={`${isDark ? "t_body_dark" : "t_body"}`}>
        <>   <TableCell
          component="th"
          scope="row"
          align="center"
          sx={{
            color: `${isDark ? "white" : "#003566"}`,
          }}
        >
          {row.id}
        </TableCell>
          <TableCell
            component="th"
            scope="row"
            align="center"
            sx={{
              color: `${isDark ? "white" : "#003566"}`,
            }}
          >
            {row.agentId}
          </TableCell>
          <TableCell
            component="th"
            scope="row"
            align="center"
            sx={{
              color: `${isDark ? "white" : "#003566"}`,
            }}
          >
            {row.reciever}
          </TableCell>
          <TableCell
            component="th"
            scope="row"
            align="center"
            sx={{
              color: `${isDark ? "white" : "#003566"}`,
            }}
          >
            {row.sender}
          </TableCell>
          <TableCell
            component="th"
            scope="row"
            align="center"
            sx={{
              color: `${isDark ? "white" : "#003566"}`,
            }}
          >
            {row.transactionId}
          </TableCell>
          <TableCell
            component="th"
            scope="row"
            align="center"
            sx={{
              color: `${isDark ? "white" : "#003566"}`,
            }}
          >
            {row.amount}
          </TableCell>
          <TableCell
            component="th"
            scope="row"
            align="center"
            sx={{
              color: `${isDark ? "white" : "#003566"}`,
            }}
          >
            {row.dateTime}
          </TableCell>
          <TableCell
            component="th"
            scope="row"
            align="center"
            sx={{
              color: `${isDark ? "white" : "#003566"}`,
            }}
          >
            {row.status}

          </TableCell>

          <TableCell align="center">
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => {
                setOpen(!open);
              }}
              sx={{ color: `${isDark ? "white" : "#003566"}` }}
            >
              {open ? (
                <p
                  style={{
                    padding: "5px",
                    fontWeight: "600",
                    textAlign: "center",
                    width: "100px",
                    fontSize: "15px",

                    color: `${isDark ? "white" : "#003566"}`,
                  }}
                >
                  Hide Details
                </p>
              ) : (
                <p
                  style={{
                    padding: "5px",
                    textAlign: "center",
                    width: "100px",
                    fontSize: "15px",
                    color: `${isDark ? "white" : "#003566"}`,
                    fontWeight: "600",
                  }}
                >
                  View Details
                </p>
              )}
            </IconButton>
          </TableCell></>

      </TableRow>


      <TableRow>
        <TableCell
          style={{
            paddingBottom: 0,
            paddingTop: 0,
          }}
          className={`${isDark ? "accordion_dark" : "accordion_light"}`}
          colSpan={9}
        >
          <Collapse
            in={open}
            timeout="auto"
            unmountOnExit
            sx={{ width: "100%", marginBottom: "30px" }}
          >
            {/* Collapsed Detail section with input textfields */}
            <Box sx={{ margin: 3 }}>
              <Box>
                <Typography
                  sx={{
                    fontSize: "20px",
                    color: `${isDark ? "white" : "#003566"}`,
                    fontWeight: "600",
                  }}
                >
                  Reff #{row.ref}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    width: "30%",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: "bold",
                      color: `${isDark ? "white" : "#003566"}`,
                    }}
                  >
                    Type: {row.paymentmethod}
                  </Typography>
                  <Typography sx={{ fontWeight: "bold" }}>
                    Agent ID: {row.agentId}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "50px",
                    color: `${isDark ? "white" : "#003566"}`,
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      width: "70%",
                      justifyContent: "space-between",
                      color: `${isDark ? "white" : "#003566"}`,
                    }}
                  >
                    <div>
                      <Typography sx={{}}>
                        Transaction ID:{" "}
                        <span
                          style={{
                            marginLeft: "100px",
                            fontWeight: "600",
                          }}
                        >
                          {row.transactionId}
                        </span>{" "}
                      </Typography>
                      <Typography sx={{}}>
                        Transaction Amount:{" "}
                        <span
                          style={{
                            marginLeft: "100px",
                            fontWeight: "600",
                          }}
                        >
                          {row.amount}
                        </span>
                      </Typography>
                      <Typography sx={{}}>
                        Transaction Date:{" "}
                        <span
                          style={{
                            marginLeft: "100px",
                            fontWeight: "600",
                          }}
                        >
                          {row.dateTime}
                        </span>
                      </Typography>
                    </div>
                    <div>
                      <Typography sx={{}}>
                        Reciver Account Name :{" "}
                        <span
                          style={{
                            marginLeft: "100px",
                            fontWeight: "600",
                          }}
                        >
                          {row.reciever}
                        </span>{" "}
                      </Typography>
                      <Typography>
                        Sender Account Name{" "}
                        <span
                          style={{
                            marginLeft: "100px",
                            fontWeight: "600",
                          }}
                        >
                          {row.sender}
                        </span>
                      </Typography>
                    </div>
                  </Box>

                  <Box
                    sx={{
                      textDecoration: "underline",
                      fontWeight: "600",
                      fontSize: "17px",
                    }}
                  >
                    View Attachment
                  </Box>
                </Box>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  width: "22%",
                  float: "right",
                  marginTop: "30px",

                  justifyContent: "space-between",
                }}
              >
                <Button
                  sx={{
                    background: "#70A5D8",
                    width: "45%",
                    color: "white",
                    borderRadius: "0",
                  }}
                >
                  Approve
                </Button>
                <Button
                  sx={{
                    background: "#DC143C",
                    width: "45%",
                    color: "white",
                    borderRadius: "0",
                  }}
                >
                  Reject
                </Button>
              </Box>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}
const TableDetailsPayment = ({ rows, arr, isLoading }) => {
  const location = useLocation();

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        position: "relative"
      }}
    >

      {/* Loading Spinner */}
      {
        isLoading && <Box sx={{ display: "flex", justifyContent: "center", padding: "20px", position: "absolute", top: "20%", width: "100%" }} spacing={2} direction="row">

          <CircularProgress color="inherit" />
        </Box>
      }
      <TableContainer
        component={Paper}
        sx={{
          width: "100%",
          marginTop: "30px",
          boxShadow: "none",

        }}
      >
        <Table aria-label="collapsible table">

          <TableHead>
            <TableRow sx={{ backgroundColor: "#70A5D8", border: "0" }}>
              <TableCell
                sx={{ color: "white", p: "10px", textAlign: "center" }}
              >
                Refference
              </TableCell>
              <TableCell
                sx={{ color: "white", p: "10px", textAlign: "center" }}
              >
                Agent ID
              </TableCell>
              <TableCell
                sx={{ color: "white", p: "10px", textAlign: "center" }}
              >
                Reciver Account
              </TableCell>
              <TableCell
                sx={{ color: "white", p: "10px", textAlign: "center" }}
              >
                Sender Acc
              </TableCell>
              <TableCell
                sx={{ color: "white", p: "10px", textAlign: "center" }}
                colSpan={3}
              >
                Transaction{" "}
              </TableCell>
              <TableCell
                sx={{ color: "white", p: "10px", textAlign: "center" }}
              >
                Status
              </TableCell>
              <TableCell
                sx={{ color: "white", p: "10px", textAlign: "center" }}
                colSpan={3}
              >
                &nbsp;&nbsp;&nbsp;&nbsp;Action
              </TableCell>
            </TableRow>
            <TableRow sx={{ background: "#70A5D8", }}>
              <TableCell align="center" colSpan={4}></TableCell>
              <TableCell
                align="center"
                colSpan={1}
                sx={{
                  background: "#003566",
                  color: "white",
                  textAlign: "center",
                }}
              >
                ID
              </TableCell>
              <TableCell
                align="center"
                colSpan={1}
                sx={{ background: "#003566" }}
              >
                <span style={{ color: "white" }}>Amount</span>
              </TableCell>
              <TableCell
                align="center"
                colSpan={1}
                sx={{ background: "#003566" }}
              >
                <span style={{ color: "white" }}>Date</span>
              </TableCell>
              <TableCell align="center" colSpan={3}></TableCell>
            </TableRow>
          </TableHead>


          <TableBody >


            {rows?.map((row) => (
              location.pathname === "/manageWebsite/www.flyfarint.com/payment/all" ? <Row key={row.id} row={row} arr={arr} isLoading={isLoading} /> : location.pathname === "/manageWebsite/www.flyfarint.com/payment/pending" && row.status === "pending" ? <Row key={row.id} row={row} arr={arr} isLoading={isLoading} /> : location.pathname === "/manageWebsite/www.flyfarint.com/payment/approved" && row.status === "approved" ? <Row key={row.id} row={row} arr={arr} isLoading={isLoading} /> : null
              // <Row key={row.id} row={row} arr={arr} isLoading={isLoading} />
            ))}

          </TableBody>
        </Table>
      </TableContainer>

    </Box>
  );
};
export default TableDetailsPayment;
