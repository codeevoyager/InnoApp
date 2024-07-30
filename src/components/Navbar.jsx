import React, { useState } from "react";

function Navbar(){

    const [active, setActive] = useState(false);

    function nav(){
        setActive(!active);
    }

    return(
        <div className="navigation">
            <div className="navbar-logo">
                <p className="logo">LOGO</p>   
                <div className="navbar-menu" onClick={nav}>
                    <i className="fa fa-bars" aria-hidden="true"></i>
                </div> 
            </div>

            <div className={`navbar-section ${active ? "active" : ""}`}>
                <div>
                    <p>Home</p>
                    <p>TV Shows</p>
                    <p>Movies</p>
                    <p>Live Show</p>
                </div>
                <div>
                    <p><i className="fa fa-search"></i></p>
                    <p type="button" className="btn btn-light fw-bold">Sign in</p>
                </div>
            </div>
            
        </div>
    )
}

export default Navbar;