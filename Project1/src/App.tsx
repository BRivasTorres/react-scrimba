import Main from "./components/Main"
import Navbar from "./components/Navbar"
import { useState } from "react"

function App() {
  const [darkMode, setDarkMode] = useState(true)

  function toggleDarkMode() {
    setDarkMode(prevMode => !prevMode)
  }

  return (
    <div className="w-[85%] mx-auto my-0">
      <Navbar
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />
      <Main darkMode={darkMode} />
    </div>
  )
}

export default App
