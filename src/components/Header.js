function Header(props) {
  return (
    <div>
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
          <span className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">Header</span>
        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li 
            className="nav-item px-2">
            Score: {props.currentScore}
          </li>
          <li 
            className="nav-item px-2">
            High Score: {props.highScore}
          </li>
        </ul>
        <div className="text-end">
          <button 
            type="button" 
            onClick={() => props.rulesOpen(true)}
            className="btn btn-outline-primary me-2">
            Rules
          </button>
          <button 
            type="button"
            onClick={() => props.difficultyOpen(true)}
            className="btn btn-outline-primary me-2">
            Change Difficulty
          </button>
          <button
            type="button"
            className="btn btn-outline-primary me-2"
            onClick={props.playAgain}
          >Reset
          </button>
        </div>
      </header>
    </div>
  );
}

export default Header;
