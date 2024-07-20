import React from 'react'
import Layout from '../Components/Layout/Layout'
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import MailIcon from '@mui/icons-material/Mail';
import CallIcon from '@mui/icons-material/Call';
import { Call } from '@mui/icons-material';

const Contact = () => {
  return (
    <Layout>
      <Box sx={{my: 10, ml:10,"& h2":{fontWeight:'bold', mb:2}}}>
        <Typography variant='h2'> Contact My Restaurant  </Typography>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
          Quisquam mollitia officia quaerat impedit exercitationem modi libero culpa, 
          commodi iure consequuntur incidunt magni? Dolorem, 
          officia recusandae id quidem aspernatur nesciunt assumenda.
        </p>
      </Box>
      <Box sx={{my:5,width:'600px',ml:10,"@media (max-width:600px)":{
        width:'300px',

      }}}>
        <TableContainer component={Paper}>
          <Table aria-aria-label='contact table'>
            <TableHead>
              <TableRow>
                <TableCell sx={{bgcolor:'black',color:'white'}} align='center'>
                  Contact Details
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                <SupportAgentIcon sx={{color:'red', pt:1}}/> 1234567890 (tollfree)
                </TableCell>
                
              </TableRow>
              <TableRow>
              <TableCell>
                <MailIcon sx={{color:'skyblue', pt:1}}/> help@myrest.com
                </TableCell>
              </TableRow>
              <TableCell>
                <CallIcon sx={{color:'green', pt:1}}/> 0987654321
                </TableCell>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

    </Layout>
  )
}

export default Contact