import './App.css';
import { useEffect, useState } from 'react';
import WordlePanel from './components/WordlePanel/WordlePanel';
import useDebounce from './utils/debounceHook';
import CompareGuess from './utils/compareGuess';
import RespondToKeyPress from './utils/respondToKeyPress';
import API from "./utils/API.js";
import Submit from './components/Submit/Submit';
import Keypad from './components/Keypad/Keypad';
import GameOverModal from './components/Modal/Modal';
import TopPanel from './components/TopPanel/TopPanel';
import InstructionModal from './components/InstructionModal/InstructionModal';
//import WhiteboardToggle from './components/WhiteboardToggle';
import axios from 'axios';

// whiteboard component
import Whiteboard from './components/Whiteboard';


function App() {
  /**SETTING THE COMPONENT STATES */
  // State containing the key that has been pressed
  const [key, setKey] = useState({
    value: "",
    timeStamp: 0
  });
  // State having the letters in the wordle grid and the current row and index
  const [data, setData] = useState({
    guessLetters: [
      ["", "", "", "", ""],
      ["", "", "", "", ""],
      ["", "", "", "", ""],
      ["", "", "", "", ""],
      ["", "", "", "", ""],
      ["", "", "", "", ""]
    ],
    index: 0,
    row: 0
  });
  // State having the background color for each of the wordle grid boxes
  // Used for setting the background color according to how the guess matches the solution
  // See utils/Checkguess.js and the function checkEntry for the logic
  const [letterColor, setLetterColor] = useState([
    ["white", "white", "white", "white", "white"],
    ["white", "white", "white", "white", "white"],
    ["white", "white", "white", "white", "white"],
    ["white", "white", "white", "white", "white"],
    ["white", "white", "white", "white", "white"],
    ["white", "white", "white", "white", "white"]
  ]
  );
  // State containing the status of each box in the wordle grid - is it filled or not?
  // Used for the bouncing animation when the letter is typed - see LetterButton.js and LetterButton.css
  const [filled, setFilled] = useState([
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""]
  ]
  );
  // State to store the solution
  const [solution, setSolution] = useState("STEEL");
  // State to store a flag to indicate if the result modals are to be shown or not. 
  // There are two kinds of modals - one for a win and one for a loss
  const [showModal, setShowModal] = useState({
    show: false,
    isCorrect: false
  });
  // A state to keep track of whether to show the instruction modal or not
  const [showInstructionModal, setShowInstructionModal] = useState(false);
  // Keeping a track of the letters that have been used
  // Used for highlighting the letters in the keyboard: See utils/checkGuess.js for functionality
  const [usedKeys, setUsedKeys] = useState({});
  const [showWhiteboard, setShowWhiteboard]  = useState(false);

  // Get a new wordle solution for the new puzzle
  // Run once on load
  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://wordle-answers-solutions.p.rapidapi.com/answers',
      headers: {
        'X-RapidAPI-Key': '9ba7d440b5msh5438551fa5d5c20p112825jsne7fb13cd489f',
        'X-RapidAPI-Host': 'wordle-answers-solutions.p.rapidapi.com'
      }
    }
    axios.request(options)
      .then(function (response) {
        // Select a random word from the large number of solutions presented
        setSolution(response.data.data[Math.floor(Math.random() * parseInt(response.data.data[0].num))].answer);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  // Debounce the Key Press
  // See functionality in utils/debounceHook.js
  const debouncedKey = useDebounce(key, 100);

  // Listen to a key press anywhere on the window
  useEffect(() => {
    window.addEventListener('keydown', e => {
      if (((e.which >= 65 && e.which <= 90) || e.which === 8 || e.which === 13) && !showWhiteboard) {
        // Respond if the key is a letter press or a backspace or a enter only
        setKey({ value: e.key, timeStamp: e.timeStamp });
      }
    });
  }, []);

  // What should you do if there is a new value of the debounced key
  // Used timeStamp as the trigger so that repeated key entries are detected
  useEffect(() => {
    if (debouncedKey.value !== "Enter" && !showWhiteboard ) {
      let temp = RespondToKeyPress({ ...data }, debouncedKey.value, [...filled]);
      setData(temp.data);
      setFilled(temp.filled);
    } else {
      if (showModal.show === true) { // if the results modal is showing go back to the main page
        setShowModal({ ...showModal, show: false });
        window.location.reload();
      } else if (showInstructionModal === true) { // if the instruction modal is showing close it and go back to main page
        setShowInstructionModal(false);
      } else { // if enter is pressed on main page; check the word that has been entered
        checkEntry();
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedKey.timeStamp])

  // Functionality for checking a new guess
  const checkEntry = async () => {
    if (data.index >= 5) { // Make sure that a 5 letter word has been guessed
      await API.IsDictionaryWord(data.guessLetters[data.row].join('')) // Is the word a valid dictionary word?
        .then(res => {
          setData({ ...data, index: 0, row: data.row + 1 }); // If yes, reset the index and row values
          let temp = CompareGuess(data, solution, letterColor, usedKeys); // Compare guess to the solution
          setLetterColor(temp.letterColor);
          setTimeout(function () {
            setUsedKeys(temp.newKeys);
          }, 2500);
        })
        .catch(err => {
          let temp = data.guessLetters;
          temp[data.row] = ["", "", "", "", ""];
          setData({ ...data, guessLetters: temp, index: 0 });
        });

      // check if the solution is found
      let doneFlg = true;
      for (let i = 0; i < 5; i++) { 
        if (letterColor[data.row][i] !== "green") {
          doneFlg = false;
        }
      }
      if (doneFlg) {
        // Won the game
        setTimeout(function () {
          setShowModal({ show: true, isCorrect: true });
        }, 2500)    // Allow 2.5s before displaying the won modal - this time is for the animation in the wordle grid to finish
      } else if (data.row >= 5) {
        // Lost the game
        setTimeout(function () {
          setShowModal({ show: true, isCorrect: false });
        }, 2500)    // Allow 2.5s before displaying the lost modal - this time is for the animation in the wordle grid to finish
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  };

  const KeypadClick = ((e) => {
    //console.log(e.target.value);
    setKey({ value: e.target.value, timeStamp: e.timeStamp });
  });

  return (<div>
    
    <div>
      <TopPanel ModalInstructionHandler={() => setShowInstructionModal(true)} toggleWhiteboard={() => setShowWhiteboard(!showWhiteboard)}/>
      {!showWhiteboard && <div className="wordle-panel container d-flex flex-column">
        <WordlePanel
          row1={data.guessLetters[0]} row2={data.guessLetters[1]} row3={data.guessLetters[2]} row4={data.guessLetters[3]} row5={data.guessLetters[4]} row6={data.guessLetters[5]}
          row1Color={letterColor[0]} row2Color={letterColor[1]} row3Color={letterColor[2]} row4Color={letterColor[3]} row5Color={letterColor[4]} row6Color={letterColor[5]}
          row1Filled={filled[0]} row2Filled={filled[1]} row3Filled={filled[2]} row4Filled={filled[3]} row5Filled={filled[4]} row6Filled={filled[5]} />
        <Keypad usedKeys={usedKeys} KeypadClick={(e) => KeypadClick(e)} />
        <Submit
          clickHandler={checkEntry}
          backSpace={() => { setKey({ value: "Backspace", timeStamp: key.timeStamp + 1 }) }} />
        {showModal.show &&
          <GameOverModal
            show={showModal.show}
            solution={solution}
            turn={data.row}
            isCorrect={showModal.isCorrect}
            onHide={() => window.location.reload()} />
        }
        
      </div>}
      {showInstructionModal &&
          <InstructionModal
            show={showInstructionModal}
            onHide={() => setShowInstructionModal(false)} />
        }
    </div>
    {showWhiteboard && <Whiteboard />}
  </div>);
}

export default App;