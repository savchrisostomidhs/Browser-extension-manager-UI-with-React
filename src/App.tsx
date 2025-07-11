import Theme from "./Components/Theme"
import Filter from "./Components/Filter"
import Extensions from "./Components/Extensions"
import { useEffect, useState } from "react"
import "./App.css"

function App() {
  const [filter, setFilter] = useState<string>("All");
  const [theme, setTheme] = useState<string>(() =>
    localStorage.getItem("theme") ||
    (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
  );

  useEffect(() => {
    document.documentElement.setAttribute("theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="app">
      <Theme theme={theme} setTheme={setTheme} />
      <Filter filter={filter} setFilter={setFilter} />
      <Extensions filter={filter} />
      <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge">Frontend Mentor</a>.
        Coded by <a href="https://github.com/savchrisostomidhs">savchrisostomidhs</a>.
      </div>
    </div>
  )
}

export default App
