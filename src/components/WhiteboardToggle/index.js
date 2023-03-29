import React from "react";
import "./style.css";
import $ from 'jquery';

const openWhiteboard = () => {
    $(".whiteboard-container").show();
};

const closeWhiteboard = () => {
    $(".whiteboard-container").hide();
};

// ".container" is supposed to be only used for wordle panel
const openWordlePanel = () => {
    $(".wordle-panel").show();
};

const closeWordlePanel = () => {
    $(".wordle-panel").hide();
};

const switchWhiteboard = () => {
    if ($('#whiteboardToggleSwitch').prop("checked")) {
        closeWordlePanel();
        openWhiteboard();
    } else {
        closeWhiteboard();
        openWordlePanel();
    }
};

const WhiteboardToggle = () => {
    return (<div>
        <div class="form-check form-switch">
            <input
                class="form-check-input"
                type="checkbox"
                role="switch"
                id="whiteboardToggleSwitch"
                onClick={() => switchWhiteboard()}
            />
            <label class="form-check-label" for="flexSwitchCheckDefault">Whiteboard</label>
        </div>
    </div>);
};

export default WhiteboardToggle;