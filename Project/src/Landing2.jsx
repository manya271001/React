import './Style.css'
import { Link, useNavigate } from 'react-router-dom'
function Landing2(){
    const navigate=useNavigate();
     function signup(){
     
      navigate('/signup')
    }
    function login(){
        navigate('/login')
    }
    return(
        <>
<div id="landing">
        <div id="left">
            <img src="landing.png" alt="" />
        </div>
        <div id="right">
            <h2>Stop buying, <br />start renting</h2>
            <p>Your online store with baby and children's <br /> products for a monthly rental fee. <br />Never buy and throw away again.</p>
            <div id="button">
        <button><Link to='signup'>SignUp</Link> </button>
        <button><Link to='login'>LogIn</Link></button>
    </div>
        </div>
    </div>

        </>
    )
}
export default Landing2