import { useState, useEffect } from "react";

export default function useDarkSide() {
  const [theme, setTheme] = useState(
    typeof window !== "undefined"
      ? localStorage.theme
        ? localStorage.theme
        : "dark"
      : "dark"
  );
  const colorTheme = theme === "dark" ? "light" : "dark";

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme, colorTheme]);

  return [colorTheme, setTheme] as const;
}
