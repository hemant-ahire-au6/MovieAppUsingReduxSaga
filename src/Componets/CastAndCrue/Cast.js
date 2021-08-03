import React from 'react'
import CastCards from './castCards'

function Cast(props) {
    
    const cast = props.cast && props.cast.cast ? props.cast.cast:[]
    return (
        <>
        <div className="container" style={{marginTop:"20px"}}>
            <h3>Top Billed Cast</h3>
            <div className="image-div">
                {cast.map(movie => {
                    return <CastCards key={movie.id} data={movie} />
                })}
            </div>
            <h5 style={{marginTop:"20px"}}>Full Cast& Crew</h5>
            
        </div>
        <hr/>
    </>
    )
}

export default Cast;
