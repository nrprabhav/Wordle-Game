import IsDictionaryWord from "./isDictionaryWord";

const CheckGuess = (data, solution, letterColor) => {
    console.log("CHECK");
    console.log(`SOLUTION: ${solution}`);

    let temp = [...solution];
    let temp1 = data.guessLetters[data.row];
    let guess = [...temp1];
    console.log("Solution: " + temp);
    console.log("Guess: " + guess);

    let diff = [false, false, false, false, false];
    for (let i = 0; i < 5; i++) {
        if (temp[i] === guess[i]) {
            diff[i] = "green";
            temp[i] = "";
        } 
    }
    for (let i = 0; i < 5; i++) {
        if (diff[i] !== "green") {
            if (temp.includes(guess[i])) {
                diff[i] = "GoldenRod";
            } else {
                diff[i] = "grey";
            }
        }  
    }

console.log("Diff: " + diff);
letterColor[data.row] = diff;
return letterColor;
    /***************************
     * Is the word the guessed word?
     * 
     * 
     * 
     * 
     * 
     * 
     */

    /****************************
     * HIGHLIGHT Letters which are wrong or right
     * 
     * 
     * 
     * 
     * 
     * 
     * 
     */
}

export default CheckGuess;