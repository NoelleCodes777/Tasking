import React from "react";

import "../App.css"

function Footer(){

    return(
        <div className="footer">
            <div className="footer-con">
            <div className="About">
                <h1>Tasking</h1>
                <p>Use the shortest possible time to <br></br>
                create tasks,  use all the free features<br></br>
                to make the most of them
                </p>
                <div className="icons-container">
                    <i className="fa-brands fa-square-facebook"></i>
                    <i className="fa-brands fa-linkedin"></i>
                    <i className="fa-brands fa-square-twitter"></i>
                </div>

            </div>

        <div className="About">
            <h2>About Us</h2>
            <a href="">About Us</a>
            <a href="">Features</a>
            <a href="">News & Articles</a>
        </div>

        <div className="About">

                 <h2>Support Us</h2>
                <a href="">FAQ's</a>
                <a href="">Contact Us</a>
                <a href="">Support Center</a>
                <a href="">Security</a>

        </div>


        <div className="About">

           <h2>Partner</h2>
                <a href="">Our Partner</a>
                <a href="">Subscribe</a>
        </div>
        
      </div>
 
       <div className="hr-con">
         <hr />
        <p>All right reserved @tasking.co</p>
        </div>

</div>

    );
}

export default Footer;