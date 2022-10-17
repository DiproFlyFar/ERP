import { Box } from "@mui/system";
import React from "react";
import { DarkmodeEnable } from "../../App";
import "./Agent.css";

const Reject = () => {
    const { isDark } = React.useContext(DarkmodeEnable);
    return (
        <Box sx={{ width: "99%" }}>
            Reject
        </Box>
    );
};

export default Reject;
