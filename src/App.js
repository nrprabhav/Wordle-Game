//import WordlePanel from "./components/WordlePanel"
import './App.css';
import { useEffect, useState } from 'react';
import WordlePanel from './components/WordlePanel/WordlePanel';
import useDebounce from './utils/debounceHook';
import CheckGuess from './utils/checkGuess';
import RespondToKeyPress from './utils/respondToKeyPress';
import API from "./utils/API.js";
import Submit from './components/Submit/Submit';
import Keypad from './components/Keypad/Keypad';
import GameOverModal from './components/Modal/Modal';
//import axios from 'axios';

function App() {
  const [key, setKey] = useState({
    value: "",
    timeStamp: 0
  });
  const [data, setData] = useState({
    guessLetters: [["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""]],
    index: 0,
    row: 0
  });
  const [letterColor, setLetterColor] = useState([
    ["white", "white", "white", "white", "white"],
    ["white", "white", "white", "white", "white"],
    ["white", "white", "white", "white", "white"],
    ["white", "white", "white", "white", "white"],
    ["white", "white", "white", "white", "white"],
    ["white", "white", "white", "white", "white"]
  ]
  );
  const [filled, setFilled] = useState([
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""]
  ]
  );
  const [solution, setSolution] = useState("GAMES");
  const [showModal, setShowModal] = useState({
    show: false,
    isCorrect: false
  });
  const [usedKeys, setUsedKeys] = useState({});

  // GET as new word from the wordle-solutions API when the page loads for the first time
  // Uncomment when done
  /*
  useEffect(() => {
    console.log("GET SOLUTION");
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
        setSolution(response.data.data[Math.floor(Math.random() * parseInt(response.data.data[0].num))].answer);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);*/

  // Debounce the Key Press
  const debouncedKey = useDebounce(key, 100);

  useEffect(() => {
    // Listen to a key press anywhere on the window
    window.addEventListener('keydown', e => {
      if ((e.which >= 65 && e.which <= 90) || e.which === 8 || e.which === 13) {
        // Respond if the key is a letter press or a backspace
        setKey({ value: e.key, timeStamp: e.timeStamp });
      }
    });
  }, []);

  useEffect(() => {
    //What should you do if the debounced value of the keypress changes.
    console.log(debouncedKey.value);
    if (debouncedKey.value !== "Enter") {
      
      let temp = RespondToKeyPress({ ...data }, debouncedKey.value, [...filled]);
      setData(temp.data);
      //let tempFilled = filled.slice();
      //tempFilled[data.row][data.index]="filled";
      setFilled(temp.filled);
    } else {
      checkEntry();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedKey.timeStamp])

  const checkEntry = async () => {
    console.log(data.index);
    if (data.index >= 5) {
      await API.IsDictionaryWord(data.guessLetters[data.row].join(''))
        .then(res => {
          setData({ ...data, index: 0, row: data.row + 1 });
          let temp = CheckGuess(data, solution, letterColor, usedKeys);
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
      let doneFlg = true;
      for (let i = 0; i < 5; i++) {
        if (letterColor[data.row][i] !== "green") {
          doneFlg = false;
        }
      }
      if (doneFlg) {
        console.log("YOU WON");
        setTimeout(function () {
          setShowModal({ show: true, isCorrect: true });
        }, 2500)
        console.log(showModal);
        //setData({...data, filled: "filled"});
        //window.location.reload();
      } else if (data.row >= 5) {
        console.log("YOU LOST");
        setTimeout(function () {
          setShowModal({ show: true, isCorrect: false });
        }, 2500)
        //setData({...data, filled: "filled"});
      }

    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  };

  const KeypadClick = ((e) => {
    //console.log(e.target.value);
    setKey({ value: e.target.value, timeStamp: e.timeStamp });
  });

  return (
    <div className="container d-flex flex-column">
      <h1 className='display-1'>Wordle</h1>
      <WordlePanel row1={data.guessLetters[0]} row2={data.guessLetters[1]} row3={data.guessLetters[2]} row4={data.guessLetters[3]} row5={data.guessLetters[4]} row6={data.guessLetters[5]}
        row1Color={letterColor[0]} row2Color={letterColor[1]} row3Color={letterColor[2]} row4Color={letterColor[3]} row5Color={letterColor[4]} row6Color={letterColor[5]}
        row1Filled={filled[0]} row2Filled={filled[1]} row3Filled={filled[2]} row4Filled={filled[3]} row5Filled={filled[4]} row6Filled={filled[5]} />
      <Keypad usedKeys={usedKeys} KeypadClick={(e) => KeypadClick(e)} />
      <Submit clickHandler={checkEntry} backSpace={() => setKey({value:"Backspace", timeStamp: 0})}/>
      {showModal.show && <GameOverModal show={showModal.show}
        solution={solution} turn={data.row} isCorrect={showModal.isCorrect} onHide={() => window.location.reload()} />}
    </div>
  );
}

export default App;
//setShowModal({show: false, isCorrect: true})