import { useState } from 'react'
import Box from './Box'
import Show from './Show'
import Show2 from './Show2'
import Theme from './Theme'
import Counter from './Counter'

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
    {/* <h1>{count}</h1>
    <button onClick={add}>Increment</button>
    <button onClick={remove}>Decrement</button>

    
    <Show/>
    <Show2/> */}
    <Theme/>
    <Counter/>
    <Box/>

   
    </>
  )
}

export default App
