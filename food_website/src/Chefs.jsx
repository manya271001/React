import './Chefs.css'
function Chef(){
    const food=[
        {
            id:1,
            img:"/chef1.jpg",
            name:"Walter White",
            author:"Master Chef ",
            price:"Velit aut quia fugit et et. Dolorum voluptate."

        },
        {
            id:2,
            img:"/chef2.jpg",
            name:"Kim Tae-Oh",
            author:"master chef ",
            price:"Velit aut quia fugit et et. Dolorum  voluptate."
        },
        {
            id:3,
            img:"/chef3.jpg",
            name:"Daniela Shakh",
            author:"master chef",
            price:"Velit aut quia fugit et et. Dolorum  voluptate."
        }
       ]
    return(
        <>
         <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",marginTop:"100px"}}>
        <h6 style={{color:"gray"}}>OUR CHEFS</h6>
     <h1>MEET OUR TALENTED<span style={{color:"red",textDecoration:"underline"}}>CHEFS</span></h1>
     </div>

                <div id="cards" style={{ display: "grid", gap: "20px", gridTemplateColumns:"1fr 1fr 1fr",marginTop:"150px" }}>
            {food.map((item) => (
                <div
                    key={item.id}
                    className="card"
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: "10px",
                    
                    }}
                >
                    <img
                        src={item.img}
                        alt={item.name}
                        style={{ height: "400px", width: "300px", objectFit: "cover" }}
                    />
                    <h3>{item.name}</h3>
                    <h4 style={{color:"gray"}}>{item.author}</h4>
                    <h5 style={{textAlign:"center"}}>{item.price}</h5>
                </div>
            ))}
        </div>  
        </>
    )
}
export default Chef 