import React from 'react';
import lady3 from '../assets/lady3.jpg';
import lady4 from '../assets/lady4.jpg';

import '../App.css';
const btn = {


    padding: "10px",
  
    backgroundColor: "blue",
  
    width:"120px",
    height:"40px",
    borderStyle:"none",
    borderRadius:"5px",
    color:"white"
  
  
     }

function Info(){

    return(

        <div className='Info-Container'>
      
      <div className='Info-Container-left'>
      <h3 className='super'>How it works</h3>

<h1 className='system'>How Tasking works? <br></br>We have three options</h1>
<p className='system-p'>Tasking is very easy to use, besides that, it also has many
     <br></br>excellent features
that other task manager application don't<br></br>
have, so task management can be done easily.
</p>
<button style={btn}>Learn more</button>

      </div>


<div className='Info-Container-right'>

<div className='img-containerB'>

<div className='Doc'>
<h2>Document</h2>
<div className='Doc-A'>

<i class="fa-regular fa-folder-closed"></i>
<h5>Tasking File</h5>
</div>
<div className='Doc-B'>

<i class="fa-regular fa-folder-closed"></i>
<h5>Tasking File</h5>
</div>
<div className='Doc-C'>

<i class="fa-regular fa-folder-closed"></i>
<h5>Tasking File</h5>
</div>

</div>



<div className='Tutorial'>

<a href="https://youtu.be/zmjfTLARnlk">Link</a>
<p>Learn tasking only in 3 minutes with this video</p>
</div>

<div className='contact'>

<h2 className='Conatct US'></h2>


<div className='ContactA'>
<img className = "contact-img1"src={lady4} alt='person1'></img>

<h4>NoelleCodes<br></br>
<span>09071904106</span>
</h4>

<i class="fa-solid fa-phone"></i>
</div>

<div className='ContactA'>
<img className = "contact-img1" src={lady3} alt='person1'></img>
<h4>NoelleCodes<br></br>
<span>09071904106</span>
</h4>
<i class="fa-solid fa-phone"></i>
</div>

</div>
</div>
</div>
</div>


    )


}

export default Info;