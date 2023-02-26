import React, { useState } from 'react';
import * as constants from './../../constants';
import Button from './../Utils/Button';
import TextField from './../Utils/TextField';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function Login(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function handleUsername(event){
        setUsername(event.target.value);
    }

    function handlePassword(event){
        setPassword(event.target.value);
    }

    function handleSubmit(){

    }

    return(
        <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center',  flexDirection: 'column', height: '100vh'}}>
            <Card sx={{display: 'flex', justifyContent: 'center', alignItems: 'center',  flexDirection: 'column', width: '40vw', maxWidth: '350px'}}>
                <CardContent>
                    <Typography variant='h5'>{constants.LOG_IN}</Typography>

                    <TextField 
                        id='username' 
                        label={constants.LOG_IN_USERNAME}
                        value={username} 
                        required={true} 
                        fullWidth={true} 
                        handleChange={handleUsername} />

                    <TextField 
                        id='password' 
                        label={constants.LOG_IN_PASSWORD}
                        value={password} 
                        required={true} 
                        fullWidth={true} 
                        handleChange={handlePassword} />

                    <Button 
                        id='submit_button'
                        text={constants.LOG_IN}
                        handleClick={handleSubmit}
                        color='primary' />

                </CardContent>
            </Card>
        </Box>
    );
}

export default Login;