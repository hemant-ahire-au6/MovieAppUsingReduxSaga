import React from "react"
import {Link} from "react-router-dom"


const Img_API = "https://image.tmdb.org/t/p/w500"

function Movie(props){

    const {title,poster_path,id,release_date} = props.data
   
    return(
      
       <div className="movie1">
          <Link to={`/movie/${id}`}>
           <img src={Img_API+poster_path} alt={title} />
           <div className="movie-info1">
               <h6>{title}</h6>
               <h6>{release_date}</h6>
           </div>
           {/* <div className="movie-over">
               <h3>OverView:</h3>
               <p>{overview}</p>
           </div> */}
           </Link>
       </div>
    )
}

export default Movie;