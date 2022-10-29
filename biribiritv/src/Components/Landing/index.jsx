import React from 'react'
import Logo from '../../assets/LandingImage.png'
import TwitchLogo from '../../assets/TwitchLogo.png'
import './landing.css'

const Landing = () => {
  return (
    <div>
    <div className='landing-container'>
        <div className='landing-info'>
            Lorem ipsum dolor sit amet consectetur adipiscing elit fusce litora, et molestie viverra ullamcorper suspendisse tincidunt montes posuere accumsan sem, massa tempus elementum ac conubia etiam morbi efficitur. Luctus eu convallis viverra imperdiet inceptos a efficitur arcu, vehicula nulla aptent sagittis suspendisse per fames dolor, parturient mattis rutrum donec condimentum eros semper. Pellentesque ipsum a ut finibus nullam potenti erat penatibus ac tristique taciti consectetur odio, ultrices arcu viverra ultricies tempor lorem lobortis ornare elementum pretium netus. Maximus interdum cubilia sapien vehicula suspendisse auctor imperdiet nec blandit, non facilisi platea nibh in vivamus varius euismod donec venenatis, eleifend parturient sagittis pharetra hendrerit odio aliquet ornare. Posuere neque lacinia risus finibus eu leo cras lobortis nisl vitae pulvinar consectetur conubia torquent class aliquam dictum, maecenas nostra cubilia nisi senectus id eget feugiat suspendisse mollis
        </div>
        <div className='landing-logo'>
            <img src={Logo}/>
        </div>
    </div>
    <div className='twitch-logo-container'>
        <div className='twitch-logo'>
            <img src={TwitchLogo}/>
        </div>
        <div className='twitch-info'>
            Lorem ipsum dolor sit amet consectetur adipiscing elit fusce litora, et molestie viverra ullamcorper suspendisse tincidunt montes posuere accumsan sem, massa tempus elementum ac conubia etiam morbi efficitur. Luctus eu convallis viverra imperdiet inceptos a efficitur arcu, vehicula nulla aptent sagittis suspendisse per fames dolor, parturient mattis rutrum donec condimentum eros semper. Pellentesque ipsum a ut finibus nullam potenti erat penatibus ac tristique taciti consectetur odio, ultrices arcu viverra ultricies tempor lorem lobortis ornare elementum pretium netus. Maximus interdum cubilia sapien vehicula suspendisse auctor imperdiet nec blandit, non facilisi platea nibh in vivamus varius euismod donec venenatis, eleifend parturient sagittis pharetra hendrerit odio aliquet ornare. Posuere neque lacinia risus finibus eu leo cras lobortis nisl vitae pulvinar consectetur conubia torquent class aliquam dictum, maecenas nostra cubilia nisi senectus id eget feugiat suspendisse mollis
        </div>
    </div>
    </div>
  )
}

export default Landing