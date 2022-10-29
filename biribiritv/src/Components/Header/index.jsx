import React from 'react'
import Logo from '../../Assets/HeaderLogo.png'

const Header = () => {
  return (
    <div>
        <img src={Logo} />
        <nav>
            Home
        </nav>
    </div>
  )
}

export default Header