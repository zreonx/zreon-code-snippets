import { useState, createContext } from "react";
import Header from "./components/Header";
import Post from "./components/Post";

export const ThemeContext = createContext();

const App = () => {
  const [isDark, setIsDark] = useState(true);

  const value = {
    isDark,
    setIsDark,
  };
  return (
    <ThemeContext.Provider value={value}>
      <div>
        <Header />
        <Post />
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
