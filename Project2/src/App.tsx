import Card from "./components/Card"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Data from "../src/helpers/Data"


function App() {
  const cardComponent = Data.map((item) => {
    return (
      <Card
        key={item.id}
        item={item}
      />
    )
  })

  return (
    <div className="w-[750px] mx-auto my-0">
      <Navbar />
      <Hero />
      <div className="flex justify-between mx-[1rem]">
        {cardComponent}
      </div>
    </div>
  )
}

export default App
