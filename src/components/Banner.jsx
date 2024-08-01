import React from "react";
import banner from "../assets/banner.json";
import {Carousel} from "react-bootstrap";

const BannerCarousel = ({ banner }) => {
    return (
      <div className="carousel-container">
        <Carousel className="banner" >
          {banner.map((banner, index) => (
            <Carousel.Item key={index} interval={4000}>
              
              <img src={banner.backgroundImg} alt={banner.title}/>

              <Carousel.Caption>
                <p className="banner-title">{banner.title}</p>
                <div className="banner-rating">
                  <p className="text-warning"><i className="fa fa-star pe-2" aria-hidden="true"></i>{banner.rating}</p>
                  <div>{banner.year}</div>
                </div>
                <div className="d-flex gap-2 my-2">
                  {banner.genre.map((genre, id) => (
                    <span key={id} className="badge text-bg-dark">{genre}</span>))}
                </div>
                <p>{banner.description}</p>
                <div className="d-flex gap-2">
                  <p type="button" className="btn btn-light banner-btn"><i className="fa fa-play pe-2" aria-hidden="true"></i>Play</p>
                  <p type="button" className="btn btn-dark banner-btn">See details</p>
                </div>
              </Carousel.Caption>

            </Carousel.Item>
          ))}
        </Carousel>
        <div className="carousel-shadow top-shadow"></div>
        <div className="carousel-shadow bottom-shadow"></div>
      </div>
    )
  }

function Banner(){

    return(
        <div>
            <BannerCarousel banner = {banner} />
        </div>
    )
    
}

export default Banner;