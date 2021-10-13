import { Card, CardContent, CardHeader, CardMedia, Typography } from '@mui/material'
import { Box } from '@mui/system';
import React from 'react'
import image from '../../images/card1.jpg';
import './CardDetails.css'
function CardDetails() {
  return (
    <Box sx={{display:'flex',
     marginTop: '10px',
       display: 'flex',
     
      alignItems: 'center'
    
    
    }}>
    <Card >
     <CardMedia>
       <img  className="img"  src={image} alt="" srcset=""  />
      </CardMedia>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardMedia>
       <img  className="img" src={image} alt="" srcset="" />
      </CardMedia>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
    </Card>
    </Box>
  )
}

export default CardDetails
