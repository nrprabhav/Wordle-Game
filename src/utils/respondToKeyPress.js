
const RespondToKeyPress = (data, key) => {

    console.log("RESPOND TO KEY PRESS:" + key);

    function isCharacterALetter(char) {
        return (/[a-zA-Z]/).test(char)
    };

    if (isCharacterALetter(key) && key !== 'Backspace') {
        data.guessLetters[data.row][data.index++] = key.toUpperCase();
        }
    else if(key === "Backspace") {
        console.log(`Backspace: ${key}`);
        /*********************************
         * Write Code to implement backspace
         * 
         * 
         * 
         * 
         * 
         * 
         * 
         */
    }
    return data;
}

export default RespondToKeyPress;