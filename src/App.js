import { Box } from "@mui/material";
import React, { useState, useEffect, createContext } from "react";

import "./App.css";
import Router from "./Components/Router/Router";
export const DarkmodeEnable = createContext();
const App = () => {
  const [isDark, setDark] = useState(false);
  const handleDarkMode = () => {
    setDark(true);
  };
  const handleLightMode = () => {
    setDark(false);
  };

  return (
    <DarkmodeEnable.Provider
      value={{ isDark, handleDarkMode, handleLightMode }}
    >
      <Box>
        <Router />
      </Box>
    </DarkmodeEnable.Provider>
  );
};
export default App;
