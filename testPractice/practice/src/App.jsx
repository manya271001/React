import Page from "./Page"
import { Route,Routes } from "react-router-dom"
import Home from './Home'
import About from './About'
import Contact from './Contact'

function App() {

  return (
    <>
     <Routes>
      <Route path="/" element={<Page/>}>
        <Route path="/home" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Route>
     </Routes>
    </>
  )
}

export default App
