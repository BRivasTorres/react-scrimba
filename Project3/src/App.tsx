import Meme from "./components/Meme"
import Navbar from "./components/Navbar"

function App() {
  return (
    <div className="w-[90%] mx-auto my-0 max-w-5xl bg-gray-200 ">
      <Navbar />
      <Meme />
    </div>
  )
}

export default App
