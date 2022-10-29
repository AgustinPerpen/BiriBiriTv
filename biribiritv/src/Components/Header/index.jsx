import React from 'react'
import { Link } from 'react-router-dom'
import './header.css'
import Logo from '../../Assets/HeaderLogo.png'

const Header = () => {
  return (
    <div className='header'>
        <div className='main-container'>
            <Link style={{textDecoration: 'none'}} to='/'><img src={Logo} /></Link>    
        </div>
        <nav>
            <Link style={{textDecoration: 'none'}} to="/">Home   </Link>
            <Link style={{textDecoration: 'none'}} to='/programas'>Programas   </Link>
            <Link style={{textDecoration: 'none'}} to='/contacto'>Contacto   </Link>
        </nav>
    </div>
  );
};

export default Header;
