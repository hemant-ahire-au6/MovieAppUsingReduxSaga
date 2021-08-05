import React, {useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import NavBar from '../Navbar/NavBar'
import { getMovies} from '../../redux/action/action';
import {Container,Row,Col} from "react-bootstrap"
import SortComponet from './sortComponent';
import Movies from "../Movie"
import "./MovieSort.css"


function MovieSort() {

    const dispatch = useDispatch()
    const movies = useSelector(state => state.movies)

    const newMovies = movies?movies:[]

    useEffect(() => {
        dispatch(getMovies())
    }, [dispatch])

    return (
        <div>
            <NavBar/>

           <Container sm={12} style={{marginTop:"10px"}}>
           <h5 style={{margin:"20px"}}>Popular Movies</h5>
               <Row>
                   <Col sm={3}>
                    <SortComponet/>
                   </Col>
                   <Col sm={9} className="image-column">
                        {
                            newMovies.map(movie =>{
                                return <Movies key={movie.id} data={movie} />
                            })
                        }
                   </Col>
               </Row>
           </Container>
        </div>
    )
}

export default MovieSort
