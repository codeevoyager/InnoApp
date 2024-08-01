import React from 'react';
import Carousel from 'react-multi-carousel';
import adventure from "./data/adventure.json";


function Adventure() {
    const responsive = {
        desktop: {
            breakpoint: { max: 2000, min: 1024 },
            items: 4,
            slidesToSlide: 2 
          },
          laptop: {
            breakpoint: { max: 1230, min: 464 },
            items: 3,
            slidesToSlide: 2 
          },
          tablet: {
            breakpoint: { max: 950, min: 0 },
            items: 2,
            slidesToSlide: 2 
          },
          mobile: {
            breakpoint: { max: 600, min: 0 },
            items: 1,
            slidesToSlide: 1 
          }
      };

  return (
    <div className="section">
        <p className="section-title">Adventure</p>
            
            <Carousel
                swipeable={true}
                draggable={true}
                centerMode={false}
                responsive={responsive}
                ssr={true} 
                keyBoardControl={true}
                transitionDuration={500}
                containerClass="movie-slides"
                itemClass="movie-item">    
                {adventure.map((movie)=>(
                <div key={movie.id} className="movie-section">
                    <div className="movie-card">
                        <img className="movie-card-img" src={movie.posterUrl} />
    
                        <div className="movie-card-details">
                            <div className="d-flex align-items-start gap-2">
                                <p>{movie.title}</p>
                                <p>{movie.year}</p>
                                <p>{movie.runtime}min</p>
                                <p className="badge text-bg-secondary d-flex align-items-center">{movie.rating}</p>
                            </div>
                            <span className="badge text-bg-danger">More details</span>
                        </div>
    
                    </div>
                </div>
                ))}
            </Carousel>
    </div>
    )

}

export default Adventure