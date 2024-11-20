import React from 'react'

import '../App.css'

function FeatureCard({header,icon,description}){

    return (
        // <div className='feature-card'>
 <div className='feature-card-UA'>
<div className='feature-items'>
<i className={icon}></i>
<h1>{header}</h1>
<p>{description}</p>
        </div>
      </div>
    );
}

export default FeatureCard;