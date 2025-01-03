import { useContext } from "react"
import { newd } from "./Child2"
import Child6 from "./Child6"


function Child5(){
    let {name,age}=useContext(newd)
    return(
        <>
        <h1>my name is {name}</h1>
        <h1>my age is {age}</h1>
        <Child6/>

        </>
    )
}
export default Child5