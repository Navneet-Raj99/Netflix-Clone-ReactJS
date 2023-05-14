import React, { useState } from 'react'
import './Navbar.css'
import R from './R.png'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
// import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
function Navbar() {
    const [isscroll,setscroll]=useState(false);
    window.onscroll=()=>
    {
        setscroll(window.pageYOffset===0?false:true);
    }
    if(isscroll==false)
    {
  return (
    <div className='main_navbar'>
    
        <img src={R} width="14%"/>
        <div id="homepage" className='navbaritems'>Homepage</div>
        <div id="series" className='navbaritems'>Series</div>
        <div id="movies" className='navbaritems'>Movies</div>
        <div id="New And Popularity List" className='navbaritems'>New And Popular</div>
        <div id="mylist" className='navbaritems'>My List</div>
       <div id="icons" >
       <SearchIcon color='error' />
       <NotificationsIcon color='error' style={{"marginLeft":"20px","marginRight":"14px"}}/>
       <ArrowDropDownRoundedIcon color='error'/>
       </div>
        
    </div>
  )
    }
    else
    {
        return (
            <div className='main_navbarblack'>
            
                <img src={R} width="14%"/>
                <div id="homepage" className='navbaritems'>Homepage</div>
                <div id="series" className='navbaritems'>Series</div>
                <div id="movies" className='navbaritems'>Movies</div>
                <div id="New And Popularity List" className='navbaritems'>New And Popular</div>
                <div id="mylist" className='navbaritems'>My List</div>
               <div id="icons" >
               <SearchIcon color='error' />
               <NotificationsIcon color='error' style={{"marginLeft":"20px","marginRight":"14px"}}/>
               <ArrowDropDownRoundedIcon color='error'/>
               </div>
                
            </div>
          )
    }
}

export default Navbar