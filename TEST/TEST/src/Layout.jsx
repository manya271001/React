import { Link, Outlet } from "react-router-dom"
function Layout(){
    return(
        <>
            <nav style={{display:"flex", gap:"200px"}}>
                <ul style={{listStyle:"none" , display:"flex",gap:"400px"}}>
                    <li><Link to="/counter" style={{color:"black",textDecoration:"none"}}>COUNTER</Link></li>
                    <li><Link to="/child" style={{color:"black",textDecoration:"none"}}>CHILD</Link></li>
                </ul>
            </nav>
            <main>
                <Outlet/>
            </main>

        </>
    )
}
export default Layout