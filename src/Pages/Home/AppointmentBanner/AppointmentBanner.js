import React from 'react';
import Box from '@mui/system/Box';
import Grid from '@mui/system/Unstable_Grid';

import doctor from '../../../images/doctor2.png'
import bg from '../../../images/appointment-bg.png'
import { Button, Typography } from '@mui/material';

const appointmentBanner={
    background:`url(${bg})`,
    backgroundColor: "rgba(38, 76, 88 ,0.9)",
    backgroundBlendMode:'darken, luminosity',
    marginTop:150,
    
}

const AppointmentBanner = () => {
    return (
        <Box style={appointmentBanner} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid xs={12} md={6} lg={6}>
                    <img style={{ width: "400", marginTop: "-120px" , marginRight:'200px'}} src={doctor} alt="" />
                </Grid>
                <Grid xs={12} md={6} sx={{ display: 'flex', justifyContent: 'flex-start' ,textAlign:'left', alignItems:'center'}}>
                    <Box>
                        <Typography variant='h6' style={{ color: '#37D7E4' }} sx={{marginBottom:5}}>
                            Appointment
                        </Typography>
                        <Typography  variant='h4' style={{ color: 'white', fontSize: '14' }}>
                            Make an Appointment today
                        </Typography>
                        <Typography sx={{ my: 5 }} variant='h6' style={{ color: 'white', fontSize: '14', fontWeight: "300" }}>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt veritatis autem repellendus repudiandae corrupti. Pariatur temporibus illo iusto tempora totam?
                        </Typography>
                        <Button variant='contained'>Learn More</Button>
                    </Box>
                </Grid>
                
                
            </Grid>
        </Box>
    );
};

export default AppointmentBanner;