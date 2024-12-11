import './Navbar.css'
function Navbar(){
    return(
        <>
              <div id="firstnav">
        <h1 ><span style={{color:"red"}} >Yummy</span></h1>
        <nav>
            <ul>
                <li style={{color:"black", textDecoration:"underline red"}}>HOME</li>
                <li>ABOUT</li>
                <li>MENU</li>
                <li>CHEF</li>
                <li>GALLERY</li>
                <li>CONTACT</li>
            </ul>
        </nav>
       </div>
       <hr />
        </>
    )
}
export default Navbar