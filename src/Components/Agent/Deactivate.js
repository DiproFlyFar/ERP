import { Box } from "@mui/system";
import React from "react";
import { DarkmodeEnable } from "../../App";
import "./Agent.css";

const Deactivate = () => {
    const { isDark } = React.useContext(DarkmodeEnable);
    return (
        <Box sx={{ width: "99%" }}>

            Deactivate

        </Box>
    );
};

export default Deactivate;
