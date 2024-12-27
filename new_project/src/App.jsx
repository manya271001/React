import Child1 from "./Child1"
import Child4 from "./Child4"
import Child5 from "./Child5"
let a=prompt("enter your name : ")
function App() {
  const value={
    age:"77",
    course:"FSD"
  }

  return (
    <>
   <Child1 name={a}/>
   <Child4 value={value}/>
   <Child5 contact="8989898"/>

    </>
  )
}

export default App
