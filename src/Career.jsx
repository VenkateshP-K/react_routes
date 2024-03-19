

function Career() {
  return (
    <div className="container">
        <div className="row">
            <h3 style={{textAlign:"center"}}>Career</h3>
            <div className="col-4">
            <div className="card" style={{width:300}}>
            <img src="https://picsum.photos/200/300" className="card-img-top" alt="..."/>
            <div className="card-body">
            <h5 className="card-title">Full Stack Development</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Details</a>
            </div>
            </div>  
            </div>
            <div className="col-4">
            <div className="card" style={{width:300}}>
            <img src="https://picsum.photos/200/300" className="card-img-top" alt="..."/>
            <div className="card-body">
            <h5 className="card-title">Data Science</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Details</a>
            </div>
            </div>  
            </div>
            <div className="col-4">
            <div className="card" style={{width:300}}>
            <img src="https://picsum.photos/200/300" className="card-img-top" alt="..."/>
            <div className="card-body">
            <h5 className="card-title">Cyber Security</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Details</a>
            </div>
            </div>  
            </div>
        </div>
    </div>
  )
}

export default Career
