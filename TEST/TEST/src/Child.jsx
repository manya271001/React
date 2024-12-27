function Child({data}){
    let {name,age}=data
    return(
        <>
        <div style={{display:"flex", flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
            <h2>name:{name}</h2>
        <h2>age:{age}</h2>
        </div>

        </>
    )
}
export default Child