import { Box, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";

const GroupFare = () => {
  return <Box sx={{ width: "80%", mt: "70px" }}>
    <Grid container spacing={2} p={3} sx={{ boxShadow: "0px 0px 4px rgba(84, 84, 84, 0.11)", borderRadius: "12px" }} >
      <Grid item xs={2}>
        <Box sx={{ display: "flex" }}>
          <Typography sx={{ fontSize: "12px", border: "1px solid #238800", borderRadius: "50%", height: "70px", width: "70px", padding: "10px", textAlign: "center", color: "#FF0000" }}>Fly Emirates</Typography>
          <Box sx={{ ml: "10px"}}>
            <Typography sx={{ fontSize: "17px", color: "#FF0000", fontWeight: "600", }}>Fly Emirates</Typography>
            <Typography color="#003566" sx={{fontSize:"12px",fontWeight:"550"}}>EMA380</Typography>
          </Box>
        </Box>


      </Grid>
      <Grid item xs={2} ml="10px">
        <Typography sx={{fontWeight:"550"}}>DAC - 19:30</Typography>
        <Typography sx={{fontSize:"12px",color:"#003566",fontWeight:"600"}}>Dhaka</Typography>
        <Typography sx={{fontSize:"14px",color:"#C7C7C7"}}>Sun 03 Jul 2022</Typography>
        <Typography sx={{mt:"30px",fontSize:"12px",fontWeight:"600"}}>Economy</Typography>


      </Grid>
      <Grid item xs={2}>
        <Typography>31:25 Hrs | 2 Stops</Typography>

      </Grid>
      <Grid item xs={2}  >
        <Typography>DXB - 19:30</Typography>

      </Grid>
      <Grid item xs={2} >
        <Typography>CF            68000 BDT</Typography>

      </Grid>
    </Grid>
  </Box>;
};

export default GroupFare;
