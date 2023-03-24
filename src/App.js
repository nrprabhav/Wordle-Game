//import WordlePanel from "./components/WordlePanel"
import './App.css';
import { useEffect, useState } from 'react';
import WordlePanel from './components/WordlePanel/WordlePanel';
import useDebounce from './utils/debounceHook';
import CheckGuess from './utils/checkGuess';
import RespondToKeyPress from './utils/respondToKeyPress';

function App() {
  const [key, setKey] = useState("");
  const [data, setData] = useState({
    row1: ["", "", "", "", ""],
    row2: ["", "", "", "", ""],
    row3: ["", "", "", "", ""],
    row4: ["", "", "", "", ""],
    row5: ["", "", "", "", ""],
    index: 0,
    row: 1
  });

  // Debounce the Key Press
  const debouncedKey = useDebounce(key, 500);

  useEffect(() => {
    // Listen to a key press anywhere on the window
    window.addEventListener('keydown', e => {
      console.log(e);
      if((e.which>=65 && e.which<=90) || e.which === 8){
        setKey(e.key);
      }
    });
  }, []);

  useEffect(() => {
    //What should you do if the debounced value of the keypress changes.
    console.log(`Key Pressed: ${debouncedKey}; Index: ${data.index}`);
    let temp = RespondToKeyPress({...data},debouncedKey);
    console.log(temp);
    setData(temp);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedKey])

  useEffect(() => {
    if (data.index === 5) {
      CheckGuess(data);
      setData({ ...data, index: 0, row: data.row + 1 })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data.index])

  return (
    <div className="container w-50">
      <WordlePanel row1={data.row1} row2={data.row2} row3={data.row3} row4={data.row4} row5={data.row5} />
      < CheckGuess />
    </div>
  );
}

export default App;
