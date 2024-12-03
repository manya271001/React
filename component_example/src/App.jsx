import './App.css'
import Nav from './Navbar'
function App(){
  let st={
    backgroundColor:"black",
    color:"white"
  }
  return(
    <>
    <Nav/>
    <h1 style={{backgroundColor:"blanchedalmond",color:"burlywood"}}>welcome to react</h1>
    <h2 style={st}>Lorem ipsum dolor sit.</h2>
    <h1 className="head1">lets start</h1>
    </>
  )
}

export default App
