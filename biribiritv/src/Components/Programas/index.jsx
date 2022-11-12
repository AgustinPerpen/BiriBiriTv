import React from 'react'
import { Link } from "react-router-dom"; 
import Grid from "@mui/material/Grid";

import "../Programas/programas.scss"

import PalabraSantaLink from "../../assets/PalabraSantaLink.jpg"

const Programas = () => {
  return (
    <div className='programas'>
      <div className='programas__container'>
        <Grid container justifyContent="center" alignItems="center">
            <Grid item xs={16} md={6}>                    
                <Link to="/palabra-santa"><img src={PalabraSantaLink} className="programas__box-img"/></Link>               
            </Grid>    
        </Grid>
      </div>
    </div>
  )
}

export default Programas