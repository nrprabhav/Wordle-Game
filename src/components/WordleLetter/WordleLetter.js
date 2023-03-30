import React from "react";
import "./WordleLetter.css";

function WordleLetter(props) {
    let classNameVal = `list-group-item ${props.color}`;
    return (
        <li className={classNameVal} ><div className={props.filled}>{props.data}</div></li>
    )
}

export default WordleLetter;