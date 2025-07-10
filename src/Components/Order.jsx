import React from "react";
import './Order.css'
import {Box, Button,Typography} from '@mui/material'
const Order=()=>{
    return(
        <>
        <img src="/o3.png" className="imgs"/>
        <Box className='box1'>
        <Typography id="t1">Order Summaryy</Typography>
        <Typography id='t2'>You can now listen to millions of songs,<Box mt={'3 px'}></Box> audiobooks, and podcasts on any device <Box mt={'3 px'}></Box>anywhere you like!</Typography>
        <Box className='box2'><Typography className="t">Change</Typography><Typography id='t3'><span className="t33">Annual Plan</span><Box mt={'3 px'}></Box>$59.99/year</Typography></Box>
        <Button variant="contained" id="btn1">Proceed to Payment</Button>
        <Typography id="t4">Cancel Order</Typography>
        </Box>
        </>
    )
}
export default Order;