import IsDictionaryWord from "./isDictionaryWord";

const CheckGuess = (data,solution) => {
    console.log("CHECK");
    console.log(`SOLUTION: ${solution}`);
    
    let temp = [...solution];
    let guess = data.guessLetters[data.row];
    console.log("Solution: " + temp);
    console.log("Guess: " + guess);

    let diff=[false,false,false,false,false];
    for(let i = 0; i < 5; i++){
        diff[i] = (temp[i] === guess[i]) ? true : false;
    }
    console.log("Diff: " + diff);
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