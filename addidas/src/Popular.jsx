import './Popular.css'
function Popular(){
     const books=[
        {
            id:1,
            img:"/book8.jpg",
            name:"over the sirens",
            author:"Zelda Reese ",
            price:"$18"

        },
        {
            id:2,
            img:"/book9.jpg",
            name:"Purpose",
            author:"Samuel Wilkinson ",
            price:"$13.3"
        },
        {
            id:3,
            img:"/book10.jpg",
            name:"Beauty is your Destiny",
            author:"Philip Ryken ",
            price:"$13.3"
        },
        {
            id:4,
            img:"/book11.jpg",
            name:"Last Days In Plaka",
            author:"Henriette ",
            price:"$15"
        },
        {
            id:5,
            img:"/book12.jpg",
            name:"The Good Hawk",
            author:"Joseph Elliott ",
            price:"$18"
        },
        {
            id:5,
            img:"/book13.jpg",
            name:"The Good Hawk",
            author:"Joseph Elliott ",
            price:"$18"
        },
        {
            id:5,
            img:"/book14.jpg",
            name:"The Good Hawk",
            author:"Joseph Elliott ",
            price:"$18"
        },
        {
            id:5,
            img:"/book15.jpg",
            name:"The Good Hawk",
            author:"Joseph Elliott ",
            price:"$18"
        },
        {
            id:5,
            img:"/book16.jpg",
            name:"The Good Hawk",
            author:"Joseph Elliott ",
            price:"$18"
        },
        {
            id:5,
            img:"/book17.jpg",
            name:"The Good Hawk",
            author:"Joseph Elliott ",
            price:"$18"
        },
    ]
 
    return(
        <>
        <div id="heading">
            <p>Some quality items</p>
            <h3>Popular Books</h3>
        </div>
        <div id="category">
            <a href="#" id='blak' style={{ color: "black",textDecoration:"underline brown",fontWeight:"bold"}}>All Genre</a>
            <a href="#" className='all'>Business</a>
            <a href="#" className='all'>Technology</a>
            <a href="#"className='all'>Romantic</a>
            <a href="#"className='all'>Adventure</a>
        </div>
                <div id="cards" style={{ display: "flex", gap: "2rem", flexWrap: "wrap",marginTop:"150px" }}>
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

        <div id="newsLetter">
            <div id="left">
                <h2>Subscribe to <br /> our newsletter</h2>
            </div>
            <div id="right">
                <p>Sed eu feugiat amet, libero ipsum enim <br /> pharetra hac dolor sit amet, consectetur. Elit <br />adipiscing enim pharetra hac.</p>
                <input type="text" placeholder='Enter Email' />


            </div>
        </div>
        </>
    )
}
export default Popular