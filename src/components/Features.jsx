import React from 'react';

import '../App.css';
import FeatureCard from './FeatureCard';






function Features({ cards }){

    return(

        <div className='feature'>

            <h3>Feature</h3>
            <h1 className='OST'>Our Special Feature</h1>

            <div className='feature-card'>
           
              {cards.map((card)=>
              (
                <FeatureCard
                key ={card.id}
                header={card.header}
                icon={card.icon}
                description={card.description}
                />
              ))}
              
           
           </div>
           </div>
    );
            
            }
               
     
             

         

export default Features;

//Easy to use for people who are either new or professional