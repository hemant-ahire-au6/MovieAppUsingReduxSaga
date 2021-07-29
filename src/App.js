import React,{useState,useEffect} from 'react'
import Movie from "./Componets/Movie"
import { useDispatch ,useSelector} from 'react-redux';
import { getMovies, searchMovies } from './redux/action/action';

// APi key :7d69b76bbb69c83b9dff51943d6520e7
//API link:https://api.themoviedb.org/3/movie/550?api_key=7d69b76bbb69c83b9dff51943d6520e7


function App(){
    const dispatch = useDispatch()
    const movies = useSelector(state => state.movies)

   const [searchTerm,setSearchTerm]= useState("")

   useEffect(()=>{
       
        dispatch(getMovies())
   })

   const handleOnSubmit = (e) =>{
       e.preventDefault()

       if(searchTerm){
        dispatch(searchMovies(searchTerm))

        setSearchTerm("")
       }
   }

   const handleOnChange = (e) => {
   setSearchTerm(e.target.value)
  
}

    return(
    <>
    <header >
        <form onSubmit={handleOnSubmit}>
        <input 
            className="search" 
            type="text" 
            placeholder="search"
            value= {searchTerm}
            onChange={handleOnChange}
        />
        </form>
        
    </header>
        <div className="movie-container">
            {movies.map(movie=>{
               return <Movie key={movie.id} data={movie}/>
            })}
        </div>
        </>
    )
}

export default App;