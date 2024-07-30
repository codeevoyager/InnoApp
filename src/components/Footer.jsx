import React from 'react';
import appStore from "../images/app-store.png";
import googlePlay from "../images/google-play.png";

function Footer() {
  return (
    <div className="footer">
        <div className="mobile-app">
            <div className="app-content">
                <h4>Download our mobile app</h4>
                <div className="opacity-75">Your app is your tool for better solution with your follower, making it easier for them to keep up to date.</div>
            </div>

            <div className="app-link">
                <h5>Available on</h5>
                <div className='d-flex gap-4'>
                    <img src={appStore} alt="apple-store" />
                    <img src={googlePlay} alt="google-play" />
        
                </div>
            </div>
        </div>

        <div className="footer-content">
            <div className="footer-left">
                <h2>LOGO</h2>
                <p className="opacity-75">
                123 Film Street <br/>
                Cinematown, 12345 <br/>
                Media island, Indonesia</p>
                <div className="d-flex gap-3">
                    <i className="fa fa-instagram" aria-hidden="true"></i>
                    <i className="fa fa-twitter" aria-hidden="true"></i>
                    <i className="fa fa-youtube-play" aria-hidden="true"></i>

                </div>
            </div>

            <div className="footer-right">
                <div className="d-flex flex-column">
                    <h5>General</h5>
                    <p>About</p>
                    <p>Privacy Policy</p>
                    <p>Terms & Condition</p>
                    <p>Careers</p>
                </div>
                <div className="d-flex flex-column">
                    <h5>Support</h5>
                    <p>Help</p>
                    <p>FAQ</p>
                    <p>Contact us</p>
                    <p>Customer service</p>
                </div>
                <div className="d-flex flex-column">
                    <h5>Others</h5>
                    <p>Media center</p>
                    <p>Partner</p>
                    <p>Pers</p>
                    <p>Office</p>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Footer