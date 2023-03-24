import React from "react";
import LetterButton from "../LetterButton/LetterButton";
import "./style.css";

function LetterButtonRow(props) {
    return (
    <ul className="list-group list-group-horizontal">
        <LetterButton data={props.data[0]} color={props.color[0]}/>
        <LetterButton data={props.data[1]} color={props.color[1]}/>
        <LetterButton data={props.data[2]} color={props.color[2]}/>
        <LetterButton data={props.data[3]} color={props.color[3]}/>
        <LetterButton data={props.data[4]} color={props.color[4]}/>
    </ul>);
}

export default LetterButtonRow;