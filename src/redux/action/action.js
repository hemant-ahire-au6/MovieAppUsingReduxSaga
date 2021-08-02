import {
    GET_CAST_AND_CREW,
    GET_MOVIES,
    GET_MOVIES_FAILURE,
    GET_MOVIES_SUCCESS, 
    GET_MOVIE_DETAILS, 
    GET_MOVIE_DETAILS_SUCESS, 
    SEARCH_MOVIES, 
    SEARCH_MOVIES_SUCCESS} from './constant'

export const getMovies = (payload)=>{
    return {
        type:GET_MOVIES,
        payload:payload
    }
}

export const getMoviesSuccess = (payload)=>{
    return {
        type:GET_MOVIES_SUCCESS,
        payload:payload
    }
}

export const getMoviesFailure = (payload)=>{
    return {
        type:GET_MOVIES_FAILURE,
        payload:payload
    }
}

export const searchMovies = (payload)=>{
    return {
        type:SEARCH_MOVIES,
        payload:payload
    }
}

export const searchMovieSucess = (payload)=>{
    return {
        type:SEARCH_MOVIES_SUCCESS,
        payload:payload
    }
}

//movie details

export const getMovieDetails = (payload) =>{
    return {
        type:GET_MOVIE_DETAILS,
        payload:payload
    }
}

export const getMovieDetailsSuccess = (payload)=>{
    return {
        type:GET_MOVIE_DETAILS_SUCESS,
        payload:payload
    }
}

export const getCastAndCrew = (payload) =>{
    return {
        type:GET_CAST_AND_CREW,
        payload:payload
    }
}