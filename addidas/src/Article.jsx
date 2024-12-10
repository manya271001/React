import './Article.css'
function Article(){
return(
    <>
    <div id="heading">
        <p>Read our Article</p>
        <h2>LATEST ARTICLE</h2>
    </div>
    <div id="articles">
        <div className="article">
            <img src="reader1.jpg" alt="" />
            <h6>13 March 2024</h6>
            <p>A home without book is a <br /> body without soul </p>
        </div>
         <div className="article">
            <img src="reader2.jpg" alt="" />
            <h6>13 March 2024</h6>
            <p>A home without book is a <br /> body without soul </p>
        </div>
         <div className="article">
            <img src="reader3.jpg" alt="" />
            <h6>13 March 2024</h6>
            <p>A home without book is a <br /> body without soul </p>
        </div>
    </div>

   
    </>
)
}
export default Article