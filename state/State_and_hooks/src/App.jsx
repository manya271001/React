import { useState } from 'react'
import Box from './Box'


function App() {
let[count,setCounter]=useState(0)
function add(){
  setCounter(count+1)
}
function remove(){
  if(count===0){
    count=0
  }
  else{
  setCounter(count-1)}
}

  return (
    <>
    <h1>{count}</h1>
    <button onClick={add}>Increment</button>
    <button onClick={remove}>Decrement</button>

    <Box/>
   
    </>
  )
}

export default App
