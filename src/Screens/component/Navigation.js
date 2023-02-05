import React from "react";

const Navigation=(props)=>{
    return(
        <div className="pl-10 ppt-2">
            <ul>
                <li onClick={props.clickList}>List</li>
                <li onClick={props.clickCard}>card List</li>
            </ul>
        </div>
    )
}

export default Navigation