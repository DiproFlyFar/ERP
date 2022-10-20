import { Button, Grid, MenuItem, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation, useQuery } from 'react-query';
import flightData from '../../../flightData';


import { DarkmodeEnable } from '../../../App';
import Select from 'react-select';

const NonStop = ({ textFields }) => {
    const { isDark } = React.useContext(DarkmodeEnable);
    const [isLoading, setIsLoading] = useState(false);

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


    const [departure, setDeparture] = React.useState('EUR');

    const handleChange = (event) => {
        setDeparture(event.target.value);
    };

    // useEffect(() => {
    //     setIsLoading(true)
    //     fetch(
    //         "https://api.flyfarint.com/v.1.0.0/Admin/GroupFare/addFare.php", {
    //         method: "POST",
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(nestedData)
    //     }
    //     ).then((res) => res.json()).then(d => {
    //         setIsLoading(false)
    //         console.log(d)
    //     })
    // }, [nestedData])
    const defaultValue = "Select Method";
    const ops = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
    ];
    const [selectedOption, setSelectedOption] = useState(null);
    const handleTypeSelect = e => {
        setSelectedOption(e.value);
    };
    const fdata = [{
        code: "QNT",
        name: "Niteroi Intl Airport",
        Address: "Niteroi,BRAZIL",
    },
    {
        code: "QQX",
        name: "Bath Rail Service",
        Address: "Bath,UNITED KINGDOM",
    },
    {
        code: "QQY",
        name: "York Rail Station",
        Address: "York,UNITED KINGDOM",
    },
    {
        code: "QRO",
        name: "Queretaro Intl Airport",
        Address: "Queretaro,MEXICO",
    },]
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
                        {/* 
                        <select name="payment-method" id="payment-method" style={{ padding: "10px", border: "1px solid #003566", marginRight: "25px", cursor: "pointer" }} onChange={e => setSelectedOption(e.target.value)}> */}

                        {/* <option value="select-option">Select Payment Method</option> */}
                        {/* {
                                flightData.map(option =><Select options={}></Select>)
                            } */}


                        <Select
                            options={ops}
                            onChange={handleTypeSelect}
                            value={ops.filter(function (option) {
                                return option.value === selectedOption;
                            })}
                            label="Single select"
                        />




                        {/* </select> */}

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