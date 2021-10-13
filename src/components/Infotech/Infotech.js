import { Box, margin } from '@mui/system'
import React from 'react'
import './Infotech.css'
function Infotech() {
    return (
        <div style={{ width: '100%', }}>
        <Box sx={{display: 'grid',mt:1,
        gridTemplateColumns:'repeat(3, 1fr)',
        bgcolor: 'primary.dark',
         '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7],
        },
        border: 2
         
       
      }}>
           <item  >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero, minus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore perferendis ut, maiores asperiores fuga ipsum!</item>
           <item sx={{ borderRight: 1 }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero, minus?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero, minus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore perferendis ut, maiores asperiores fuga ipsum!</item>
           <item>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero, minus?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero, minus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore perferendis ut, maiores asperiores fuga ipsum!</item>
        </Box> 
        </div>
    )
}

export default Infotech
