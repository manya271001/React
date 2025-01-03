import { useEffect, useState } from "react"
import Home from './Home'


function Login(){
    let [inputValue,setInput]=useState({
        username:'',
        pass:''
    })
    function hinput(e){
        const{name,value}=e.target
        setInput({
            ...inputValue,
            [name]:value
        })
    }
    function finalSubmission(event){
        event.preventDefault()
    }
    
    useEffect(()=>{
         let data=JSON.parse(localStorage.getItem("userData"))
    },[])
    let [status,setStatus]=useState(false)
   function finalSubmission(event){
    event.preventDefault()
      let data=JSON.parse(localStorage.getItem("userData"))
    if(data.username===inputValue.username && data.password===inputValue.pass){
        setStatus(true)
    }
    else{
        alert("username passowrd not found")
    }
   }
   if(status){
    return <Home/>
   }
    return(
        <>
        
        <form onSubmit={finalSubmission}>
            <h1>LOGIN PAGE</h1>
            <label>USERNAME</label>
             <input type="text" name="username" value={inputValue.username} onChange={hinput}/>  <br /> <br />
          <label htmlFor="">PASSWORD</label>
        <input type="password" name="pass" value={inputValue.pass} onChange={hinput}/>  <br /> <br />
        <input type="submit" />
        </form>
        </>
    )
}
export default Login