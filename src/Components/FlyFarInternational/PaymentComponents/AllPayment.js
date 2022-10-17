import { Box, TableCell, TableRow } from "@mui/material";
import React, { useEffect, useState } from "react";
import { DarkmodeEnable } from "../../../App";
import TableDetailsPayment from "../../TableCompo/TableDetailsPayment";
import TablePayment from "../../TableCompo/TablePayment";

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

  const [paymentData, setPaymentData] = useState([]);
  useEffect(() => {
    fetch(
      "https://api.flyfarint.com/v.1.0.0/Admin/DepositRequest/allRequest.php?all"
    )
      .then((res) => res.json())
      .then((data) => setPaymentData(data));
  }, []);

  return (
    <Box
      sx={{
        marginTop: "30px",
        width: "98%",
        minHeight: "100vh",
      }}
    >
      <TableDetailsPayment
        rows={paymentData}
        arr={allPaymentArr}
        details="vendorDetails"
      ></TableDetailsPayment>
    </Box>
  );
};

export default AllPayment;
