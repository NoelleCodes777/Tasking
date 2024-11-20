import React from "react";

import ArticlesCard from './ArticlesCard';

import '../App.css'

function Articles({ Items }){
    return (

        <div className="articles">
         <h4>Articles</h4>
         <h1 className='OST'>Articles from Tasking<span></span></h1>

         <div className="Articles-Card">
           
           

               {Items.map((Item) =>
            (
            <ArticlesCard   
            
             key={Item.id}
             img={Item.img}
             header={Item.header}
             paragraph={Item.paragraph}
             button={Item.button}
            
            
            />
               

            )
            )}
</div>
</div>


            );
           
        
}

export default Articles;


