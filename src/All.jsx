import Home from "./Home"

function All({item}) {
  return (
    <div className="col-3">
        <div className="card" style={{width:200}}>
        <img src="https://picsum.photos/200/300" className="card-img-top" alt="..."/>
        <div className="card-body">
        <h5 className="card-title">{item.Course}</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" className="btn btn-primary">Know More</a>
        </div>
       </div>  
    </div>
  )
}

export default All
