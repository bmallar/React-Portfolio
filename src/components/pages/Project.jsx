

function Project(props){
    return(
        <div>
    <div className="card" style={{width: "18rem"}}>
   <img src={props.image} className="card-img-top" alt="..."/>
  < div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.description}</p>
    <a href={props.github} className="btn btn-primary">Github Repo</a>
    <a href={props.liveUrl} className="btn btn-primary">Live App</a>
  </div>
    </div>
        </div>
    )
}

export default Project