function Map(){
    let arr = ["manyaa",22,"sharma",898989898]
    let a=arr.map((e,index)=>{return <li key={index}>{e}</li>})
    let arr2=[
        {
        id:1,
        name:"manya",
        age:89
        },
        {
        id:2,
        name:"neha",
        age:109
        },
        {
        id:3,
         name:"hehehh",
            age:90
        }
    ]
return(
    <>
    {arr.map((e,index)=>{return <h1 key={index}>{e}</h1>})}
    <ul>
        <li>{a}</li>
    </ul>
    {arr2.map((e,index)=>)}
  
    </>
)

}
export default Map