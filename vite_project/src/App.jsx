
import { createElement } from 'react'
import './App.css'

function App() {
  let name="ManyaSharma"
  let obj={
    fname: "MANYA SHARMA",
    age:22,
    course:"FSD"
  }
  return (
    <>
    <h1>my name is {name} </h1>
    <h1>{obj.fname}</h1>
    <h1>{obj.age}</h1>
    <h1>{obj.course}</h1>
    </>
  )
}

export default App
