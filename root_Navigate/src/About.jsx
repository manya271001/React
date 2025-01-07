import { useNavigate, useParams } from "react-router-dom"

function About(){
    let {name}=useParams()
    let nav=useNavigate()
    function contactChange(){
        nav('/contact')
    }
    return(
        <>
        <h2>ABOUT PAGEE</h2>
        <h2>{name}</h2>
        <button onClick={contactChange}>Contact us</button>
        </>
    )
}
export default About