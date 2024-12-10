import './Navbar.css'
const Navbar=()=>{
    return(
        <>
       <div id="firstnav">
        <h1 >BOOK <span style={{fontFamily:"monospace", fontStyle:"italic",fontWeight:"lighter"}} >SAW</span></h1>
        <nav>
            <ul>
                <li style={{color:"orange"}}>HOME</li>
                <li>PAGES</li>
                <li>FEATURED</li>
                <li>POPULAR</li>
                <li>OFFER</li>
                <li>ARTICLE</li>
            </ul>
        </nav>
       </div>
       <hr />
      
        </>
    );
}
export default Navbar