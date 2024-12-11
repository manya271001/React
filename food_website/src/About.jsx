function About(){
return(
    <>
   <section id="about" style={{display:"flex",flexDirection:"column",marginTop:"100px",justifyContent:"center",alignItems:"center"}}>
     <h4 style={{color:"gray"}}>About Us</h4>
    <h1>LEARN MORE <span style={{color:"red",textDecoration:"underline orange"}}>ABOUT US</span></h1>
    <div id="content" style={{display:"flex" , gap:"130px"}}>
    <img src="about.png" alt="" style={{width:"600px",height:"400px"}}/>
    <div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem dolor impedit alias voluptatibus animi quis nihil soluta, vel similique tempora?</p> <br />
        <ul>
            <li><p style={{color:"gray"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, dolorum!</p> 
        </li>
        <li><p style={{color:"gray"}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat neque consequatur sint nesciunt officia. Voluptatum.</p> <br /></li>
        <li><p style={{color:"gray"}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet modi voluptatibus iste? Blanditiis, veritatis? Assumenda esse aliquid itaque totam iste, ab !</p></li>
        </ul>
    </div>

    </div>
    <img src="about2.png" alt="" style={{width:"1255px",marginTop:"50px"}}/>
   </section>
    </>
)
}
export default About