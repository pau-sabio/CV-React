
import Navbar from "./Navbar"
import  {Home}  from './Pages/Home';
import {Work} from "./Pages/Work"
import {Contact} from "./Pages/Contact"
import { Route, Routes } from "react-router-dom"
import Footer from "./Footer"



function App() {
  
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>

    <Footer />
    </>
  )
}

export default App