import React, { useEffect, useState } from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import KeypadClick from "../utils/KeypadClick";

function Keypad() {
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
        <ButtonGroup onClick={KeypadClick}>
            {letters && letters.map((l) => {
                return (
                    <Button variant="outline-dark" value={l.key} >{l.key}</Button>
                )
            })}
        </ButtonGroup>
    )
}

export default Keypad;