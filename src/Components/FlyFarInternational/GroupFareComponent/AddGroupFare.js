import { Box, Typography } from '@mui/material';
import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const AddGroupFare = () => {
    return (
        <div>
            <Typography sx={{ color: "#212A41", fontWeight: "600" }}>Add Group Fare</Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap" }}>
                {" "}
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        mt: "20px",
                        flexWrap: "wrap",
                        width: "100%",
                    }}
                >
                    <NavLink
                        to="/manageWebsite/www.flyfarint.com/groupFare/nonStop"
                        className={({ isActive }) =>
                            isActive ? "selected_tab" : "not_selected_tab"
                        }
                    >
                        {" "}
                        Non Stop
                    </NavLink>

                    <NavLink
                        to="/manageWebsite/www.flyfarint.com/groupFare/oneStop"
                        className={({ isActive }) =>
                            isActive ? "selected_tab" : "not_selected_tab"
                        }
                    >
                        One Stop
                    </NavLink>
                    <NavLink
                        to="/manageWebsite/www.flyfarint.com/groupFare/twoStop"
                        className={({ isActive }) =>
                            isActive ? "selected_tab" : "not_selected_tab"
                        }
                    >
                        Two Stop
                    </NavLink>
                </Box>
                <Outlet></Outlet>
            </Box>
        </div>
    );
};

export default AddGroupFare;