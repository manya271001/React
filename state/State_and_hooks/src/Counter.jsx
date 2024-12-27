import { useEffect, useState } from "react"
import Theme from "./Theme";
    
function Counter(){
const[count,setCount]=useState(0);
const[value,setValue]=useState('true')
useEffect(()=>{alert("call...!!!")},[count,value])
function inc(){
    setCount(count+1)
}
function dec(){
    setCount(count===(0)?0:count-1)

}

return(
    <>
    <h1 style={{color:'pink'}} >{count}</h1>
    <button onClick={()=>setCount(count+1)}>INCREMENT</button>
    <button onClick={dec}>DECREMENT</button> <br />

    <button onClick={()=>setValue(!value)}>{(value)?"TRUE":"FALSE"}</button>


    
    </>
)

}
export default Counter