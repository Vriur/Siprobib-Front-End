import React from 'react';
import * as constants from './../../constants';
import TwitterLogo from '../../resources/twitter.png';
import InstagramLogo from '../../resources/instagram.png';
import GmailLogo from '../../resources/gmail.png';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

const logo = {
    width: '50px', 
    height: '50px',
    margin: '5px',
};

const card = {
    marginTop: '5%',
    marginX: '10%',
    padding: '50px',
};

function Contact(){
    return(
        <Box>
            <Card sx={card}>
                <CardContent>
                    <Typography variant='h3'>{constants.ABOUT_US}</Typography>
                    <Typography variant='body1'>{constants.ABOUT_US_PARAGRAPH}</Typography>
                </CardContent>
                <CardActions>
                    <Link href={constants.TWITTER_LINK}>
                        <Box 
                            component='img'
                            src={TwitterLogo} 
                            alt='Twitter'
                            sx={logo} />
                    </Link>

                    <Link href={constants.INSTAGRAM_LINK}>
                        <Box 
                            component='img'
                            src={InstagramLogo} 
                            alt='Instagram'
                            sx={logo} />
                    </Link>

                    <Link href={constants.GOOGLE_LINK}>
                        <Box 
                            component='img'
                            src={GmailLogo} 
                            alt='Gmail'
                            sx={logo} />
                    </Link>
                </CardActions>
            </Card>
        </Box>
    );
}

export default Contact;