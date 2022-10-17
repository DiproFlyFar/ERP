import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Payment = () => {


  return (
    <Box>
      {" "}
      <Box sx={{ display: "flex", flexWrap: "wrap" }}>
        {" "}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mt: "20px",
            flexWrap: "wrap",
            width: "100%",
          }}
        >
          <Box>
            <NavLink
              to="/manageWebsite/www.flyfarint.com/payment/all"
              className={({ isActive }) =>
                isActive ? "selected_tab" : "not_selected_tab"
              }
            >
              {" "}
              ALL
            </NavLink>

            <NavLink
              to="/manageWebsite/www.flyfarint.com/payment/pending"
              className={({ isActive }) =>
                isActive ? "selected_tab" : "not_selected_tab"
              }
            >
              Pending
            </NavLink>
            <NavLink
              to="/manageWebsite/www.flyfarint.com/payment/approved"
              className={({ isActive }) =>
                isActive ? "selected_tab" : "not_selected_tab"
              }
            >
              Approved
            </NavLink>
            <NavLink
              to="/manageWebsite/www.flyfarint.com/payment/cancelled"
              className={({ isActive }) =>
                isActive ? "selected_tab" : "not_selected_tab"
              }
            >
              Cancelled
            </NavLink>
          </Box>
          {/* Select Type Section */}
          <Box>

            <select name="cars" id="cars" style={{ width: "250px", padding: "10px", border: "1px solid #003566",marginRight:"25px" }}>
              <option value="volvo" color="#003566">Select Type</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select></Box>

        </Box>


        <Outlet></Outlet>
      </Box>
    </Box>
  );
};

export default Payment;
