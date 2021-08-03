import React from 'react'
import ROUTES, { RenderRoutes } from "./Routing/route";

// APi key :7d69b76bbb69c83b9dff51943d6520e7
//API link:https://api.themoviedb.org/3/movie/550?api_key=7d69b76bbb69c83b9dff51943d6520e7


function App() {
  
    return (
        <>
            <RenderRoutes routes={ROUTES} />
        </>
    )
}

export default App;