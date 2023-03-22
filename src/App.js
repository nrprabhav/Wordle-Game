//import WordlePanel from "./components/WordlePanel"
import './App.css';
import { useEffect, useState } from 'react';
import WordlePanel from './components/WordlePanel/WordlePanel';
import useDebounce from './utils/debounceHook';

function App() {
  const [key, setKey] = useState("");
  const [data, setData] = useState({
    row1: ["", "", "", "", ""],
    row2: ["", "", "", "", ""],
    row3: ["", "", "", "", ""],
    row4: ["", "", "", "", ""],
    row5: ["", "", "", "", ""],
    index: 0
  });

  const debouncedKey = useDebounce(key, 500);

  function isCharacterALetter(char) {
    return (/[a-zA-Z]/).test(char)
  }

  useEffect(() => {
    window.addEventListener('keydown', e => {
      setKey(e.key);
    });
  }, []);

  useEffect(() => {
    console.log(`Key Pressed: ${debouncedKey}; Index: ${data.index}`);
    if (isCharacterALetter(debouncedKey)) {
      let temp = data.row1;
      temp[data.index] = debouncedKey.toUpperCase();
      setData({ ...data, row1: temp, index: data.index + 1 });
    }
  }, [debouncedKey])

  return (
    <div className="container w-50">
      <WordlePanel row1={data.row1} row2={data.row2} row3={data.row3} row4={data.row4} row5={data.row5} />
    </div>
  );
}

export default App;
