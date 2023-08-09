import React from 'react'
import VideoCard from "./VideoCard.js"
import "../styles/Videos.css"
const Videos = ({ videos }) => {
  return (
    <div className="videos">

    {videos.map((item, index) => (

        <VideoCard name={item.name} image={item.image} review={item.review} index={index} key={item.image} />


    ))}

</div>
  )
}

export default Videos