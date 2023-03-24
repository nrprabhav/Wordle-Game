import IsDictionaryWord from "./isDictionaryWord";

const CheckGuess = ({ isGuessed, guess, word, data}) => {
  console.log("CHECK");
  IsDictionaryWord(data.row1);
  // Check if the guess is a valid dictionary word
  IsDictionaryWord(data.row1);
  // Highlight letters which are wrong or right
  const letterColors = guess.split('').map((letter, i) => {
    if (!isGuessed) {
      return 'bg-black';
    } else if (letter === word[i]) {
      return 'bg-green-400';
    } else if (word.includes(letter)) {
      return 'bg-yellow-400';
    } else {
      return 'bg-black';
    }
  });

  return (
    <div className="mb-2 grid grid-cols-5 gap-2">
      {guess.split('').map((letter, i) => (
        <div
          key={i}
          className={`flex h-16 w-16 items-center justify-center border border-gray-400 font-bold uppercase text-white ${letterColors[i]}`}
        >
          {letter}
        </div>
      ))}
    </div>
  );
};

export default CheckGuess;
