import React, { useRef, useState } from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import './List.css'
import ListItem from '../ListItem/ListItem';
//using ref hook to avoid error found during using document.get element by id or classname
function List(props) {
    const [slidenumber,setslidenumber]=useState(0);
    // let forward=1;
    // let backward=1;
    const listref=useRef();
    const handleClick=(direction)=>
    {
        let distance=listref.current.getBoundingClientRect().x-50;
     if(direction=="right" && slidenumber>0)
     {
        setslidenumber(slidenumber-1);
       listref.current.style.transform=`translateX(${230+distance}px)`
     }

    if(direction=="left" && slidenumber<5)
     {
        setslidenumber(slidenumber+1);
       listref.current.style.transform=`translateX(${-210+distance}px)`
     }
    }
  return (
    <div className="listofmovies">
        <h2 className='continuetowatch'>Continue To Watch</h2>
        <div className='contentcontainer'>
        {/* <ArrowBackIosIcon fontSize='large' className='backarrow' color="inherit" onClick={()=>
        {
            if(forward<10)
            {
                
                console.log(props.value);
                document.getElementsByClassName('listItemconatiner')[props.value].style.transform=`translateX(-${250*forward}px)`
                forward++;
                
            }
            else
            {
                console.log("Cant Move More");
            }
           

        }}/> */}
        <div className='backarrow' onClick={()=>{handleClick("left")}}>
          <ArrowBackIosIcon fontSize='large'  color="inherit" onClick={()=>{handleClick("left")}}/>
          </div> <div className='listItemconatiner' id="listItemcontainerid" ref={listref}>
             <ListItem index="0"/><ListItem index="1"/><ListItem index={2}/><ListItem index={3}/><ListItem index={4}/>
             <ListItem index={5}/><ListItem index={6}/><ListItem index={7}/><ListItem index={8}/><ListItem index={9}/>
         </div>
        {/* <ArrowForwardIosIcon fontSize='large'className='forwardarrow' onClick={()=>
        {
            
            console.log(props.value);
           document.getElementsByClassName('listItemconatiner')[props.value].style.transform=`translateX(${200}px)`
        //    forward--;
           
       
           
        }}/> */}
        <div className='forwardarrow' onClick={()=>{handleClick("right")}}>
        <ArrowForwardIosIcon fontSize='large' />
        </div>
        </div>
    </div>
  )
}

export default List