import { Route, Routes } from "react-router-dom"
import Navbar from "./Navbar"
import Home from "./Home"
import Contact from "./Contact"
import About from "./About"


function App() {
  

  return (
    <>
     <Routes>
      <Route path='/' element={<Navbar/>} >
        <Route index element={<Home/>}></Route>
        <Route path="about/:name/:age" element={<About/>}></Route>
        <Route path='contact' element={<Contact/>}></Route>

      </Route>
     </Routes>
    </>
  )
}

export default App
