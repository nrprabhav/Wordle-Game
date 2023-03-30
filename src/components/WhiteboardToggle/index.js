import React from "react";
import "./style.css";

const WhiteboardToggle = (props) => {
    return (<div>
        <div class="form-check form-switch">
            <input
                class="form-check-input"
                type="checkbox"
                role="switch"
                id="whiteboardToggleSwitch"
                onClick={props.toggleWhiteboard}
            />
            <label class="form-check-label" for="flexSwitchCheckDefault">Whiteboard</label>
        </div>
    </div>);
};

export default WhiteboardToggle;