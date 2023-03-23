//import WordlePanel from "./components/WordlePanel"
import './App.css';
import { useEffect, useState } from 'react';
import WordlePanel from './components/WordlePanel/WordlePanel';
import useDebounce from './utils/debounceHook';
import CheckGuess from './utils/checkGuess';
import RespondToKeyPress from './utils/respondToKeyPress';
import API from "./utils/API.js";
import Submit from './components/Submit';

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
                  ["", "", "", "", ""]],
    index: 0,
    row: 0
  });

  // Debounce the Key Press
  const debouncedKey = useDebounce(key, 500);

  useEffect(() => {
    // Listen to a key press anywhere on the window
    window.addEventListener('keydown', e => {
      console.log(e);
      if ((e.which >= 65 && e.which <= 90) || e.which === 8) {
        setKey({value: e.key, timeStamp: e.timeStamp});
      }
    });
  }, []);

  useEffect(() => {
    //What should you do if the debounced value of the keypress changes.
    console.log(`Key Pressed: ${debouncedKey}; Index: ${data.index}`);
    let temp = RespondToKeyPress({ ...data }, debouncedKey.value);
    console.log(temp);
    setData(temp);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedKey.timeStamp])

  const checkEntry = () => {
    if (data.index >= 5) {
        API.IsDictionaryWord(data.guessLetters[data.row].join(''))
          .then(res => {
            setData({ ...data, index: 0, row: data.row + 1 });
            CheckGuess(data); ///Work from here
          })
          .catch(err => { 
            let temp = data.guessLetters;
            temp[data.row] = ["", "", "", "", ""];
            setData({ ...data, guessLetters: temp, index: 0 });
          });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  };

  return (
    <div className="container w-50">
      <WordlePanel row1={data.guessLetters[0]} row2={data.guessLetters[1]} row3={data.guessLetters[2]} row4={data.guessLetters[3]} row5={data.guessLetters[4]} />
      <Submit clickHandler={checkEntry}/>
    </div>
  );
}

export default App;
