import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { FaPlane, FaCircle } from "react-icons/fa";
import { MdLuggage, MdEventSeat } from "react-icons/md";
const GroupFare = () => {
  return <Box sx={{ width: "85%", mt: "70px" }}>
    <Box sx={{ display: "flex", justifyContent: "right" }}>
      <Button sx={{
        background: "#70A5D8", marginBottom: "20px", color: "white", borderRadius: "0", "&:hover": {
          background: "#70A5D8"
        }
      }}>Add Group Fare</Button>
    </Box>
    <Box container sx={{ background: "white", boxShadow: "0px 0px 4px rgba(84, 84, 84, 0.11)", borderRadius: "12px", display: "flex", justifyContent: "space-between" }} >



      <Box sx={{ display: "flex", width: "25%" }} p={3}>
        <Typography sx={{ fontSize: "12px", border: "1px solid #238800", borderRadius: "50%", height: "70px", width: "70px", padding: "10px", textAlign: "center", color: "#FF0000" }}>Fly Emirates</Typography>
        <Box sx={{ ml: "10px" }}>
          <Typography sx={{ fontSize: "17px", color: "#FF0000", fontWeight: "600", }}>Fly Emirates</Typography>
          <Typography color="#003566" sx={{ fontSize: "12px", fontWeight: "550" }}>EMA380</Typography>
        </Box>
      </Box>



      <Box p={3} sx={{ width: "20%" }}>
        <Typography sx={{ fontWeight: "550" }}>DAC - 19:30</Typography>
        <Typography sx={{ fontSize: "12px", color: "#003566", fontWeight: "600" }}>Dhaka</Typography>
        <Typography sx={{ fontSize: "14px", color: "#C7C7C7" }}>Sun 03 Jul 2022</Typography>
        <Typography sx={{ mt: "30px", fontSize: "12px", fontWeight: "600" }}>Economy</Typography>


      </Box>
      <Box sx={{ width: "30%" }} p={3}>
        <Typography sx={{ fontSize: "10px", display: "flex", justifyContent: "center" }}> <span style={{ color: "#003566", fontWeight: "600" }}>31:25 Hrs |</span>  <span style={{ color: "#DC143C", fontWeight: "600" }}> 2 Stops</span></Typography>
        <Box >
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mt: "20px" }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <FaCircle style={{ color: "#C7C7C7" }} />
              <FaPlane style={{ color: "#003566", fontSize: "25px" }}></FaPlane>
            </div>

            <Box sx={{ background: "#DC143C", height: "10px", width: "35px", borderRadius: "5px", }}></Box>
            <Box sx={{ background: "#DC143C", height: "10px", width: "35px", borderRadius: "5px", }}></Box>
            <FaCircle style={{ color: "#C7C7C7" }} />

          </Box>
          <Box sx={{ borderBottom: "1px solid #C7C7C7", marginTop: "-13px" }}></Box>

        </Box>

        <Box sx={{ mt: "30%", display: "flex", justifyContent: "space-between", alignItems: "center" }}><span style={{ color: "#DC143C", fontWeight: "600" }}>Non Refundable</span> <span style={{ fontWeight: "600", display: "flex" }}><MdLuggage style={{ fontSize: "25px", color: "#DC143C", marginRight: "10px" }} /> 20kg</span></Box>
      </Box>
      <Box p={3} sx={{ width: "20%" }}>
        <Typography sx={{ fontWeight: "600", textAlign: "right" }}>DXB - 19:30</Typography>
        <Typography sx={{ fontSize: "12px", color: "#003566", fontWeight: "600", textAlign: "right" }}>Dubai</Typography>
        <Typography sx={{ fontSize: "14px", color: "#C7C7C7", textAlign: "right" }}>Sun 03 Jul 2022</Typography>
        <Box sx={{ mt: "40%", display: "flex", justifyContent: "right" }}>
          <span style={{ fontWeight: "600", display: "flex" }}><MdEventSeat style={{ fontSize: "25px", color: "#DC143C", marginRight: "10px" }} /> 9 seats</span>
        </Box>
      </Box>
      <Box sx={{ background: "linear-gradient(121.52deg, #5D7F9E 0%, #003566 77.49%)", color: "white", borderRadius: "0px 12px 12px 0px", width: "25%" }} p={3}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography sx={{ fontSize: "15px" }}>CF</Typography>
          <Typography sx={{ fontSize: "15px" }}> 68000 BDT</Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography sx={{ fontSize: "13px" }}>AF</Typography>
          <Typography sx={{ fontSize: "13px" }}>65000 BDT</Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography sx={{ fontSize: "13px" }}>CM</Typography>
          <Typography sx={{ fontSize: "13px" }}>5000 BDT</Typography>
        </Box>
        <Button sx={{
          marginTop: "30%", fontSize: "11px", marginLeft: "30px", color: "white", background: "#DC143C", borderRadius: "12px 0px", "&:hover": {
            background: "#DC143C"
          }
        }}>Modify Group Fare</Button>
      </Box>
    </Box>
  </Box >;
};

export default GroupFare;
