import { Box, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { FaPlane, FaCircle } from "react-icons/fa";
const GroupFare = () => {
  return <Box sx={{ width: "80%", mt: "70px" }}>
    <Grid container spacing={2} p={3} sx={{ boxShadow: "0px 0px 4px rgba(84, 84, 84, 0.11)", borderRadius: "12px" }} >
      <Grid item xs={2}>
        <Box sx={{ display: "flex" }}>
          <Typography sx={{ fontSize: "12px", border: "1px solid #238800", borderRadius: "50%", height: "70px", width: "70px", padding: "10px", textAlign: "center", color: "#FF0000" }}>Fly Emirates</Typography>
          <Box sx={{ ml: "10px" }}>
            <Typography sx={{ fontSize: "17px", color: "#FF0000", fontWeight: "600", }}>Fly Emirates</Typography>
            <Typography color="#003566" sx={{ fontSize: "12px", fontWeight: "550" }}>EMA380</Typography>
          </Box>
        </Box>


      </Grid>
      <Grid item xs={2} ml="10px">
        <Typography sx={{ fontWeight: "550" }}>DAC - 19:30</Typography>
        <Typography sx={{ fontSize: "12px", color: "#003566", fontWeight: "600" }}>Dhaka</Typography>
        <Typography sx={{ fontSize: "14px", color: "#C7C7C7" }}>Sun 03 Jul 2022</Typography>
        <Typography sx={{ mt: "30px", fontSize: "12px", fontWeight: "600" }}>Economy</Typography>


      </Grid>
      <Grid item xs={3} >
        <Typography sx={{ fontSize: "10px", display: "flex", justifyContent: "center" }}> <span style={{ color: "#003566", fontWeight: "600" }}>31:25 Hrs |</span>  <span style={{ color: "#DC143C", fontWeight: "600" }}> 2 Stops</span></Typography>
        <Box >
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mt: "20px" }}>
            <FaCircle style={{ color: "#C7C7C7" }} />
            <FaPlane style={{ color: "#003566" }}></FaPlane>
            <Box sx={{ background: "#DC143C", height: "10px", width: "35px", borderRadius: "5px" }}></Box>
            <Box sx={{ background: "#DC143C", height: "10px", width: "35px", borderRadius: "5px" }}></Box>
            <FaCircle style={{ color: "#C7C7C7" }} />

          </Box>
          <Box sx={{ borderBottom: "1px solid gray",marginTop:"-9px" }}></Box>
        </Box>


      </Grid>
      <Grid item xs={2}  >
        <Typography>DXB - 19:30</Typography>

      </Grid>
      <Grid item xs={2} >
        <Typography>CF 68000 BDT</Typography>

      </Grid>
    </Grid>
  </Box>;
};

export default GroupFare;
