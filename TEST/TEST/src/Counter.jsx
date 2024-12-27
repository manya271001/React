import { useState } from "react"

function Counter(){
    const [counter,setCount]=useState(0)
    function inc(){
        setCount(counter+5)
    }
    function dec(){
        if(counter===0){
            setCount(0)
        }
        else{
            setCount(counter-1)
        }
    }

    return(
        <>
          <h1>{counter}</h1>
          <div style={{display:"flex",gap:"50px"}}>
        <button onClick={inc} style={{borderRadius:"12px",color:"white",backgroundColor:"black",border:"none",outline:"none"}}>INCREMENT</button>
        <button onClick={dec} style={{borderRadius:"12px",color:"white",backgroundColor:"black",border:"none",outline:"none"}}>DECREMENT</button>
        </div>
      
        </>
    )
}
export default Counter