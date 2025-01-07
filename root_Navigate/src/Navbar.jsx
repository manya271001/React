import { Link, Outlet } from "react-router-dom"

function Navbar(){
    return(
        <>
        <div>
            <ul style={{display:"flex",gap:"400px",listStyle:"none"}}>
             <li><Link to='/' style={{textDecoration:"none",listStyle:"none",color:"black"}}>HOME</Link></li>
             <li><Link to='about' style={{textDecoration:"none",listStyle:"none",color:"black"}}>ABOUT</Link></li>
            <li><Link to='contact'style={{textDecoration:"none",listStyle:"none",color:"black"}} >CONTACT</Link></li>
            </ul>
        </div>
        <main>
            <Outlet></Outlet>
        </main>
        </>
    )
}
export default Navbar