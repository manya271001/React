function Map(){
    let arr = ["manyaa",22,"sharma",898989898]
    let a=arr.map((e,index)=>{return <li key={index}>{e}</li>})
    let arr2=[
        {
        id:1,
        name:"manya",
        age:89,
        location:"bhopal"
        },
        {
        id:2,
        name:"neha",
        age:109,
        location:"bhopal"
        },
        {
        id:3,
         name:"anshita",
            age:90,
            location:"bhopal"
        }
    ]
    let arr2_obj=arr2.map((e)=>{return <h1>{e.name}-{e.age}-{e.location}</h1>})
   
return(
    <>
    {arr.map((e,index)=>{return <h1 key={index}>{e}</h1>})}
    <ul>
        <li>{a}</li>
    </ul>
    {arr2.map((e)=>{
   return <div key={e.id}>
        <h1 >{e.name}</h1>
    <h1>{e.age}</h1>
    <h1>{e.location}</h1>
    </div>
    })}
   <h2>{arr2_obj}</h2>
  
    </>
)

}
export default Map