import React from 'react';
import Grid from '@mui/system/Unstable_Grid';
import chair from '../../../images/chair.png'
import bg from '../../../images/bg.png'
import { Typography, Button, Container } from '@mui/material';
import { Box } from '@mui/system';
const bannerBg = {
    background: `url(${bg})`,
    padding:'40px'
}
const verticalCenter = {
    display: 'flex',
    height: '450',
    alignItems: 'center',

}
const Banner = () => {
    return (
        <Container style={bannerBg } sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid style={{...verticalCenter ,textAlign: 'left' }} xs={12} md={6}>
                    <Box>
                        <Typography variant='h3'>
                            Your new style <br />
                            Starts here
                        </Typography>
                        <Typography sx={{my:5, fontsize: 14, color: 'gray' }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur inventore ea voluptate impedit necessitatibus tempore recusandae quia esse nobis cupiditate.
                        </Typography>
                        <Button variant='contained'>Get Appointment</Button>
                    </Box>
                </Grid>
                <Grid xs={12} md={6} style={verticalCenter }>
                    <img style={{ width: '350px' }} src={chair} alt="" />
                </Grid>

            </Grid>
        </Container>
    );
};

export default Banner;