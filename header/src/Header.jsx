const Head=()=>{
    
    return(
        <>
        <section id="header">
        <nav style={{display:"flex", alignItems:"center",justifyContent:"center"}}>
            <h2>LoGo</h2>
            <ul style={{display:"flex",flexDirection:"row",listStyle:"none",gap:"50px"}}>
                <li >Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
        </section>
        </>
    )
}
export default Head