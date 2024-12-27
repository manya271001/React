import { useState } from "react"

const Frm = ()=>{
    let [inputname,setInput]= useState({
        username:'',
        adress:'',
        age:'',
        contact:'',
        course:''
        

    })
    function inputvalue(event){
        const {name,value}=event.target
        setInput({
            ...inputname,
            [name]:value
        })
    }

    function finalSubmit(event){
        event.preventDefault();
        console.log(inputname);
    }
    return(
        <>
        <form onSubmit={finalSubmit}>
            <label htmlFor="">Name</label>
            <input type="text" name="username" value={inputname.username} onChange={inputvalue} /> <br /> <br />
            <label htmlFor="">Adress</label>
          <input type="text" name="adress" value={inputname.adress} onChange={inputvalue} />  <br /> <br />
            <label htmlFor="">age</label>
          <input type="text" name="age" value={inputname.age} onChange={inputvalue} />  <br /> <br />
            <label htmlFor="">contact</label>
          <input type="text" name="contact" value={inputname.contact} onChange={inputvalue} />  <br /> <br />
            <label htmlFor="">course</label>
          <input type="text" name="course" value={inputname.course} onChange={inputvalue} />  <br /> <br />
          <input type="submit" />
        </form>
        </>
    )
}
export default Frm