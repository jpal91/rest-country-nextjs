import { createContext, useState } from "react";

//context for theme state
const ThemeContext = createContext({
  darkMode: false,
  changeTheme: () => {}
});

export const ThemeContextProvider = (props) => {
  const [darkMode, setDarkMode] = useState(false);

  const changeTheme = () => {
    setDarkMode(!darkMode);
  };

  const context = {
    darkMode: darkMode,
    changeTheme: changeTheme
  };

  return (
    <ThemeContext.Provider value={context}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
