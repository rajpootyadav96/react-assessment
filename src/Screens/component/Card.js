import React from "react";
import logo from '../assets/285655_user_icon.png'

const Card=(props)=>{
    console.log(props)

    return(
        <div  className=" flexp-4 border w-2/6 rounded justify-center flex-row   pt-5 pb-6  pr-2">
            <div className="pl-12">
            <img src={logo}  className=" h-12 w-12  "/>
            </div>
            <div className="text-center text-2xl font-bold">{props.data.name}</div>
            <div className="text-center text-lg font-bold">{props.data.age}</div>
            <div className="text-center text-sm">{props.data.occupation}</div>
            <div></div>
        </div>
    )
}

export default Card