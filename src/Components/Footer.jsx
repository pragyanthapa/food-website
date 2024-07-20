import React from 'react'
import { Box, Typography } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';

const Footer = () => {
  return (
    <>
    <Box sx={{textAlign:'center', bgcolor:'#1A1A19',color:'white',p:3}}>
        <Box sx={{margin:3,"& svg":{
            fontSize:60,
            cursor:"pointer",
            margin:2
        },
        "& svg:hover":{
            color:'goldenrod',
            transform:'translateX(5px)',
            transition:'all 400ms'
        }
        }}>
            {/* icons */}
            <FacebookIcon/>
            <XIcon/>
            <InstagramIcon/>
            <LinkedInIcon/>
            <GitHubIcon/>
        </Box>
        <Typography variant='h5' sx={{'@media (max-width:600px)':{
            fontSize:'1rem',
        }
        
    }}>
            All Rights Reserved &copy; Pragyan Thapa
        </Typography>
    </Box>
    </>
  )
}

export default Footer