import { Grid, TextField } from '@mui/material';
import React from 'react';
import { DarkmodeEnable } from '../../../App';

const TextFields = () => {
    const { isDark } = React.useContext(DarkmodeEnable);
    const textFields = ["Departure From", "Departure Time", "Arival To", "Arival Time", "Career Name", "Flight Number", "Seat", "Bag", "Base Price",]

    return (


        <Grid container spacing={2} mt={3}>
            {

                textFields?.map(t => <Grid item xs={3}>
                    <TextField
                        placeholder={t}
                        id="outlined-basic"
                        variant="outlined"
                        size="small"
                        className={`${isDark ? "input_dark" : "input_light"}`}
                        sx={{
                            "& fieldset": { border: "none" },
                        }}

                    />
                </Grid>)
            }
        </Grid>


    );
};

export default TextFields;