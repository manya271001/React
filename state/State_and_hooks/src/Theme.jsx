import { useState } from "react"
import './Theme.css'
function Theme(){
    const [theme,setTheme]= useState('white')
    function change(){
        setTheme('black')
        

    }
return(
    <>
    <body >

          <button onClick={change}>CHANGE</button> 
    </body>
 
    </>
)
}
export default Theme