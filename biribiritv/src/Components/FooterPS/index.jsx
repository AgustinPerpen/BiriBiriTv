import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";

import "./footerPS.scss";
import FooterImage from "../../Assets/FooterImage.png";
import InstagramIcon from "../../Assets/icons/instagram.png";
import TikTokIcon from "../../Assets/icons/tik-tok.png";
import TwitterIcon from "../../Assets/icons/twitter.png";
import YouTubeIcon from "../../Assets/icons/youtube.png";

const FooterPS = () => {

  const [email, setEmail] = useState("")
  const [instagram, setInstagram] = useState("")
  const [tikTok, setTikTok] = useState("")
  const [twitter, setTwitter] = useState("")
  const [psActive, setPsActive] = useState(true)

  useEffect(() =>{


    if(`${window.location.pathname}` === '/palabra-santa'){
      setEmail("palabrasanata.contacto@gmail.com")
      setInstagram("https://www.instagram.com/palabrasantaok")
      setTikTok("https://www.tiktok.com/@palabrasantaok")
      setTwitter("https://www.twitter.com/palabrasantaok")
    }else {
      setEmail("quefla.contacto@gmail.com")
      setInstagram("https://www.instagram.com/quefla_tv/")
      setTwitter("https://twitter.com/quefla_tv")
      setPsActive(false)
    }
  },[])  

  return (
    <div className="footer-PS">
      <Grid container alignItems="center">
        <Grid item xs={12} md={4}>
          <img src={FooterImage} className="footer-PS__img"/>
        </Grid>          
          <Grid item xs={12} md={4}>          
              <div className="footer-PS__contacto-box">
                <span className="title">Contactanos:</span>
                <span> {email} </span>
                <span> 341-7121552</span>
              </div>          
        </Grid>                          
        <Grid item xs={12} md={4}>
          <div className="footer-PS__box-redes">
            <>
              <img src={YouTubeIcon} className="footer-BB__link-icon"></img>
              <a href={"https://www.youtube.com/@Quefla_Tv"}>
                Youtube
              </a>
            </>
            <>
              {psActive
              ?
              <>        
                <img src={TikTokIcon} className="footer-PS__link-icon"></img>
                <a href={instagram}>TikTok</a>
              </>              
              :
              <></>
              }
            </>
              <>
                <img src={InstagramIcon} className="footer-PS__link-icon"></img>
                <a href={instagram}>Instagram</a>
              </>
          </div>
          <div className="footer-PS__box-redes">
            <>
              <img src={TwitterIcon} className="footer-PS__link-icon"></img>
              <a href={twitter}>Twitter</a>
            </>
          </div>
        </Grid>        
      </Grid>
    </div>
  );
};

export default FooterPS;
