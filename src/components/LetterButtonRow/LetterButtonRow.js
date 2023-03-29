import React from "react";
import LetterButton from "../LetterButton/LetterButton";
import "./style.css";

function LetterButtonRow(props) {
    //console.log("Button: " + props);
    return (
        <div className="filled-display">
    <ul className="list-group list-group-horizontal letter-button-row">
        <LetterButton data={props.data[0]} color={props.color[0]} filled={props.filled[0]}/>
        <LetterButton data={props.data[1]} color={props.color[1]} filled={props.filled[1]}/>
        <LetterButton data={props.data[2]} color={props.color[2]} filled={props.filled[2]}/>
        <LetterButton data={props.data[3]} color={props.color[3]} filled={props.filled[3]}/>
        <LetterButton data={props.data[4]} color={props.color[4]} filled={props.filled[4]}/>
    </ul></div>);
}

export default LetterButtonRow;