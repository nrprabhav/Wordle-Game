import { useEffect, useState } from "react";

// Prevent multiple key presses by changing the value with a delay
const useDebounce = (value, delay, timeStamp) => {
  const [debouncedValue, setDebouncedValue] = useState({
    value: "",
    timeStamp: 0
  });
  useEffect(
    () => {
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);
      // Cancel the timeout if value or delay changes
      return () => {
        clearTimeout(handler);
      };
    },
    // Only call the effect if value/delay/timeStamp changes.
    [value, delay, timeStamp]
  );

  return debouncedValue;
};

export default useDebounce;