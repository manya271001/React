import { Link, Outlet } from "react-router-dom"
const Layout =()=>{
    return(
        <>
         {/* <section id="navbar">
            <nav>
                <ul style={{display:"flex",justifyContent:"center",alignItems:"center",listStyle:"none",textDecoration:"none",color:"black",gap:"100px"}}>
                    <li><Link to ='/'  style={{listStyle:"none",textDecoration:"none",color:"black"}}>HOME</Link></li>
                    <li><Link to ='/about'  style={{listStyle:"none",textDecoration:"none",color:"black"}}>ABOUT</Link></li>
                    <li><Link to ='/contact'  style={{listStyle:"none",textDecoration:"none",color:"black"}}>CONTACT </Link></li>
                    <li><Link to ='/service'  style={{listStyle:"none",textDecoration:"none",color:"black"}}>SERVICES </Link></li>
                    <li><Link to ='/product' style={{listStyle:"none",textDecoration:"none",color:"black"}}>PRODUCT </Link></li>
                    <li><Link to ='/article'  style={{listStyle:"none",textDecoration:"none",color:"black"}}>ARTICLE</Link></li>
                </ul>
            </nav> */}

            <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><Link to ='/'  style={{listStyle:"none",textDecoration:"none",color:"black"}}>Logo</Link></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#"><Link to ='/'  style={{listStyle:"none",textDecoration:"none",color:"black"}}>HOME</Link></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#"><Link to ='/about'  style={{listStyle:"none",textDecoration:"none",color:"black"}}>ABOUT</Link></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#"><Link to ='/contact'  style={{listStyle:"none",textDecoration:"none",color:"black"}}>CONTACT </Link></a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true"><Link to ='/service'  style={{listStyle:"none",textDecoration:"none",color:"black"}}>SERVICES </Link></a>
        </li>
         <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true"><Link to ='/product' style={{listStyle:"none",textDecoration:"none",color:"black"}}>PRODUCT </Link></a>
        </li>
         <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true"><Link to ='/article'  style={{listStyle:"none",textDecoration:"none",color:"black"}}>ARTICLE</Link></a>
        </li>
      </ul>
    </div>
  </div>
</nav>
            <hr />
        

         <main>
            <Outlet/>
         </main>
        <hr />
         <footer>
            <div id="main" style={{display:"flex"}}>
                <div style={{display:"flex",flexDirection:"column"}}>
                    <h3>About Us</h3>
                    <p>Lorem, ipsum dolor. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni delectus quod <br /> ipsa vero possimus, corporis <br /> similique consectetur voluptatem maxime quasi maiores tempore recusandae  <br />  tempora expedita quas et accusantium placeat aliquid sint. In commodi cumque non culpa maxime quas qui ex.</p>
                </div>
                <div style={{display:"flex",flexDirection:"column"}}>
                    <h3>Address</h3>
                    <p>Building 3 Lorem, ipsum dolor. <br /> Mumbai</p>
                </div>
                <div style={{display:"flex",flexDirection:"column"}}>
                    <h4>Services</h4>
                    <ul>
                        <li>Lorem, ipsum.</li>
                        <li>Lorem, ipsum.</li>
                        <li>Lorem, ipsum.</li>
                        <li>Lorem, ipsum.</li>
                    </ul>
                </div>
            </div>
         </footer>
        </>
    )
}
export default Layout