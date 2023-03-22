import React from "react";
import LetterButtonRow from "../LetterButtonRow/LetterButtonRow";
import "./style.css"

function WordlePanel(props) {
    return (
        <div class="container text-center">
            <div class="row align-items-start">
                <div class="col p-0">
                    <LetterButtonRow data={props.row1} />
                </div>
                <div class="col p-0">
                    <LetterButtonRow data={props.row2} />
                </div>
                <div class="col p-0">
                    <LetterButtonRow data={props.row3} />
                </div>
                <div class="col p-0">
                    <LetterButtonRow data={props.row4} />
                </div>
                <div class="col p-0">
                    <LetterButtonRow data={props.row5} />
                </div>
            </div>
        </div>

    );
}

export default WordlePanel;


/*
<div className="card">
        <ul className="list-group">
            <li className="list-group-item p-0"><LetterButtonRow data={props.data[0]}/></li>
            <li className="list-group-item p-0"><LetterButtonRow data={props.data[0]}/></li>
            <li className="list-group-item p-0"><LetterButtonRow data={props.data[0]}/></li>
            <li className="list-group-item p-0"><LetterButtonRow data={props.data[0]}/></li>
            <li className="list-group-item p-0"><LetterButtonRow data={props.data[0]}/></li>
        </ul></div>
*/