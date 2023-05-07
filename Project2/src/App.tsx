import Card from "./components/Card"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import image1 from "./assets/image 12.png"
function App() {
  return (
    <div className="w-[600px] mx-auto my-0">
      <Navbar />
      {/* <Hero /> */}
      <Card
        img={image1}
        rating="5.0"
        reviewCount={6}
        country="USA"
        title="Life lessons with Katie Zafares"
        price={136}
      />
    </div>
  )
}

export default App
