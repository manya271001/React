import { useEffect, useState } from "react"


function Login(){
    let [inputValue,setInput]=useState({
        username:'',
        pass:''
    })
    function hinput(e){
        const[name,value]=e.target
        setInput({
            ...inputValue,
            [name]:value
        })
    }
    let [udata,setUdata]=useState(null)
    function finalSubmission(event){
        event.preventDefault()
    }
    useEffect(()=>{
        let data=JSON.parse(localStorage.getItem("userData"))
    },[])
   
    return(
        <>
        <h3>LOGIN PAGE</h3>
        <form onSubmit={finalSubmission}>
            <label>USERNAME</label>
             <input type="text" name="username" value={inputValue.username} onChange={hinput}/>  <br /> <br />
          <label htmlFor="">PASSWORD</label>
        <input type="text" name="pass" value={inputValue.pass} onChange={hinput}/>  <br /> <br />
        <input type="submit" />
        </form>
        </>
    )
}
export default Login