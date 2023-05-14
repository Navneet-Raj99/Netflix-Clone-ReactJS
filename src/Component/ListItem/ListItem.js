import React, { useRef } from 'react'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import demo from './demo.mp4'
import './ListItem.css'
import fightclub from './fightclubb.jfif'

function ListItem(props) {
  const iconref=useRef();
  const descriptionref=useRef();
  const imageref=useRef();
  const Container=useRef();
  // const vid="./demo.mp4";
  const videoref=useRef();
  return (
    <div className='listitemcontainer'  onMouseOver={()=>
      {
        
          iconref.current.style.display="flex";
          descriptionref.current.style.display="block";
          imageref.current.style.display="none";
          videoref.current.style.display="block";
          videoref.autoPlay()
        
       
      }} 
      onMouseOut={()=>
      {
        imageref.current.style.display="block";
        iconref.current.style.display="none";
        descriptionref.current.style.display="none";
        videoref.current.style.display="none";
        
        
      }} >
       <video src={demo} width="180px" height="160px" autoPlay={true}  controls={true} ref={videoref} style={{"display":"none"}}/>


        <img src={fightclub} width="100%" height="90%" ref={imageref} />
      <div className="movielisticons" ref={iconref} >
        <PlayArrowIcon fontSize='smaller'style={{"border":"2px solid white","borderRadius":"50%"}}/>
        <AddIcon fontSize='smaller' style={{"border":"2px solid white","borderRadius":"50%"}}/>
        <ThumbDownIcon fontSize='smaller' style={{"border":"1px solid white","borderRadius":"50%"}}/>
        <ThumbUpIcon fontSize='smaller'style={{"border":"1px solid white","borderRadius":"50%"}}/>
      </div>

    <div className="movielistdescription" ref={descriptionref} >
     <span> 1 hour 14 Min</span>
     <span className='limit'> +16</span>
     <span> 1999</span>
     <p> LoremIpsum is the generated task of visual studio code
     LoremIpsum is the generated task of visual studio code
     LoremIpsum is the generated task of visual studio code </p>
      </div>
    </div>
  )
}

export default ListItem