import { Box, Pagination, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import TableCompoWithCallIcon from "../../TableCompo/TableCompoWithCallIcon";

const All = () => {
  const bookingHeadings = [
    "Refference",
    "System",
    "Type",
    "Departure & Arrival",
    "Date",
    "Airlines",
    "PNR",
    "PAX",
    "Company Name",
    "",
    "View Details",
    "Call",
  ];
  function createBooking(
    ref,
    sys,
    type,
    deperture,
    date,
    airlines,
    pnr,
    pax,
    company,
    details
  ) {
    return {
      ref,
      sys,
      type,
      deperture,
      date,
      airlines,
      pnr,
      pax,
      company,
      details,
    };
  }
  const rowsAgents = [
    createBooking(
      "38534341",
      "Sabre",
      "oneway",
      "DAC - CXB",
      "24/05/2022",
      "US Bangla",
      "XXXXXXX",
      "8",
      "XYZ"
    ),
    createBooking(
      "38534343",
      "Sabre",
      "oneway",
      "DAC - CXB",
      "24/05/2022",
      "US Bangla",
      "XXXXXXX",
      "8",
      "XYZ"
    ),
    createBooking(
      "38534342",
      "Sabre",
      "oneway",
      "DAC - CXB",
      "24/05/2022",
      "US Bangla",
      "XXXXXXX",
      "8",
      "XYZ"
    ),
    createBooking(
      "38534145",
      "Sabre",
      "oneway",
      "DAC - CXB",
      "24/05/2022",
      "US Bangla",
      "XXXXXXX",
      "8",
      "XYZ"
    ),
    createBooking(
      "38534347",
      "Sabre",
      "oneway",
      "DAC - CXB",
      "24/05/2022",
      "US Bangla",
      "XXXXXXX",
      "8",
      "XYZ"
    ),
  ];
  const [bookingData, setBookingData] = useState([]);
  useEffect(() => {
    fetch("https://api.flyfarint.com/v.1.0.0/Admin/Agent/allAgent.php?all")
      .then((res) => res.json())
      .then((data) => setBookingData(data));
  }, []);
  return (
    <Box>
      <TableCompoWithCallIcon
        rows={rowsAgents}
        arr={bookingHeadings}
        details="manageWebsite/www.flyfarint.com/booking/all"
      >
        {console.log(bookingData, bookingHeadings)}
      </TableCompoWithCallIcon>
      <Stack spacing={2} sx={{ float: "right", mb: "20px", mt: "50px" }}>
        <Pagination count={10} color="primary" shape="rounded" />
      </Stack>
    </Box>
  );
};

export default All;
