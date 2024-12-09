import './Hero.css'
import myimg from './assets/image.jpg'
import Event from './Event'
const Hero = () =>{
     function changecolor(){
        let p = document.querySelector("#para")
        p.style.color="red"
    }
    function changecolorAgain(){
         let p = document.querySelector("#para")
        p.style.color="black"
    }
    function scalez(){
        let i = document.querySelector("#img")
        i.style.transform=scale(1.3)
    }
    return(
        <>
        
        <section>
            {/* <img src="img.png" alt="" style={{height:"200px",width:"200px"}}/> */}
            <div id='right'>
            <img src={myimg} alt="" height="300px" width="100%" onMouseEnter={scalez} id='img'/>
            </div>
            <div id="left">
                <h2 className='heading'>ABOUT US</h2>
                <p onMouseEnter={changecolor} id="para" onMouseLeave={changecolorAgain}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem natus sequi, porro nam, labore pariatur alias aperiam optio blanditiis quibusdam, tenetur reprehenderit molestias iusto commodi officia. Iusto aliquam a sed?</p>
                <button>KNOW MORE</button>
            </div>
        </section>
    
        </>
    )
}
export default Hero 