import React from "react";
import WordlePanelRow from "../WordlePanelRow/WordlePanelRow";
import "./WordlePanel.css"

function WordlePanel(props) {
    // The Wordle panel consists of six WordlePanelRows
    return (
        <div className="container text-center">
            <div className="row justify-content-center">
                <div className="col">
                    <WordlePanelRow data={props.row1} color={props.row1Color} filled={props.row1Filled} />
                </div>
                <div class="col">
                    <WordlePanelRow data={props.row2} color={props.row2Color} filled={props.row2Filled} />
                </div>
                <div class="col">
                    <WordlePanelRow data={props.row3} color={props.row3Color} filled={props.row3Filled}  />
                </div>
                <div class="col">
                    <WordlePanelRow data={props.row4}  color={props.row4Color} filled={props.row4Filled} />
                </div>
                <div class="col">
                    <WordlePanelRow data={props.row5}  color={props.row5Color} filled={props.row5Filled} />
                </div>
                <div class="col">
                    <WordlePanelRow data={props.row6}  color={props.row6Color} filled={props.row6Filled} />
                </div>
            </div>
        </div>

    );
}

export default WordlePanel;


/*
<div className="card">
        <ul className="list-group">
            <li className="list-group-item p-0"><WordlePanelRow data={props.data[0]}/></li>
            <li className="list-group-item p-0"><WordlePanelRow data={props.data[0]}/></li>
            <li className="list-group-item p-0"><WordlePanelRow data={props.data[0]}/></li>
            <li className="list-group-item p-0"><WordlePanelRow data={props.data[0]}/></li>
            <li className="list-group-item p-0"><WordlePanelRow data={props.data[0]}/></li>
        </ul></div>
*/