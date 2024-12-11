import './Footer.css'
function Footer(){
return(
    <>
    <footer>
    <section id="footer">
        <div className='content'>
            <h1>Adress</h1>
            <p>A108 Adam Street <br />New York, NY 535022</p>
        </div>
        <div className='content'>
            <h1>Contact</h1>
            
            <p><span style={{fontWeight:"bolder"}}>Email</span>Neha@gmail.com</p>
            <p><span style={{fontWeight:"bolder"}}>Contact</span>09090909090</p>
        </div>
        <div className='content'>
            <h1>Opening Hours</h1>
               <p><span style={{fontWeight:"bolder"}}>Mon-Sat</span>11:00-23:00</p>
            <p><span style={{fontWeight:"bolder"}}>Sunday</span>CLOSE</p>
        </div>
    </section>
<hr />
    
        <p style={{textAlign:"center",color:"white"}}>© Copyright Yummy All Rights Reserved</p>
    </footer>
    </>
)
}
export default Footer