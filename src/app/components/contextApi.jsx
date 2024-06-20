"use client";
import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export default function ThemeProvider({ children }) {
  const [val, setVal] = useState('');

  function handleChange(e) {
    setVal(e.target.value);
    console.log(val);
  }

  return (
    <ThemeContext.Provider
      value={{
        handleChange,
        val,
        setVal,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
