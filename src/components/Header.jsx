import { useContext } from "react";
import { LogoIcon, MoonIcon, SunIcon } from "../assets/icons";
import { ThemeContext } from "../App";

const Header = () => {
  const { isDark, setIsDark } = useContext(ThemeContext);
  return (
    <header className='header'>
      <div className='container'>
        <nav>
          <div className='logo'>
            <h1>Zre</h1>
            <LogoIcon />
            <h1>n</h1>
          </div>
          <button onClick={() => setIsDark(!isDark)} className='theme'>
            {isDark ? <MoonIcon /> : <SunIcon />}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
