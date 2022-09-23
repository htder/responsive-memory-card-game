function Header() {
  return <div>
    <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
        <span className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">Header</span>
      <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li className="nav-item px-2">Current Score</li>
        <li className="nav-item px-2">High Score</li>
      </ul>
      <div className="text-end">
        <button type="button" className="btn btn-outline-primary me-2">Rules</button>
        <button type="button" className="btn btn-outline-primary me-2">Difficulty</button>
        <button type="button" className="btn btn-outline-primary me-2">Reset</button>

      </div>
    </header>
  </div>
}

export default Header;
