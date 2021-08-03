import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from "react-router-dom"
import { getMovieDetails } from '../../redux/action/action';
import Cast from '../CastAndCrue/Cast'
import Review from '../Review/review';
import VideoDiv from '../videoDiv/videoDiv';
import "./MovieDetails.css"

function MovieDetails() {
    const dispatch = useDispatch()

    const { id } = useParams()
    const movieData = useSelector(state => state.movieDetails)


    const cast = useSelector(state => state.castAndCrew)

    const Img_API = "https://image.tmdb.org/t/p/w500"

    useEffect(() => {
        dispatch(getMovieDetails(id))
    }, [dispatch, id])


    return (
        <div>
            <div className="container-fluid" >
                <div className="image">
                    <img src={Img_API + movieData.poster_path} alt="Movie Poster" />
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
            <Container>
                <Row>
                    <Col sm={8}>
                        <Row>
                            <Col>
                                <Cast cast={cast} />
                            </Col>
                        </Row>
                        <Row>
                            <Review />
                        </Row>
                        <Row>
                             {/* <iframe width="200" height="200" src="https://www.youtube.com/embed/pBVPlyM2T3Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
                            <VideoDiv/>
                        </Row>
                        
                    </Col>
                        <Col>

                        </Col>
                </Row>
            </Container>
            
        </div>


            )
}

            export default MovieDetails;
