import { useState } from "react"

function Form(){
    const [input1,setInput]=useState('')
    function getinput(event){
        setInput(event.target.value)
    }
    const [input2,setInput2]=useState('')
    function getinput2(e){
           setInput2(e.target.value)
    }

    const [st,setSt]= useState(false)
   
    return(
        <>
        <h1>my name is : {(st)?input1:""}</h1>
        <input type="text" onChange={getinput} placeholder=" first name" />
        {/* <input type="text" onChange={getinput2} placeholder="second name" /> */}
        <button onClick={()=>setSt(true)}>SUBMIT</button>



        </>
    )
}
export default Form