import {GET_MOVIES_FAILURE,GET_MOVIES_SUCCESS,GET_MOVIES, SEARCH_MOVIES, SEARCH_MOVIES_SUCCESS} from "../action/constant"


const initialState = {
    movies:[],
    searchMovies:[],
    error:""
}

const reducer = (state=initialState,action)=>{
    switch (action.type){

        case GET_MOVIES:
            return{
                ...state
            }
        case GET_MOVIES_SUCCESS:
            return {
                ...state,
                movies:action.payload
            }
        case GET_MOVIES_FAILURE:
            return {
                ...state,
                error:action.payload
            }

        case SEARCH_MOVIES:
            return {
                ...state
            }

        case SEARCH_MOVIES_SUCCESS:
            return {
                ...state,
                movies:action.payload
            }

        default:
            return {
                ...state
            }
    }
} 

export default reducer;
