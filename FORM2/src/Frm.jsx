import { useState } from "react"

function Frm(){
    let[inputValue,setInput]=useState({
        username:'',
        age:'',
        contact:'',
        city:'',
        course:''
    })
    function hinput(event){
        const{name,value}=event.target
        setInput({
          ...inputValue,
          [name]:value
        })

    }

    function finalSubmit(event){
       event.preventDefault();
        console.log(inputValue)
    } 
return(
    <>
    <form onSubmit={finalSubmit}>
        <label htmlFor="">Name</label>
        <input type="text" name="name" value={inputValue.name} onChange={hinput}/>  <br /> <br />
          <label htmlFor="">age</label>
        <input type="text" name="age" value={inputValue.age} onChange={hinput}/>  <br /> <br />
          <label htmlFor="">contact</label>
        <input type="text" name="contact" value={inputValue.contact} onChange={hinput}/>  <br /> <br />
          <label htmlFor="">city</label>
        <input type="text" name="city" value={inputValue.city} onChange={hinput}/>  <br /> <br />
          <label htmlFor="">course</label>
        <input type="text" name="course" value={inputValue.course} onChange={hinput}/>  <br /> <br />
        <input type="submit" />

    </form>
    </>
)
}
export default Frm