import React, { useState } from 'react'
import './Signin.css'
function Signin() {
    const [emailplaceholder,setemailplaceholder]=useState("Enter Your Email");
    const [buttonname,setbuttonname]=useState("Get Started");
    const [emailvalue,setemailvalue]=useState("");
    const [passwordvalue,setpasswordvalue]=useState("");
  return (
    <div className='signincontainer'>
    <div className='sigincontent'>
        <h1> Unlimited Movies,Tv Shows and more</h1>
        <h2> Watch anywhere,cancel anytime</h2>
        <h3> Ready to watch? Enter yout Email or restart your membership</h3>

        <div className='logincontent'> 
            <input type="text" id="emailtext"placeholder={emailplaceholder} onChange={(e)=>
            {
                if(emailplaceholder==="Enter Your Email")
                {
                    setemailvalue(e.target.value);
                }
                else
                {
                    setpasswordvalue(e.target.value);
                }
              
            }} className='emailinput'/>
            <button className='buttoninput' onClick={()=>
            {
                if(buttonname==="Get Started")
                {
                    setemailplaceholder("Enter Your Password");
                    document.getElementById("emailtext").value="";
                    setbuttonname("Finish");
                }
                else if(buttonname==="Finish")
                {
                    setpasswordvalue("")
                    console.log(emailvalue);
                    console.log(passwordvalue);
                }
            

            }}>{buttonname}</button>
        
        </div>
    </div>
    </div>
  )
}

export default Signin