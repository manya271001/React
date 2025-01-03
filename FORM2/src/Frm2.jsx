import { useState } from "react"
import Login from './Login'
import './Style.css'
function Frm2(){
     let[inputValue,setInput]=useState({
        username:'',
        password:''
      })

          function hinput(event){
        const{name,value}=event.target
        setInput({
          ...inputValue,
          [name]:value
        })

    }
    let[status,setStatus]=useState(false)

         function finalSubmit(event){
       event.preventDefault();
       if(inputValue.username=="" || inputValue.password==""){
        alert("both feild are required")
       }
        else{
          localStorage.setItem('userData',JSON.stringify(inputValue))
          setStatus(true)
        }
    } 
    if(status){
      return <Login/>
    }
    

return(
    <>

    <form onSubmit={finalSubmit}>
      <h1>SIGN UP</h1>
          <label htmlFor="">USERNAME</label>
        <input type="text" name="username" value={inputValue.username} onChange={hinput}/>  <br /> <br />
          <label htmlFor="">PASSWORD</label>
        <input type="password" name="password" value={inputValue.password} onChange={hinput}/>  <br /> <br />
        <input type="submit" />
    </form>
    </>
)
}
export default Frm2