import React from "react";
import "./style.css";
import $ from 'jquery';

const openWhiteboard = () => {
    $(".whiteboard-container").show();
};

const closeWhiteboard = () => {
    $(".whiteboard-container").hide();
};

const switchWhiteboard = () => {
    if ($('#whiteboardToggleSwitch').prop("checked")) {
        openWhiteboard();
    } else {
        closeWhiteboard();
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