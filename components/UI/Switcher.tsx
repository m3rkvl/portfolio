import { useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import useDarkSide from "../../hooks/useDarkSide";

export default function Switcher() {
  const [hover, setHover] = useState(false);
  const [colorTheme, setTheme] = useDarkSide();
  const [darkSide, setDarkSide] = useState(
    colorTheme === "light" ? true : false
  );

  const toggleHover = () => {
    setHover((prev) => !prev);
  };

  const toggleDarkMode = (checked: any) => {
    setTheme(colorTheme);
    setDarkSide(checked);
  };

  return (
    <>
      <DarkModeSwitch
        style={{ marginBottom: "2rem", opacity: hover ? 1 : 0.5 }}
        checked={darkSide}
        onMouseEnter={toggleHover}
        onMouseLeave={toggleHover}
        onChange={toggleDarkMode}
        size={30}
      />
    </>
  );
}
