import React from 'react'
import {useSelector} from "react-redux"
import VideoCard from './videoCard'
import "./videoDiv.css"

function VideoDiv() {
   const videos = useSelector(state => state.movieVideos.results)
   
   const video = videos ?videos:[]
   console.log(video)
    return (
        <div className="video-div">
            {
                video.map(data =>(
                    <VideoCard key={data.id} link={data.key}/>
                ))
            }
        </div>
    )
}

export default VideoDiv;

