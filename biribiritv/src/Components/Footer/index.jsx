import React from 'react'
import './footer.css'
import FooterImage from '../../assets/FooterImage.png'

const Footer = () => {
  return (
    <div className='footer-container'>
        <div className='footer-logo'>
            <img src={FooterImage} width="60px"/>
        </div>
        <div className='footer-info'>
            Lorem ipsum
        </div>
        <div className='footer-link'>
            <a href=''>Instagram</a>
            <a href=''>Twitch</a>
            <a href=''>Twitter</a>
            <a href=''>Spotify</a>
        </div>
    </div>
  )
}

export default Footer