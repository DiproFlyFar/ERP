import {
  Button,
  Grid,
  Pagination,
  Stack,
  Typography,
  Modal,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { NavLink } from "react-router-dom";
import { DarkmodeEnable } from "../../App";
import TableCompoWithOperation from "../TableCompo/TableCompoWithOperation";
import "./Agent.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#fff",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

const AllAgent = () => {
  const { isDark } = React.useContext(DarkmodeEnable);

  const [open, setOpen] = React.useState(false);

  const [agentData, setAgentData] = useState([]);
  console.log(agentData);

  const handleOpen = async (agentId) => {
    setOpen(true);
    await fetch(
      `https://api.flyfarint.com/v.1.0.0/Admin/Agent/allAgent.php?agentId=${agentId}`
    )
      .then((res) => res.json())
      .then((data) => setAgentData(data[0]));
  };

  const handleClose = () => setOpen(false);

  const [bookingData, setBookingData] = useState([]);

  useEffect(() => {
    fetch("https://api.flyfarint.com/v.1.0.0/Admin/Agent/allAgent.php?all")
      .then((res) => res.json())
      .then((data) => setBookingData(data));
  }, []);

  return (
    <Box style={{ width: "97%" }}>
      <Box className="balance-transaction agentModal" marginTop={"20px"}>
        <table>
          <tr>
            <th>Agent ID</th>
            <th>Agent Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Status</th>
            <th>Company Name</th>
            <th>Balance</th>
            <th>Operation</th>
          </tr>

          {bookingData.map((data) => (
            <tr>
              <td>{data?.agentId}</td>
              <td>{data?.name}</td>
              <td>{data?.email}</td>
              <td>{data?.phone}</td>
              <td>{data?.status}</td>
              <td>{data?.company}</td>
              <td></td>
              <td>
                <div>
                  <Button
                    onClick={() => handleOpen(data?.agentId)}
                    sx={{
                      color: `${isDark ? "white" : "#003566"}`,
                      fontWeight: "600",
                    }}
                  >
                    Details
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </table>

        <Box className="agentModal">
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box
              sx={{ ...style, width: 600 }}
              style={{ border: "none", borderRadius: "5px" }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Box sx={{ width: "100%" }}>
                  {" "}
                  <Typography sx={{ color: "#70A5D8", fontSize: "17px" }}>
                    Agent ID:{agentData?.agentId}
                  </Typography>
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                    sx={{
                      fontSize: "25px",
                      color: "#003566",
                      fontWeight: "bold",
                    }}
                  ></Typography>
                  <Typography
                    id="modal-modal-description"
                    sx={{
                      mt: 2,
                      width: "70%",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <span sx={{ width: "40%" }}>Agent Name: </span>{" "}
                    <span
                      style={{
                        width: "60%",
                        textAlign: "left",
                        marginLeft: "10%",
                      }}
                    >
                      {" "}
                      {agentData?.name}
                    </span>
                  </Typography>
                  <Typography
                    id="modal-modal-description"
                    sx={{
                      mt: 2,
                      width: "70%",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <span style={{ width: "30%" }}>Email: </span>{" "}
                    <span
                      style={{
                        width: "60%",
                        textAlign: "left",
                        marginLeft: "10%",
                      }}
                    >
                      {agentData?.email}
                    </span>
                  </Typography>
                  <Typography
                    id="modal-modal-description"
                    sx={{
                      mt: 2,
                      width: "70%",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <span sx={{ width: "40%" }}>Phone Number : </span>{" "}
                    <span
                      style={{
                        width: "60%",
                        textAlign: "left",
                      }}
                    >
                      {agentData?.phone}
                    </span>
                  </Typography>
                  <Typography
                    id="modal-modal-description"
                    sx={{
                      mt: 2,
                      width: "70%",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <span sx={{ width: "40%" }}>Company Address: </span>{" "}
                    <span
                      style={{
                        width: "60%",
                        textAlign: "left",
                      }}
                    >
                      {agentData?.companyadd}
                    </span>
                  </Typography>
                </Box>
                <Box sx={{ marginTop: "-15px" }}>
                  {/* <img src={row.companyImage} width="171px" /> */}
                </Box>
              </Box>
              <Box sx={{ float: "right" }}>
                <Button
                  sx={{
                    background: "#003566",
                    color: "white",
                    marginRight: "10px",
                    borderRadius: "0",
                    "&:hover": {
                      background: "#003566",
                    },
                  }}
                >
                  Hold
                </Button>
                <Button
                  sx={{
                    background: "#DC143C",
                    color: "white",
                    borderRadius: "0",
                    "&:hover": {
                      background: "#DC143C",
                    },
                  }}
                >
                  Delete
                </Button>
              </Box>
            </Box>
          </Modal>
        </Box>
      </Box>
    </Box>
  );
};

export default AllAgent;
