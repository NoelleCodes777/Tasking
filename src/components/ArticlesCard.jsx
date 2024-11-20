import React from 'react'

import '../App.css'

function ArticlesCard({img,header,paragraph,button}){

    return (
        // <div className='feature-card'>
 <div className='Articles-Card-'>
<div className='Articles-items'>
<img  className = "image" src = {img}></img>
<h1>{header}</h1>
<p>{paragraph}</p>
<button>{button}</button>
        </div>
      </div>
    );
}

export default ArticlesCard;