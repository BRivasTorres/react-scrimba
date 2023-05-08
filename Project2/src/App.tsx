import Card from "./components/Card"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Data from "../src/helpers/Data"

function App() {
  const cardComponent = Data.map((card) => {
    return (
      <Card
        img={card.coverImg}
        rating={card.stats.rating}
        reviewCount={card.stats.reviewCount}
        country={card.country}
        title={card.title}
        price={card.price}
      />
    )
  })

  return (
    <div className="w-[750px] mx-auto my-0">
      <Navbar />
      {/* <Hero /> */}
      <div className="flex justify-between">
        {cardComponent}
      </div>
    </div>
  )
}

export default App
