import React from 'react';
import man1 from '../assets/man1.jpg';
import lady3 from '../assets/lady3.jpg';
import lady4 from '../assets/lady4.jpg';
import progresss from "../assets/progresss.png";
import chartt from "../assets/chartt.png";
import '../App.css'


const btn = {


    padding: "10px",
    
    backgroundColor: "blue",
  
    width:"120px",
    height:"40px",
    borderStyle:"none",
    borderRadius:"5px",
    color:"white"
  
  
     }
function Analysis(){

    return(
        <div className='Analysis-container'>

        <div className='Analysis-container-left'>

<div className='Analysis-img-container'>

    <div className='TG'>
<img className = "TG-img" src={chartt} alt=''></img>
    </div>
    <div className='SA'>
    <img  className = "SA-img" src={progresss} alt=''></img>
    </div>
    <div className='CNW'>

        <h3>Create new wireframe</h3>
        <p>Create two new wireframe for the new project</p>
        <div className='others'>
            <img className = 'profile-1'src={man1} alt=''></img>
            <img className = 'profile-2'src={lady3} alt = ''></img>
            <img className = 'profile-3'src={lady4} alt = ''></img>
            {/* <h4>82%</h4> */}
        </div>
    </div>
</div>
</div>

     <div className='Analysis-container-right'>
     <h3 className='super'>Superiority</h3>

     <h1 className='system'>Smart system & friendly<br></br> Interface</h1>
    <p className='system-p'>Tasking is very easy to use, besides that, it also has many <br></br>excellent features
    that other task manager application don't<br></br>
     have, so task management can be done easily.
    </p>
    <button style={btn}>Learn more</button>
     </div>
        </div>
        
    )

}

export default Analysis;