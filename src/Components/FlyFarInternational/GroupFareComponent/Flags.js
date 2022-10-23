import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';

const Flags = ({ code }) => {
    const [flag, setFlag] = useState({});
    useEffect(() => {
        fetch(`https://api.flyfarint.com/v.1.0.0/AirMaterials/Airlines.php?search=${code}`).then(res => res.json()).then(data => setFlag(data))
    }, {})
    return (
        <Box>
            {flag[0]?.name}
        </Box>
    );
};

export default Flags;