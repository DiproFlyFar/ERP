import { Button, Pagination, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { DarkmodeEnable } from "../../App";
import TableCompoWithOperation from "../TableCompo/TableCompoWithOperation";
import "./Agent.css";

const AllAgent = () => {
  const { isDark } = React.useContext(DarkmodeEnable);
  const agentTableHeadings = [
    "ID",
    "Agent Name",
    "Email",
    "Phone Number",
    "Status",
    "Company Name",
    "Balance",
    "Operation",
  ];

  const [bookingData, setBookingData] = useState([]);
  useEffect(() => {
    fetch("https://api.flyfarint.com/v.1.0.0/Admin/Agent/allAgent.php?all")
      .then((res) => res.json())
      .then((data) => setBookingData(data));
  }, []);

  return (
    <Box sx={{ width: "99%" }}>


      <TableCompoWithOperation
        rows={bookingData}
        arr={agentTableHeadings}

      ></TableCompoWithOperation>
      {console.log("Booking Data is", bookingData)}
      <Stack spacing={2} sx={{ float: "right", mb: "20px" }}>
        <Pagination count={10} color="primary" shape="rounded" />
      </Stack>
    </Box>
  );
};

export default AllAgent;
