import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./YogaCards.css"
function Card(props){
    return(
    <>
    <div className="Background">
    <div className="YogaPoss">
    
        <div className="YogaImgsec">
            <img className="YogaImg "src={props.yogaImg} alt="myPic"/>
        </div>
        <div className="YogaInfo">
            <h5 className=" NameofPose">{props.name}</h5>
            <div className="text">
            <span><span>{props.Benefit}</span>{props.explain}</span>
            </div>
            <a href={props.video} className="button" alt="Error" target='_blank'>Watch Now</a>
        </div>
    </div>
    </div>
   
    </>
    );
}

export default Card;