function Card(props) {
  return ( 
    <div 
      className="col mb-4"
      onClick={props.handleCardClick}
    >
      <div className="card">
        <div className="card-body" style={{backgroundColor: props.color}}>
          <p 
            className="hide-text"
            style={{color: props.color}}
          >{props.name}
          </p>
          <p
            className="hide-text"
            style={{color: props.color}}
          >{props.name}
          </p>
          <p 
            className="hide-text"
            style={{color: props.color}}
          >{props.name}
          </p>
        </div>
        <div className="card-body border-top">
          <p className="card-title text-center">{props.name}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
