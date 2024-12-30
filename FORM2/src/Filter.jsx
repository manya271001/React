function Filter(){
    let arr=[23,89,100,2,3,4,5,0,87,7878];
    let output=arr.filter((e)=>{return e%2==0})
    
    return(
        <>
    <ul>
        {
            output.map((e,index)=>{return <li key={index}>{e}</li>})
        }
    </ul>
        </>
    )
}
export default Filter