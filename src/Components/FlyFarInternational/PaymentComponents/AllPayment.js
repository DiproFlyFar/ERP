import { Box, TableCell, TableRow } from "@mui/material";
import React, { useEffect, useState } from "react";
import { DarkmodeEnable } from "../../../App";
import TableDetailsPayment from "../../TableCompo/TableDetailsPayment";
import TablePayment from "../../TableCompo/TablePayment";
import { useQuery } from "react-query"
const AllPayment = () => {
  const { isDark } = React.useContext(DarkmodeEnable);
  const allPaymentArr = [
    "Refference",
    "Agent ID",
    "Reciver Acc No",
    "Sender Acc No",
    "Transaction",
    "",
    "",
    "Status",
    "",
    "Action",
  ];
  const [open, setOpen] = React.useState(false);


  // React Query
  const { isLoading, data } = useQuery("allPaymentData", () => { 
   return fetch(
      "https://api.flyfarint.com/v.1.0.0/Admin/DepositRequest/allRequest.php?all"
    ) .then((res) => res.json())
     
  })
  return (
    <Box
      sx={{
        marginTop: "30px",
        width: "98%",
        minHeight: "100vh",
      }}
    >
{      console.log("Data by react query",data)}
 
      <TableDetailsPayment
        rows={data}
        arr={allPaymentArr}
        details="vendorDetails"
        isLoading = {isLoading}
      ></TableDetailsPayment>
   
    </Box>
  );
};

export default AllPayment;
