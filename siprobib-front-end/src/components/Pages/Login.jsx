import React, { Component } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

function Login(props){
    return(
        <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center',  flexDirection: 'column', height: '100vh'}}>
            <Card sx={{display: 'flex', justifyContent: 'center', alignItems: 'center',  flexDirection: 'column', width: '40vw', maxWidth: '350px'}}>
                <CardContent>
                    <Typography variant='h5'>Iniciar Sessión</Typography><br/>
                    <TextField required id="username" label="Nombre de usuario" variant="outlined" sx={{margin: '20px'}} /><br/>
                    <TextField required id="password" label="Contraseña" type='password' variant="outlined" sx={{margin: '20px'}} /><br/>
                    <Button id="submit-button" variant="contained" color="primary" sx={{margin: '20px'}} >Iniciar Sessión</Button>
                </CardContent>
            </Card>
        </Box>
    );
}

export default Login;