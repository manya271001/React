import './Containerr.css'
function Containerr(){
   
    return(
        <>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md- text-primary"><h2>Lorem, ipsum dolor Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto, deserunt?.</h2></div>
                    <div className="col-lg-6 text-danger"> <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, cumque!</h4></div>
                </div>
            </div>
            <div className="card" style={{width: "18rem"}}>
  <img src="img2.jpeg" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>

<div className="container " style={{marginBottom:"100px"}}>
    <h2 style={{textAlign:"center", marginTop:"100px"}}>Our Feature Tour</h2>
    <p className="text-center"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique corrupti vel debitis amet magni? Iure, maiores libero! Consequatur ratione harum perspiciatis est voluptate iste! Est error sunt aperiam et optio odio, perspiciatis ipsum? Debitis labore iusto nam autem illum cupiditate? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis aut sapiente libero deleniti necessitatibus cumque quidem sit ducimus dolorem perspiciatis.</p>
    <div className="row content" style={{justifyContent:"center",alignItems:"center"}}>
        <div className="col-lg-4">
                    <div className="card" style={{width: "18rem"}}>
  <img src="https://www.indiautentica.com/wp-content/uploads/2022/10/29ezcwtmtnm.jpg" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Kerla</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <div className="row ">
        <div className="col-lg-6">
        <h3>$856</h3> </div>
    <div className="col-lg-6"><a href="#" className="btn btn-primary">BOOK NOW</a></div> 
    
    </div>
  </div>
</div>

        </div>
        <div className="col-lg-4 ">
                    <div className="card" style={{width: "18rem"}}>
  <img src="https://plus.unsplash.com/premium_photo-1661962958462-9e52fda9954d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top" style={{height:"160px"}} alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Thailand</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <div className="row ">
        <div className="col-lg-6">
        <h3>$856</h3> </div>
    <div className="col-lg-6"><a href="#" className="btn btn-primary">BOOK NOW</a></div> 
    
    </div>
  </div>
</div>

        </div>
        <div className="col-lg-4">
                    <div className="card" style={{width: "18rem"}}>
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp_7vdEa6JsYbwArnhNuNsH-NlkCeI1Sh_2A&s" className="card-img-top" style={{height:"160px"}}  alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Canada</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <div className="row ">
        <div className="col-lg-6">
        <h3>$856</h3> </div>
    <div className="col-lg-6"><a href="#" className="btn btn-primary">BOOK NOW</a></div> 
    
    </div>
  </div>
</div>

        </div>
    </div>
</div>
        </>
    )

}
export  default Containerr