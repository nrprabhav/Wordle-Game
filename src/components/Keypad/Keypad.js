import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import "./Keypad.css";

// Construct the Keypad on the App
function Keypad(props) {
    const [letters, setLetters] = useState(null);

    useEffect(() => { // Set the letters on load
        setLetters( [
            {"key": "A"},
            {"key": "B"},
            {"key": "C"},
            {"key": "D"},
            {"key": "E"},
            {"key": "F"},
            {"key": "G"},
            {"key": "H"},
            {"key": "I"},
            {"key": "J"},
            {"key": "K"},
            {"key": "L"},
            {"key": "M"},
            {"key": "N"},
            {"key": "O"},
            {"key": "P"},
            {"key": "Q"},
            {"key": "R"},
            {"key": "S"},
            {"key": "T"},
            {"key": "U"},
            {"key": "V"},
            {"key": "W"},
            {"key": "X"},
            {"key": "Y"},
            {"key": "Z"}
          ])
    }, []);

    const variantName = (usedKeys,key) => { 
        // Function to decide the color of the keys on the keypad. It depends on the usedKeys property coming from App.js
        if(key in usedKeys) {
            return( usedKeys[key]);
        } else {
            return "light";
        }
    }

    return (
        <div className="keypad-container d-flex flex-wrap" onClick={props.KeypadClick}>
            {letters && letters.map((l) => {
                return (
                    <Button className="keypad-keys flex-grow-1" variant={variantName(props.usedKeys, l.key)} value={l.key} >{l.key}</Button>
                )
            })}
        </div>
    )
}

export default Keypad;