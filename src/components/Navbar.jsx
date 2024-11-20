import React from "react";
import logo from "../assets/logo.png";
import '../App.css'

 const btn = {

  padding: "10px",
  
  backgroundColor: "blue",
marginLeft: "10% ",
width:"80px",
height:"40px",
marginTop:"5px",
borderRadius:"5px",

 }


function Navbar(){

return(

<div className ="nav">
<h2 className="logo">Tasking</h2>
{/* <img className = "logo" src ={logo} alt = "Logo" /> */}
        <ul>
          <li><a href ="">Home</a> </li>
           <li><a href ="">About</a></li>
           <li><a href ="">Member</a></li>
           <li><a href ="">Enterprise</a></li>
        </ul>

        <div className="btn">
          <button style={btn}>Sign Up</button>
        </div>
    </div>

);

}

export default Navbar;