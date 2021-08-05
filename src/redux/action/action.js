import {
    GET_CAST_AND_CREW,
    GET_MOVIES,
    GET_MOVIES_FAILURE,
    GET_MOVIES_SUCCESS, 
    GET_MOVIE_DETAILS, 
    GET_MOVIE_DETAILS_SUCESS, 
    GET_MOVIE_REVIEW, 
    GET_MOVIE_VIDEOS, 
    POPULARITY_ASCENDING, 
    POPULARITY_DECENDING, 
    RATING_ASCENDING, 
    RATING_DECENDING, 
    RELEASE_DATE_ASCENDING, 
    RELEASE_DATE_DECENDING, 
    SEARCH_MOVIES, 
    SEARCH_MOVIES_SUCCESS,
    TITLE_A_TO_Z} from './constant'

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

export const getMovieReview = (payload) =>{
    return {
        type:GET_MOVIE_REVIEW,
        payload:payload
    }
}

export const getMovieVideos = (payload)=>{
    return {
        type:GET_MOVIE_VIDEOS,
        payload:payload
    }
}

export const getPopularityDecending = ()=>{
    return {
        type:POPULARITY_DECENDING
    }
}

export const getPopularityAscending = ()=>{
    return {
        type:POPULARITY_ASCENDING
    }
}

export const getRatingDecending = ()=>{
    return {
        type:RATING_DECENDING
    }
}

export const getRatingAscending = ()=>{
    return {
        type:RATING_ASCENDING
    }
}

export const getReleaseDateAscending = ()=>{
    return {
        type:RELEASE_DATE_ASCENDING
    }
}

export const getReleaseDateDecending = ()=>{
    return {
        type:RELEASE_DATE_DECENDING
    }
}


export const getAtoZ = ()=>{
    return {
        type:TITLE_A_TO_Z
    }
}