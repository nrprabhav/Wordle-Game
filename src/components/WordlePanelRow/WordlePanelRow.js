import React from "react";
import WordleLetter from "../WordleLetter/WordleLetter";
import "./WordlePanelRow.css";

function WordlePanelRow(props) {
    // A WordlePanelRow is made up of 5 WordleLetters
    return (
        <div className="filled-display">
    <ul className="list-group list-group-horizontal letter-button-row">
        <WordleLetter data={props.data[0]} color={props.color[0]} filled={props.filled[0]}/>
        <WordleLetter data={props.data[1]} color={props.color[1]} filled={props.filled[1]}/>
        <WordleLetter data={props.data[2]} color={props.color[2]} filled={props.filled[2]}/>
        <WordleLetter data={props.data[3]} color={props.color[3]} filled={props.filled[3]}/>
        <WordleLetter data={props.data[4]} color={props.color[4]} filled={props.filled[4]}/>
    </ul></div>);
}

export default WordlePanelRow;