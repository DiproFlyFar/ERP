import { Button, Grid, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { DarkmodeEnable } from '../../../App';

const NonStop = ({ textFields }) => {
    const { isDark } = React.useContext(DarkmodeEnable);

    const [nonStopData, setNonStopData] = useState([])
    const { register, handleSubmit } = useForm();
    const onSubmit = data => setNonStopData(data);

    const nestedData = {
        segment: nonStopData.segment,
        career: nonStopData.career,
        basePrice: nonStopData.basePrice,
        taxes: nonStopData.taxes,
        bags: nonStopData.bags,
        seat: nonStopData.seat,
        segments: [
            {
                depFrom: nonStopData.depFrom,
                arrTo: nonStopData.arrTo,
                depTime: nonStopData.depTime,
                arrTime: nonStopData.arrTime,
                flightNumber: nonStopData.flightNumber
            }
        ]
    }

    // const { isLoading, data={nonStopData} } = useQuery("allPaymentData", () => {
    //     return fetch(
    //         "https://api.flyfarint.com/v.1.0.0/Admin/GroupFare/addFare.php", {
    //         method: "POST",
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(data)
    //     }
    //     ).then((res) => res.json())

    // })
    useEffect(() => {
        fetch(
            "https://api.flyfarint.com/v.1.0.0/Admin/GroupFare/addFare.php", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(nestedData)
        }
        ).then((res) => res.json()).then(d => console.log(d))
    }, [nestedData])

    return (


        <Box>
            <form onSubmit={handleSubmit(onSubmit)}>

                <Grid container spacing={2} mt={3}>
                    <Grid item xs={3}>
                        <TextField {...register("segment")}
                            placeholder="Segment"
                            value="1"
                            id="outlined-basic"
                            variant="outlined"
                            size="small"
                            className={`${isDark ? "input_dark" : "input_light"}`}
                            sx={{
                                "& fieldset": { border: "none" },
                            }} />
                    </Grid>
                    <Grid item xs={3}>
                        <TextField {...register("depFrom")}
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
                        <TextField {...register("depTime")}
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
                        <TextField {...register("arrTo")}
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
                        <TextField {...register("arrTime")}
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
                        <TextField {...register("career")}
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
                        <TextField {...register("bags")}
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
                        <TextField {...register("taxes")}
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