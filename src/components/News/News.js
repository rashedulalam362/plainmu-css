
import { Grid } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import image from '../../images/card1.jpg'
import './News.css'
function News() {
    return (
        <Box sx={{ flexGrow: 1,marginTop:2 }}>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <item>
                <img src={image} alt="" />
            </item>
          </Grid>
          <Grid item xs={4}>
            <item>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque nam unde accusantium alias ex eum? Aperiam nihil sed, eius amet, nostrum accusamus fugit nam sint quae similique, architecto alias? Unde.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque nam unde accusantium alias ex eum? Aperiam nihil sed, eius amet, nostrum accusamus fugit nam sint quae similique, architecto alias? Unde.
            </item>
          </Grid>
         
        </Grid>
      </Box>

    )
}

export default News
