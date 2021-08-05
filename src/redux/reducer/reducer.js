import * as types from "../action/constant"


const initialState = {
    movies: [],
    searchMovies: [],
    error: "",
    movieDetails: [],
    castAndCrew: [],
    movieReviews: [],
    movieVideos: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {

        case types.GET_MOVIES:
            return {
                ...state
            }
        case types.GET_MOVIES_SUCCESS:
            return {
                ...state,
                movies: action.payload
            }
        case types.GET_MOVIES_FAILURE:
            return {
                ...state,
                error: action.payload
            }

        case types.SEARCH_MOVIES:
            return {
                ...state
            }

        case types.SEARCH_MOVIES_SUCCESS:
            return {
                ...state,
                movies: action.payload
            }

        case types.GET_MOVIE_DETAILS:
            return {
                ...state
            }

        case types.GET_MOVIE_DETAILS_SUCESS:
            return {
                ...state,
                movieDetails: action.payload
            }

        case types.GET_CAST_AND_CREW:
            return {
                ...state,
                castAndCrew: action.payload
            }

        case types.GET_MOVIE_REVIEW:
            return {
                ...state,
                movieReviews: action.payload
            }

        case types.GET_MOVIE_VIDEOS:
            return {
                ...state,
                movieVideos: action.payload
            }

        case types.POPULARITY_ASCENDING:

            const sortData = [...state.movies].sort((a, b) => {
                return a.popularity - b.popularity
            })
            return {
                ...state,
                movies: sortData
            }
        case types.POPULARITY_DECENDING:
            const sortDataDecending = [...state.movies].sort((a, b) => {
                return b.popularity - a.popularity
            })

            return {
                ...state,
                movies:sortDataDecending
            }

        case types.RATING_ASCENDING:
            const ratingAscending = [...state.movies].sort((a, b) => {
                return a.vote_average -b.vote_average 
            })

            return {
                ...state,
                movies:ratingAscending
            }

        case types.RATING_DECENDING:
            const ratingDecending = [...state.movies].sort((a, b) => {
                return b.vote_average -a.vote_average 
            })

            return {
                ...state,
                movies:ratingDecending
            }

        case types.RELEASE_DATE_ASCENDING:

            const releaseDateAscending = [...state.movies].sort((a,b)=>{
                let date1 = new Date(a.release_date)
                let date2 = new Date(b.release_date)
                return date1 - date2
            })

            return {
                ...state,
                movies:releaseDateAscending
            }

        case types.RELEASE_DATE_DECENDING:
            const releaseDateDecending = [...state.movies].sort((a,b)=>{
                let date1 = new Date(a.release_date)
                let date2 = new Date(b.release_date)
                return  date2 - date1 
            })

            return {
                ...state,
                movies:releaseDateDecending
            }
        
        case types.TITLE_A_TO_Z:
            const titleAtoZ = [...state.movies].sort((a,b)=>{
                if(a.title < b.title){
                    return -1;
                }
                if(a.title > b.title){
                    return 1;
                }
                return 0;
            })

            return {
                ...state,
                movies:titleAtoZ
            }

        default:
            return {
                ...state
            }
    }
}

export default reducer;
