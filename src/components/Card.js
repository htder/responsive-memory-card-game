function Card(props) {
  return ( 
    <div className="col mb-4">
      <div className="card">
        <div className="card-body">
          <p>color</p>
          <h5 className="card-title">{props.name}</h5>
        </div>
      </div>
    </div>
  );
}

export default Card;
