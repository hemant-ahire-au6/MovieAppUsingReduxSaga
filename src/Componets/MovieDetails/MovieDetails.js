import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {useParams} from "react-router-dom"
import { getMovieDetails } from '../../redux/action/action';
import "./MovieDetails.css"

function MovieDetails() {
   const dispatch = useDispatch()

    const {id} = useParams()
    const movieData = useSelector(state => state.movieDetails)
    console.log(movieData)

    const Img_API = "https://image.tmdb.org/t/p/w500"

    useEffect(() => {
        dispatch(getMovieDetails(id))
    }, [dispatch,id])


    return (
        <div className="container-fluid" >
           <div className="image">
            <img src={Img_API+movieData.poster_path} alt="Movie Poster"/>
           </div>
           <div className="main-content">
            <div>
                <h1>{movieData.title}</h1>
                <h5><i>{movieData.tagline}</i></h5>
                <div>
                    <span>release</span>
                    <span> {movieData.release_date}</span>
                </div>
            </div>
            <div>
                <h2>Overview:</h2>
                <p>{movieData.overview}</p>
            </div>
           </div>
        </div>
    )
}

export default MovieDetails;
