import React from "react";
import "./style.css";

function LetterButton(props) {
    return (
        <li className="list-group-item">{props.data}</li>
    )
}

export default LetterButton;