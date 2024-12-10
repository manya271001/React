import "./Featured.css"
function Featured(){
    const books=[
        {
            id:1,
            img:"/book2.jpg",
            name:"over the sirens",
            author:"Zelda Reese ",
            price:"$18"

        },
        {
            id:2,
            img:"/book3.jpg",
            name:"Purpose",
            author:"Samuel Wilkinson ",
            price:"$13.3"
        },
        {
            id:3,
            img:"/book4.jpg",
            name:"Beauty is your Destiny",
            author:"Philip Ryken ",
            price:"$13.3"
        },
        {
            id:4,
            img:"/book5.jpg",
            name:"Last Days In Plaka",
            author:"Henriette ",
            price:"$15"
        },
        {
            id:5,
            img:"/book6.jpg",
            name:"The Good Hawk",
            author:"Joseph Elliott ",
            price:"$18"
        }
    ]
 
    return(
        <>
        <p style={{color:"gray",textAlign:"center", marginTop:"100px"}}>Some quality items</p>
        <h3 style={{textAlign:"center",fontSize:"50px"}}>Featured Books</h3>

        <div id="cards" style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
            {books.map((item) => (
                <div
                    key={item.id}
                    className="card"
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        border: "1px solid #ccc",
                        padding: "10px",
                        borderRadius: "8px"
                    }}
                >
                    <img
                        src={item.img}
                        alt={item.name}
                        style={{ height: "300px", width: "200px", objectFit: "cover" }}
                    />
                    <h3>{item.name}</h3>
                    <h4>{item.author}</h4>
                    <h5>{item.price}</h5>
                </div>
            ))}
        </div>  

        <div id="best" >
            <div id="left">
                <img src="bestselling.png" alt="" />
            </div>
            <div id="right">
                <h2>Best Selling Book</h2>

                <h6>BY Timbur Hood</h6>
               <h3>Birds gonna be happy</h3>
               <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam consequatur placeat voluptatem quam.</p>
               <h5>$14.87</h5>
            
            </div>
            </div>      
        </>
    )
}
export default Featured