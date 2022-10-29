import React from 'react'
import { Link } from 'react-router-dom'
import './landing.css'
import Logo from '../../assets/LandingImage.png'
import TwitchLogo from '../../assets/TwitchLogo.png'
import Programs from '../../assets/Program.png'
import Grid from "@mui/material/Grid"

const Landing = () => {       

  return (
    <div className="main">
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid item xs={12} md={4}>
          <div>
            Lorem ipsum dolor sit amet consectetur adipiscing elit fusce litora,
            et molestie viverra ullamcorper suspendisse tincidunt montes posuere
            accumsan sem, massa tempus elementum ac conubia etiam morbi
            efficitur. Luctus eu convallis viverra imperdiet...
          </div>
        </Grid>
        <Grid item xs={12} md={7}>
          <img src={Logo} className="left-img" />
        </Grid>
      </Grid>
      <div className='twitch-logo-container'>
            <div className='twitch-logo'>
                <img src={TwitchLogo}/>
            </div>
            <div className='twitch-info'>
                Lorem ipsum dolor sit amet consectetur adipiscing elit fusce litora, et molestie viverra ullamcorper suspendisse tincidunt montes posuere accumsan sem, massa tempus elementum ac conubia etiam morbi efficitur. Luctus eu convallis viverra imperdiet inceptos a efficitur arcu, vehicula nulla aptent sagittis suspendisse per fames dolor, parturient mattis rutrum donec condimentum eros semper. Pellentesque ipsum a ut finibus nullam potenti erat penatibus ac tristique taciti consectetur odio, ultrices arcu viverra ultricies tempor lorem lobortis ornare elementum pretium netus. Maximus interdum cubilia sapien vehicula suspendisse auctor imperdiet nec blandit, non facilisi platea nibh in vivamus varius euismod donec venenatis, eleifend parturient sagittis pharetra hendrerit odio aliquet ornare. Posuere neque lacinia risus finibus eu leo cras lobortis nisl vitae pulvinar consectetur conubia torquent class aliquam dictum, maecenas nostra cubilia nisi senectus id eget feugiat suspendisse mollis
            </div>
        </div>
        <div className='programs'>
            <div className='program-image'>
                <Link to='/programas'><img src={Programs}/></Link>
            </div>
        </div>
    </div>
  );
};

export default Landing;
