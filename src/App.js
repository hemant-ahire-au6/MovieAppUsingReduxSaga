import React from 'react'
import HomePage from './Componets/HomePage/HomePage'
import {BrowserRouter,Switch,Route} from "react-router-dom"

import MovieDetails from "./Componets/MovieDetails/MovieDetails"
// APi key :7d69b76bbb69c83b9dff51943d6520e7
//API link:https://api.themoviedb.org/3/movie/550?api_key=7d69b76bbb69c83b9dff51943d6520e7


function App() {
  
    return (
        <>
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <HomePage/>
                </Route>
                <Route exact path="/movie/:id">
                  <MovieDetails/>
                </Route>
                <Route exact path="/login">
                <div>Hello world</div>
                </Route>
                <Route exact path="/SignUp">
                   <div>Hello</div>
                </Route>
            </Switch>
        </BrowserRouter>

        </>
    )
}

export default App;