import React from "react";
import "./style.css";

function LetterButton(props) {
    //if(props.filled === "filled") console.log(props);
    let classNameVal = `list-group-item ${props.color}`;
    return (
        <li className={classNameVal} ><div className={props.filled}>{props.data}</div></li>
    )
}

export default LetterButton;