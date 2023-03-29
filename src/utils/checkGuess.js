
const checkGuess = (data, solution, letterColor, usedKeys) => {
  const solutionCopy = [...solution];
  const guess = [...data.guessLetters[data.row]];
  const updatedKeyState = {...usedKeys};
  const colorDiff = [false, false, false, false, false];

  for (let i = 0; i < 5; i++) {
    if (solutionCopy[i] === guess[i]) {
      colorDiff[i] = "green";
      solutionCopy[i] = "";
      updatedKeyState[guess[i]] = "success";
    }
  }

  for (let i = 0; i < 5; i++) {
    if (colorDiff[i] !== "green") {
      if (solutionCopy.includes(guess[i])) {
        colorDiff[i] = "GoldenRod";
        if (updatedKeyState[guess[i]] !== "success") {
          updatedKeyState[guess[i]] = "warning";
        }
      } else {
        colorDiff[i] = "grey";
        if (
          updatedKeyState[guess[i]] !== "success" &&
          updatedKeyState[guess[i]] !== "warning"
        ) {
          updatedKeyState[guess[i]] = "secondary";
        }
      }
    }
  }

  letterColor[data.row] = colorDiff;

  return { letterColor, updatedKeyState };
};

export default checkGuess;
