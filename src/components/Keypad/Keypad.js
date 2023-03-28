import React, { useEffect, useState } from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import "./Keypad.css";

function Keypad(props) {
    const [letters, setLetters] = useState(null);

    useEffect(() => {
        setLetters( [
            {"key": "a"},
            {"key": "b"},
            {"key": "c"},
            {"key": "d"},
            {"key": "e"},
            {"key": "f"},
            {"key": "g"},
            {"key": "h"},
            {"key": "i"},
            {"key": "j"},
            {"key": "k"},
            {"key": "l"},
            {"key": "m"},
            {"key": "n"},
            {"key": "o"},
            {"key": "p"},
            {"key": "q"},
            {"key": "r"},
            {"key": "s"},
            {"key": "t"},
            {"key": "u"},
            {"key": "v"},
            {"key": "w"},
            {"key": "x"},
            {"key": "y"},
            {"key": "z"}
          ])
        // fetch('./data/db.json/letters')
        //     .then(res => res.json())
        //     .then(json => {
        //         setLetters(json)
        //     })
    }, [])

    return (
        <div className="keypad-container" onClick={props.KeypadClick}>
            {letters && letters.map((l) => {
                return (
                    <Button className="keypad-keys" variant="outline-dark" value={l.key} >{l.key}</Button>
                )
            })}
        </div>
    )
}

export default Keypad;