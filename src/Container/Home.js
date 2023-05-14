import React from 'react'

import Navbar from '../Component/Navbar/Navbar';

import Feature from '../Component/Feature/Feature';
import List from '../Component/List/List';
function Home() {
    const array=[0,1,2];
    return (
        <div className="Appy" style={{"overflow":"hidden"}}>
        <div >
          <Navbar/>
         <Feature type="movies"/>
      
        </div>
        <div id="listcontent">
            {/* <List/><List/><List/><List/> */}
            {array.map((key,value)=>
            {
                // console.log(array[key]);
                return(<List key={key} value={array[key]}/>)
              
            })}
        </div>
        </div>
      );
}

export default Home