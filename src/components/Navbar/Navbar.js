import { Box } from '@mui/system';
import React from 'react'
import './Navbar.css';
function Navbar() {
    return (
        
        <nav  >
            <h1 class="logo">Rashed...</h1>
           <ul>
              <li><a href="#">Home</a></li> 
              <li><a href="#">About</a></li> 
              <li><a href="#">Contact</a></li>
              <li><a href="#">Services</a></li>  
           </ul>
           
        </nav>
       
    )
}

export default Navbar
