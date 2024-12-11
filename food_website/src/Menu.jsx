import './Menu.css'
function Menu(){
    const food=[
        {
            id:1,
            img:"/Butter Fried Chicken-modified.png",
            name:"Magnam Tiste",
            author:"Lorem, deren, trataro, filede, nerada ",
            price:"$18"

        },
        {
            id:2,
            img:"/chescake-modified.png",
            name:"Aut Luia",
            author:"Lorem, deren, trataro, filede, nerada",
            price:"$13.3"
        },
        {
            id:3,
            img:"/Roasted Beef-modified.png",
            name:"Est Eligendi",
            author:"Lorem, deren, trataro, filede, nerada",
            price:"$13.3"
        },
        {
            id:4,
            img:"/Seasonal Soup-modified.png",
            name:"Eos Luibusdam",
            author:"Lorem, deren, trataro, filede, nerada",
            price:"$15"
        },
        {
            id:5,
            img:"/Cornish - Mackerel.png",
            name:"Eos Luibusdam",
            author:"Lorem, deren, trataro, filede, nerada ",
            price:"$18"
        },
        {
            id:5,
            img:"/Seasonal Soup-modified.png",
            name:"Laboriosam Direva",
            author:"Lorem, deren, trataro, filede, nerada ",
            price:"$18"
        }
       ]
return(
    <>
     <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",marginTop:"100px"}}>
        <h6 style={{color:"gray"}}>OUR MENU</h6>
     <h1>CHECK OUR <span style={{color:"red",textDecoration:"underline"}}>YUMMY MENU</span></h1>
     </div>
<div id="category">
            <a href="#" id='blak' style={{ color: "black",textDecoration:"underline brown",fontWeight:"bold"}}>Starters</a>
            <a href="#" className='all'>Breakfasr</a>
            <a href="#" className='all'>Lunch</a>
            <a href="#"className='all'>Dinner</a>
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
                        style={{ height: "200px", width: "200px", objectFit: "cover" }}
                    />
                    <h3>{item.name}</h3>
                    <h4 style={{color:"gray"}}>{item.author}</h4>
                    <h5 style={{color:"red" , fontSize:"20px"}} >{item.price}</h5>
                </div>
            ))}
        </div>  


    </>
)
}
export default Menu