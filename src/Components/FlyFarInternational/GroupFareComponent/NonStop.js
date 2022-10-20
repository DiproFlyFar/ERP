import { Button, Grid, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useForm } from 'react-hook-form';
import { DarkmodeEnable } from '../../../App';

const NonStop = ({ textFields }) => {
    const { isDark } = React.useContext(DarkmodeEnable);

    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
  

    return (


        <Box>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={2} mt={3}>
                    <Grid item xs={3}>
                        <TextField {...register("departureFrom")}
                            placeholder="Departure From"
                            id="outlined-basic"
                            variant="outlined"
                            size="small"
                            className={`${isDark ? "input_dark" : "input_light"}`}
                            sx={{
                                "& fieldset": { border: "none" },
                            }} />
                    </Grid>
                    <Grid item xs={3}>
                        <TextField {...register("departureTime")}
                            placeholder="Departure Time"
                            id="outlined-basic"
                            variant="outlined"
                            size="small"
                            className={`${isDark ? "input_dark" : "input_light"}`}
                            sx={{
                                "& fieldset": { border: "none" },
                            }} />
                    </Grid>
                    <Grid item xs={3}>
                        <TextField {...register("arrivalTo")}
                            placeholder="Arival To"
                            id="outlined-basic"
                            variant="outlined"
                            size="small"
                            className={`${isDark ? "input_dark" : "input_light"}`}
                            sx={{
                                "& fieldset": { border: "none" },
                            }} />
                    </Grid>
                    <Grid item xs={3}>
                        <TextField {...register("arrivalTime")}
                            placeholder="Arival Time"
                            id="outlined-basic"
                            variant="outlined"
                            size="small"
                            className={`${isDark ? "input_dark" : "input_light"}`}
                            sx={{
                                "& fieldset": { border: "none" },
                            }} />
                    </Grid>
                    <Grid item xs={3}>
                        <TextField {...register("careerName")}
                            placeholder="Career Name"
                            id="outlined-basic"
                            variant="outlined"
                            size="small"
                            className={`${isDark ? "input_dark" : "input_light"}`}
                            sx={{
                                "& fieldset": { border: "none" },
                            }} />
                    </Grid>
                    <Grid item xs={3}>
                        <TextField {...register("flightNumber")}
                            placeholder="Flight Number"
                            id="outlined-basic"
                            variant="outlined"
                            size="small"
                            className={`${isDark ? "input_dark" : "input_light"}`}
                            sx={{
                                "& fieldset": { border: "none" },
                            }} />
                    </Grid>
                    <Grid item xs={3}>
                        <TextField {...register("seat")}
                            placeholder="Seat"
                            id="outlined-basic"
                            variant="outlined"
                            size="small"
                            className={`${isDark ? "input_dark" : "input_light"}`}
                            sx={{
                                "& fieldset": { border: "none" },
                            }} />
                    </Grid>
                    <Grid item xs={3}>
                        <TextField {...register("bag")}
                            placeholder="Bag"
                            id="outlined-basic"
                            variant="outlined"
                            size="small"
                            className={`${isDark ? "input_dark" : "input_light"}`}
                            sx={{
                                "& fieldset": { border: "none" },
                            }} />
                    </Grid>
                    <Grid item xs={3}>
                        <TextField {...register("basePrice")}
                            placeholder="Base Price"
                            id="outlined-basic"
                            variant="outlined"
                            size="small"
                            className={`${isDark ? "input_dark" : "input_light"}`}
                            sx={{
                                "& fieldset": { border: "none" },
                            }} />
                    </Grid>
                    <Grid item xs={3}>
                        <TextField {...register("tax")}
                            placeholder="Tax"
                            id="outlined-basic"
                            variant="outlined"
                            size="small"
                            className={`${isDark ? "input_dark" : "input_light"}`}
                            sx={{
                                "& fieldset": { border: "none" },
                            }} />
                    </Grid>



                </Grid>
                <Button type="submit" style={{
                    padding: "5px",
                    background: "#70A5D8", width: "20%", color: "white", marginTop: "20px", borderRadius: "0", "&:hover": {
                        background: "#70A5D8"
                    }, border: "0", cursor: "pointer"
                }} >Submit</Button>
            </form>

        </Box>

    );
};

export default NonStop;