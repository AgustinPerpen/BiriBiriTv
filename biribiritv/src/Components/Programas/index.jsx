import React from 'react'
import { Link } from "react-router-dom"; 

import "../Landing/landing.scss"

import PalabraSantaLink from "../../assets/PalabraSantaLink.jpg"

const Programas = () => {
  return (
    <div>
      <div className="banner">
            <Link to='/palabra-santa'><img src={PalabraSantaLink} width="800px"/></Link>
        </div>
    </div>
  )
}

export default Programas