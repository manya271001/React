import { useContext } from "react"
import {sdata} from "./Child4"
let {city,course}=useContext(sdata)

function Child6(){
    
    return(
        <>
        <h1>I live in {city}</h1>
        <h1>I am here for {course} full stack course</h1>
        </>
    )
}
export default Child6