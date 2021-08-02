import React from "react"
import {Link} from "react-router-dom"


const Img_API = "https://image.tmdb.org/t/p/w500"

function Movie(props){

    const {title,poster_path,overview,vote_average,id} = props.data
   
    return(
      
       <div className="movie">
          <Link to={`/movie/${id}`}>
           <img src={Img_API+poster_path} alt={title} />
           <div className="movie-info">
               <h3>{title}</h3>
               <span>{vote_average}</span>
           </div>
           <div className="movie-over">
               <h3>OverView:</h3>
               <p>{overview}</p>
           </div>
           </Link>
       </div>
    )
}

export default Movie;