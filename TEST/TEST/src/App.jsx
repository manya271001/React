import { Route,Routes } from "react-router-dom"
import Counter from './Counter'
import Child from './Child'
import Layout from "./Layout"


function App() {
  const data={
    name:"manyyaaaa",
    age:22
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}>
       
          <Route path="/counter" element={<Counter/>}/>
          <Route path="/child" element={<Child data={data}/>}/>
          </Route>
        

    
      </Routes>
    </>
  )
}

export default App
