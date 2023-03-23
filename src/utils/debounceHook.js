import { useEffect, useState } from "react";

const useDebounce = (value, delay, timeStamp) => {
  const [debouncedValue, setDebouncedValue] = useState({
    value: "",
    timeStamp: 0
  });
  useEffect(
    () => {
      const handler = setTimeout(() => {
        console.log("DEBOUNCE");
        setDebouncedValue(value);
      }, delay);
      // Cancel the timeout if value or delay changes
      return () => {
        clearTimeout(handler);
      };
    },
    // Only call the effect if value or delay changes.
    [value, delay, timeStamp]
  );

  return debouncedValue;
};

export default useDebounce;