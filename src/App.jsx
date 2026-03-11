import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import { Routes, Route } from 'react-router-dom'
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import CarViewer from "./components/CarViewer"
import Performance from "./components/Performance"
import Drivers from "./components/Drivers"
import Dashboard from "./components/Dashboard"
import Races from "./components/Races"
import Partners from "./components/Partners"
import Footer from "./components/Footer"
import DriverPage from "./pages/DriverPage"

gsap.registerPlugin(ScrollTrigger)

const Home = () => (
  <main className="bg-black min-h-screen">
    <Navbar />
    <Hero />
    <CarViewer />
    <Performance />
    <Drivers />
    <Dashboard />
    <Races />
    <Partners />
    <Footer />
  </main>
)

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/piloto/:id" element={<DriverPage />} />
    </Routes>
  )
}

export default App