import './Footer.css'
function Footer(){
    return(
        <>
        <footer>
            <div id="first">
             <h1 >BOOK <span style={{fontFamily:"monospace", fontStyle:"italic",fontWeight:"lighter"}} >SAW</span></h1>
             <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius <br /> doloribus repudiandae cupiditate, magni consequuntur natus  <br />laborum libero! Quaerat asperiores aliquam explicabo. Aut corrupti dolor nulla voluptatibus?  <br />Ratione animi, et mollitia debitis reprehenderit 
             </p>
             </div>
             <div id="second">
                <h2>About Us</h2>
                <a href="#">Vision</a>
                <a href="#">Articles</a>
                <a href="#">careers</a>
                <a href="#">service items</a>
                <a href="#">donate</a>
             </div>
             <div id="third">
                <h2>Discover</h2>
                <a href="#">Home</a>
                <a href="#">Books</a>
                <a href="#">Author</a>
                <a href="#">Subject</a>
                <a href="#">Adavanced Search</a>
             </div>
             <div id="fourth">
                <h2>MY Account</h2>
                <a href="#">Sign In</a>
                <a href="#">View Cart</a>
                <a href="#">Track my order</a>
             </div>

        </footer>
        <footer style={{height:"40px" , marginTop:"0px"}}>
            <p style={{ color:"gray"}}>© 2024 All rights reserved.</p>
        </footer>
        </>
    )

}
export default Footer 