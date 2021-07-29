import {GET_MOVIES,GET_MOVIES_FAILURE,GET_MOVIES_SUCCESS, SEARCH_MOVIES, SEARCH_MOVIES_SUCCESS} from './constant'

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