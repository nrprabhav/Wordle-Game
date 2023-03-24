import React from "react";
import LetterButtonRow from "../LetterButtonRow/LetterButtonRow";
import "./style.css"

function WordlePanel(props) {
    return (
        <div class="container text-center">
            <div class="row justify-content-center">
                <div class="col">
                    <LetterButtonRow data={props.row1} color={props.row1Color} />
                </div>
                <div class="col">
                    <LetterButtonRow data={props.row2} color={props.row2Color} />
                </div>
                <div class="col">
                    <LetterButtonRow data={props.row3} color={props.row3Color}  />
                </div>
                <div class="col">
                    <LetterButtonRow data={props.row4}  color={props.row4Color} />
                </div>
                <div class="col">
                    <LetterButtonRow data={props.row5}  color={props.row5Color} />
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