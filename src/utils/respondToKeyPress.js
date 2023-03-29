
// Logic to repond to a keypress (after debouncing)
const RespondToKeyPress = (data, key, filled) => {
    
    function isCharacterALetter(char) {
        // Check if the key is a letter
        return (/[a-zA-Z]/).test(char)
    };

    // If the key is a letter and not backspace
    if (isCharacterALetter(key) && key !== 'Backspace') {
        //if a guess is not complete put the character in the next box
        if (data.index < 5) { 
            data.guessLetters[data.row][data.index++] = key.toUpperCase();
            filled[data.row][data.index-1] = "filled";
        }
    } // If the key is backspace delete one letter and update the indices to keep track of position
    else if (key === "Backspace") {
        data.index = data.index > 0 ? data.index - 1 : data.index;
        data.guessLetters[data.row][data.index] = "";
        filled[data.row][data.index] = "";
    }
    return {data, filled};
}

export default RespondToKeyPress;