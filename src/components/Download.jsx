import React from "react"
import phone from "../assets/phone.png";
import play from "../assets/play.png";
import apple from "../assets/apple.png";
import "../App.css"


function Download(){

    return (
        <div className="download-container">
            <div className="download-container-left">

                <div className="download-img-container">

                    <img className = "phone" src={phone} alt = ""/>
                </div>

            </div>

<div className="download-container-right">

<h3 className="super">Download</h3>
<h1 className="system">Download tasking on<br></br> your devices</h1>

<p className="system-p">The best solution for your tasking management problem is <br></br> 
finally here and it is free! Don't forget to download Tasking to <br></br>
feel the best and easiest way of managing your task.
</p>

<div className="download-btn">
    <button><img  className = "download-img"src={play} alt = ""/></button>
    <button><img className = "download-img"src={apple} alt = ""/></button>
</div>
</div>

        </div>
    )
}

export default Download;