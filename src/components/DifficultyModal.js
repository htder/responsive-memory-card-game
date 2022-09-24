import "./DifficultyModal.css";
function DifficultyModel(props) {
  return <div 
    className="modal d-block bg-light py-5"  role="dialog" id="modalSheet"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content rounded-4 shadow">
          <div className="modal-header border-bottom-0">
            <h5 className="modal-title">Select a Difficulty!</h5>
           <button 
              type="button" 
              className="btn-close" 
              data-bs-dismiss="modal" 
              aria-label="Close"
              onClick={() => props.setOpen(false)}
          ></button>
          </div>
          <div className="modal-footer flex-column border-top-0">
            <button
              type="button" 
              className="btn btn-lg btn-primary w-100 mx-0 mb-2"
              onClick={() => props.handleClick("easy")}>
            Easy
            </button>
            <button 
              type="button" 
              className="btn btn-lg btn-primary w-100 mx-0 mb-2"
              onClick={() => props.handleClick("medium")}>
            Medium
            </button>
            <button 
              type="button" 
              className="btn btn-lg btn-primary w-100 mx-0 mb-2"
              onClick={() => props.handleClick("hard")}>
            Hard
            </button>
            <button
              type="button" 
              className="btn btn-lg btn-light w-100 mx-0" 
              data-bs-dismiss="modal"
              onClick={() => props.setOpen(false)}
          >Close
            </button>
          </div>
        </div>
      </div>
    </div>
}

export default DifficultyModel;
