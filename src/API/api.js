   
   
const FEATURED_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=7d69b76bbb69c83b9dff51943d6520e7"

const SEARCH_API ="https://api.themoviedb.org/3/search/movie?api_key=7d69b76bbb69c83b9dff51943d6520e7&query="

export const getMoviesApi = () => {
    return fetch(FEATURED_API)
        .then((response) => response.json())
        .then((json) => json.results)
        .catch((error) => Promise.reject(error));
    };


export const searchMovieApi = (searchTerm)=>{
    return fetch(SEARCH_API+searchTerm)
    .then((response) => response.json())
    .then((json) => json)
    .catch((error) => Promise.reject(error));
}