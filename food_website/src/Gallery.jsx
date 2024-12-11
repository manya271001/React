import './Gallery.css'
function Gallery(){
return(
    <>
    <section id="gallery">
         <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",marginTop:"100px"}}>
        <h6 style={{color:"gray"}}>GALLERY</h6>
     <h1>CHECK OUR <span style={{color:"red",textDecoration:"underline"}}>GALLERY</span></h1>
     </div>
    
     <div style={{display:"flex",gap:"20px",marginTop:"50px"}} id='images'>
         <img src="g3.jpg" alt="" />
     <img src="g2.jpg" alt="" />
     <img src="g1.jpg" alt="" />
     <img src="g5.jpg" alt="" style={{border:"4px solid red"}} />
     <img src="g4.jpg" alt="" />
     <img src="g6.jpg" alt="" />
     </div>
    </section>
    </>
)

}
export default Gallery