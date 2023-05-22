import React from "react";
const im=require("./images/pexels-suzukii-xingfu-872831 (1).jpg")
const im1=require("./images/images1.jpg")
const im2=require("./images/images2.jpg")
function External(){
    return(
        <>
        <img src={im} alt="ima"/>
            <div className="box1">
                <h1>Tour</h1>
                <h3>Expert in</h3>
                <h5>Iceland</h5>
                <p>Our diverse selection includes hiking, caving, glacier walks, ice climbing, mountain climbing, hunting for the Northern Lights and more!</p>
                <input className="input1" type="submit" name="submit" value="Learn more"/>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <input className="input2" type="submit" name="submit" value="Populer places"/>
                <p></p>
            </div>
            <div className="box2">
                <img id="img1" src={im1} alt="images"/>
                <img id="img2" src={im2} alt="images"/>
            </div>
        </>
    )
}
export default External;