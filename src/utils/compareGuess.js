
const CompareGuess = (data, solution, letterColor, usedKeys) => {
    //console.log("CHECK");
    //console.log(`SOLUTION: ${solution}`);
    //let tempLetterColor = [...letterColor];
    let temp = [...solution];
    let temp1 = data.guessLetters[data.row];
    let guess = [...temp1];
    let newKeys = {...usedKeys};
    //console.log("Solution: " + temp);
    //console.log("Guess: " + guess);

    let diff = [false, false, false, false, false];
    for (let i = 0; i < 5; i++) {
        if (temp[i] === guess[i]) {
            diff[i] = "green";
            temp[i] = "";
            newKeys[guess[i]]="success";
        }
    }
    for (let i = 0; i < 5; i++) {
        if (diff[i] !== "green") {
            if (temp.includes(guess[i])) {
                diff[i] = "GoldenRod";
                if(newKeys[guess[i]]!=="success") newKeys[guess[i]]="warning";
            } else {
                diff[i] = "grey";
                if(newKeys[guess[i]]!=="success" && newKeys[guess[i]]!=="warning") newKeys[guess[i]]="secondary";
            }
        }
    }
    //console.log(newKeys);
    //console.log("Diff: " + diff);
    letterColor[data.row] = diff;
    return {letterColor, newKeys};
}

export default CompareGuess;