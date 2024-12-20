import { useState } from 'react'
function Show(){
    let [h,setH]=useState(false)

    let p=''
        if(h){
            p=<h1>TIME IS NOW</h1>
            
        }
        else{
            p=''
        }
    
    return(
        <>
          <button onClick={()=>setH(!h)}>SHOW/HIDE</button>
          {/* <button onClick={()=>setH(false)}>HIDE</button> */}
        {p}
        </>
    )

}
export default Show