import React from 'react';
import recommend from "./data/recommend.json";


function Recommend() {
  return (
    <div className="section">
        <div className="container-fluid">
            <h4>Recommend for you</h4>
            <div className="row">
            {recommend.map((movie)=>(
            <div key={movie.id} className="col-lg-3 col-md-6 col-6 movie-section">
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
            </div>
        </div>
    </div>
  )


}

export default Recommend