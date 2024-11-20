import React from 'react';
import back22 from '../assets/back22.png';
import man1 from '../assets/man1.jpg';
import lady3 from '../assets/lady3.jpg';
import lady4 from '../assets/lady4.jpg';


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

   const btnn = {


    padding: "10px",
  
    backgroundColor: "white",
  
    width:"120px",
    height:"40px",
    borderStyle:"none",
    borderRadius:"5px",
  
  
     }
    
  
function Hero(){

return (

  
<div className='Hero' >

    <div className='Hero-left'>
   <h1> Manage<br /> your tasks<br /> quickly</h1>

   <p>Use the shortest possible time to create tasks, use all the free <br />
   features to make the most of them</p>
   <div className='btnClass'>
    <button style={btn}>Learn more</button>
    <button style={btnn}>Watch video</button>
   </div>
     </div>
       
<div className='Hero-right'>
    <div className='img-container'>
        <div className ='MW-container'>
 
            <div className="others">
                        <img className="profile-1" src={man1} alt="profile-1" />
                        <img className="profile-2" src={lady3} alt="profile-2" />
                        <img className="profile-3" src={lady4} alt="profile-3" />
                        <i className="fa-solid fa-circle-plus fa-3x"></i>
                        <h3>Meet with others</h3>
                        <p>Easy to use for people who are either new or professional</p>
            </div>
        </div>

     <div className='KA-container'>
             <div className='KA-containerB'>

             <img src=''/>
            <div className='KA-containerC'>
                  <h1>Karin agasya</h1>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star "></i>
                  <h5>4.5</h5>
             </div>
     </div>
      <p>I had a very good performance while using the tasking application. Thank You.</p>
     </div>

       <img className= "back" src= {back22} alt="background"/>
       </div>
   </div>

</div>



);

}



export default Hero;
