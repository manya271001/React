import { createContext } from "react"
import { data } from "./App"
import { cdata } from "./App"
import Child3 from "./Child3"
let newd=createContext()
let newData='everyonee!!!!!'
let name='manyaaa'
let age=88

function Child2(){
return(
    <>
    <cdata.Consumer>
        {
            (data)=>{
                return(
                    <h1>happy {data}</h1>
                )
            }
        }
    </cdata.Consumer>
    <newd.Provider value={{newData,name,age}}>
        <Child3/>
    </newd.Provider>
    </>
)

}
export default Child2
export {newd}