import * as types from "../action/constant"


const initialState = {
    movies:[],
    searchMovies:[],
    error:"",
    movieDetails:[],
    castAndCrew:[],
    movieReviews:[],
    movieVideos:[]
}

const reducer = (state=initialState,action)=>{
    switch (action.type){

        case types.GET_MOVIES:
            return{
                ...state
            }
        case types.GET_MOVIES_SUCCESS:
            return {
                ...state,
                movies:action.payload
            }
        case types.GET_MOVIES_FAILURE:
            return {
                ...state,
                error:action.payload
            }

        case types.SEARCH_MOVIES:
            return {
                ...state
            }

        case types.SEARCH_MOVIES_SUCCESS:
            return {
                ...state,
                movies:action.payload
            }

        case types.GET_MOVIE_DETAILS:
            return {
                ...state
            }

        case types.GET_MOVIE_DETAILS_SUCESS:
            return {
                ...state,
                movieDetails:action.payload
            }

        case types.GET_CAST_AND_CREW:
            return {
                ...state,
                castAndCrew:action.payload
            }
        
        case types.GET_MOVIE_REVIEW:
            return {
                ...state,
                movieReviews:action.payload
            }

        case types.GET_MOVIE_VIDEOS:
            return {
                ...state,
                movieVideos:action.payload
            }

        default:
            return {
                ...state
            }
    }
} 

export default reducer;
