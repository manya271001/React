import { useState } from "react"
import './Theme.css'
function Theme(){
    const [theme,setTheme]= useState('white')
    function change(){
        setTheme(theme==="white"?"black":"white")
        document.body.style.backgroundColor=theme
        

    }
return(
    <>
        <button onClick={change}>CHANGE</button> 
 
    </>
)
}
export default Theme