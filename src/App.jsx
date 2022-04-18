import { createContext, useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Main from "./components/Main";

export const AppContext = createContext(false);

const App = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <AppContext.Provider value={{ isPlaying, setIsPlaying }}>
      <CssBaseline />
      <Main />
    </AppContext.Provider>
  );
};

export default App;
