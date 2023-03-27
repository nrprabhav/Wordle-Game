import React from "react";
import "./style.css";

function LetterButton(props) {
    //if(props.filled === "filled") console.log(props);
    let classNameVal = `list-group-item ${props.color} ${props.filled}`;
    return (
        <li className={classNameVal} >{props.data}</li>
    )
}

export default LetterButton;