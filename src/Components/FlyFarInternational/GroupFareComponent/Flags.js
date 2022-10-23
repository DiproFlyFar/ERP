import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';

const Flags = ({ code }) => {
    const [flag, setFlag] = useState({});
    useEffect(() => {
        fetch(`https://api.flyfarint.com/v.1.0.0/AirMaterials/Airlines.php?search=${code}`).then(res => res.json()).then(data => setFlag(data))
    }, {})
    return (
        <Box>
            <Box sx={{display:"flex"}}>
            <img src={`https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/${code}.png`} style={{width:"50px"}}/>
            <Typography>  {flag[0]?.name}</Typography>
            </Box>
          
          
        </Box>
    );
};

export default Flags;