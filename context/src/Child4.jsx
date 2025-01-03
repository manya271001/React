import { createContext } from "react"
import { newd } from "./Child2"
import Child5 from "./Child5"
let sdata=createContext()
let city="bhopal"
let course="MERN"


function Child4(){
    return(
        <>
       <newd.Consumer>
        {
            ({newData,name})=>{
                return (
                    <h1>{newData} from {name}</h1>
                )
            }
        }
       </newd.Consumer>

       <sdata.Provider value={{city,course}}>
        <Child5/>
       </sdata.Provider>
        
        </>
    )
}
export default Child4
export {sdata}