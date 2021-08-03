import React, {useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Movie from "../Movie"
import { getMovies} from '../../redux/action/action';


function ImagesDiv() {
    const dispatch = useDispatch()
    const movies = useSelector(state => state.movies)


    useEffect(() => {
        dispatch(getMovies())
    }, [dispatch])
    return (
        <div>
            <div className="image-div">
                {movies.map(movie => {
                    return <Movie key={movie.id} data={movie} />
                })}
            </div>
        </div>
    )
}

export default ImagesDiv
