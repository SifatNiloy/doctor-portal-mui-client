import React from 'react';
import Box from '@mui/system/Box';
import Grid from '@mui/system/Unstable_Grid';
import styled from '@mui/system/styled';
import chair from '../../../images/chair.png'
import bg from '../../../images/bg.png'
import { Typography, Button } from '@mui/material';
const Banner = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid xs={12} md={5}>
                   <Typography variant='h3'>
                        Your new style <br />
                        Starts here
                   </Typography>
                   <Typography sx={{fontsize:14, color:'gray'}}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur inventore ea voluptate impedit necessitatibus tempore recusandae quia esse nobis cupiditate.
                   </Typography>
                    <Button variant='contained'>Get Appointment</Button>
                </Grid>
                <Grid xs={12} md={7}>
                    <img style={{width:'350px'}} src={chair} alt="" />
                </Grid>
                
            </Grid>
        </Box>
    );
};

export default Banner;