import React from 'react'
import ReactPlayer from 'react-player'

function VideoCard(props) {
    return (
        <div>
             {/* <iframe width="200" height="200" src="https://www.youtube.com/embed/pBVPlyM2T3Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
             <ReactPlayer
             controls="true"
             width="300px"
             height="300px"
              url={`https://www.youtube.com/watch?v=${props.link}`} />
             
        </div>
    )
}

export default VideoCard;
