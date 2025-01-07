import { useNavigate, useParams } from "react-router-dom"

function About(){
    let {name,age}=useParams()
    let nav=useNavigate()
    function contactChange(){
        nav('/contact')
    }
    return(
        <>
        <h2>ABOUT PAGEE</h2>
        <h2>my name is {name} and my age is {age}</h2>
        <button onClick={contactChange}>Contact us</button>
        </>
    )
}
export default About