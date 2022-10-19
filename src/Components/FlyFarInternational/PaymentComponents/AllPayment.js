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
    ).then((res) => res.json())

  })
  const defaultValue = "Select Method";
  const  [selectedOption,setSelectedOption] = useState(defaultValue)
  return (
    <Box
      sx={{
        marginTop: "30px",
        width: "98%",
        minHeight: "100vh",
      }}
    >    <Box sx={{  display:"flex", marginBottom: "50px" ,justifyContent:"right"}}> 
        <br></br>
        <select name="payment-method" id="payment-method" style={{ width: "250px", padding: "10px", border: "1px solid #003566", marginRight: "25px", cursor: "pointer" }}  onChange={e => setSelectedOption(e.target.value)}>

          <option value="cash">Cash</option>
          <option value="cheque">Cheque</option>
          <option value="bankTransfer">Bank Transfer</option>
          <option value="mobileTransfer">Mobile Transfer</option>


        </select>
      
        </Box>
       
       
      <TableDetailsPayment
        rows={data}
        arr={allPaymentArr}
        details="vendorDetails"
        isLoading={isLoading}
        selectedOption={selectedOption}
      ></TableDetailsPayment>

    </Box>
  );
};

export default AllPayment;
