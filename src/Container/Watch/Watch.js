import React from 'react'
import demo from '../../Component/ListItem/demo.mp4'
import './Watch.css'
function Watch() {
  return (
    <div className='movie_container'>
        <h1 style={{"cursor":"pointer","width":"100px"}}> Home</h1>
        <div className='movie'>
        <video src={demo} controls={true} height="500px" width="1000px"/>
        </div>
    </div>
  )
}

export default Watch