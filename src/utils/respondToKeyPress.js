
const RespondToKeyPress = (data, key) => {

    //console.log("RESPOND TO KEY PRESS:" + key);

    function isCharacterALetter(char) {
        return (/[a-zA-Z]/).test(char)
    };

    if (isCharacterALetter(key) && key !== 'Backspace') {
        if (data.index < 5) {
            data.guessLetters[data.row][data.index++] = key.toUpperCase();
            //filled[data.row][data.index-1] = "filled";
        }
    }
    else if (key === "Backspace") {
        console.log(`Backspace: ${key}`);
        data.index = data.index > 0 ? data.index - 1 : data.index;
        data.guessLetters[data.row][data.index] = "";
        //filled[data.row][data.index] = "";
    }
    return data;
}

export default RespondToKeyPress;