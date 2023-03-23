
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
        data.index = data.index > 0 ? data.index-1 : data.index;
        data.guessLetters[data.row][data.index]="";
    }
    return data;
}

export default RespondToKeyPress;