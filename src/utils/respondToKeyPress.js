
const RespondToKeyPress = (data, key) => {

    console.log("RESPOND TO KEY PRESS:" + key);

    function isCharacterALetter(char) {
        return (/[a-zA-Z]/).test(char)
    };

    if (isCharacterALetter(key) && key !== 'Backspace') {
        switch (data.row) {
            case 1:
                data.row1[data.index++] = key.toUpperCase();
                break;
            case 2:
                data.row2[data.index++] = key.toUpperCase();
                break;
            case 3:
                data.row3[data.index++] = key.toUpperCase();
                break;
            case 4:
                data.row4[data.index++] = key.toUpperCase();
                break;
            case 5:
                data.row5[data.index++] = key.toUpperCase();
                break;
            default:
                break;
        }
    } else if(key === "Backspace") {
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