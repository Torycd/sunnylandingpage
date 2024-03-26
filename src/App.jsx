import Cup from "./components/Cup"
import Egg from "./components/Egg"
import FirstSection from "./components/FirstSection"
import Footer from "./components/Footer"
import Gallery from "./components/Gallery"
import Orange from "./components/Orange"
import Testimonial from "./components/Testimonial"

const App = () => {
  return (
    <div className="w-scrren">
      <FirstSection/>
      <Egg/>
      <Cup/>
      <Orange/>
      <Testimonial/>
      <Gallery/>
      <Footer/>
    </div>
  )
}

export default App