import { useState } from 'react'
function Show2(){
     let [h,setH]=useState(false)
    return(
        <>
        <button onClick={()=>setH(!h)}>{(h)? "HIDE":"DISPLAY"}</button>
        {/* using inline condition */}
        {(h) ? <h2>sucess</h2> : ""}
        </>
    )

}
export default Show2