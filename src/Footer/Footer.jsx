import React from "react";
import playStore from "../assets/playstore.png";
import appleStore from "../assets/applestore.png";
import "./footer.css";
import { faFacebook, faTwitter, faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    < div className="footer">
      <div className="first-line">
        <div className="terms-of-use">
          <p>Terms of Use</p>
          <p>Privacy-Policy</p>
          <p>Blog</p>
          <p>FAQ</p>
          <p>Watch List</p>
        </div>
        <p className="bold">Follow US</p>
        <p className="bold">Streamit App</p>
      </div>

      <div className="second-line">
        <p className="footer-paragraph">
          {" "}
          &#169; 2022 STREAMIT. All Rights Reserved. All videos and shows on
          this platform are trademarks of, and all related images and content
          are the property of, Streamit Inc. Duplication and copy of this is
          strictly prohibited. All rights reserved.
        </p>
        <div className="footer-icons"> 
            <FontAwesomeIcon icon={faFacebook}  className='icon'/>
            <FontAwesomeIcon icon={faTwitter} className='icon'/>
            <FontAwesomeIcon icon={faGithub} className='icon' />
            <FontAwesomeIcon icon={faInstagram} className='icon' />
        </div>

        <div className="brand-logos">
            <div className="flex">
                <img src={appleStore} alt="apple store logo" />
                <span>App Store</span>
            </div>
            <div className="flex">
                <img src={playStore} alt="play store logo"/>
                <span>Google Play Store</span>
            </div>
            
        </div>

      </div>
    </div>
  );
};

export default Footer;
