import React from 'react'


const Img_API = "https://image.tmdb.org/t/p/w500"

function castCards(props) {
    const {character,original_name,profile_path} = props.data
    return (
        <div className="movie1">
       
         <img src={Img_API+profile_path} alt={original_name} />
         <div className="movie-info1">
             <h6>{original_name}</h6>
             <h6><i>{character}</i></h6>
         </div>
         {/* <div className="movie-over">
             <h3>OverView:</h3>
             <p>{overview}</p>
         </div> */}
     </div>
    )
}

export default castCards;
