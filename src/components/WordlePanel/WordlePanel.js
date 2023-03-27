import React from "react";
import LetterButtonRow from "../LetterButtonRow/LetterButtonRow";
import "./style.css"

function WordlePanel(props) {
    //console.log(props);
    return (
        <div class="container text-center">
            <div class="row justify-content-center">
                <div class="col">
                    <LetterButtonRow data={props.row1} color={props.row1Color} filled={props.row1Filled} />
                </div>
                <div class="col">
                    <LetterButtonRow data={props.row2} color={props.row2Color} filled={props.row2Filled} />
                </div>
                <div class="col">
                    <LetterButtonRow data={props.row3} color={props.row3Color} filled={props.row3Filled}  />
                </div>
                <div class="col">
                    <LetterButtonRow data={props.row4}  color={props.row4Color} filled={props.row4Filled} />
                </div>
                <div class="col">
                    <LetterButtonRow data={props.row5}  color={props.row5Color} filled={props.row5Filled} />
                </div>
                <div class="col">
                    <LetterButtonRow data={props.row6}  color={props.row6Color} filled={props.row6Filled} />
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