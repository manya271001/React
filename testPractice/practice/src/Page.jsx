import { Link,Outlet } from "react-router-dom"

function Page(){
return(
    <>
 <nav>
    <ul style={{display:"flex",listStyle:"none",gap:"240px"}}>
        <li><Link to={'/home'} style={{color:"black",textDecoration:"none"}}>HOME</Link></li>
        <li><Link to={'/about'} style={{color:"black",textDecoration:"none"}}>ABOUT</Link></li>
        <li><Link to={'/contact'}style={{color:"black",textDecoration:"none"}}>CONTACT</Link></li>
    
    </ul>
 </nav>
<main>
    <Outlet/>
</main>
<footer>
    <h3>THIS IS FOOTER</h3>
</footer>
    </>
)

}
export default Page