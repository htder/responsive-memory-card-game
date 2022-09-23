import "./DifficultlyModal.css";
function DifficultlyModel(props) {
  return <div 
    onClick={() => props.setOpen(false)}
    className="modal d-block bg-light py-5"  role="dialog" id="modalSheet"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content rounded-4 shadow">
          <div className="modal-header border-bottom-0">
            <h5 className="modal-title">Modal title</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body py-0">
            <p>This is a modal sheet, a variation of the modal that docs itself to the bottom of the viewport like the newer share sheets in iOS.</p>
          </div>
          <div className="modal-footer flex-column border-top-0">
            <button type="button" className="btn btn-lg btn-primary w-100 mx-0 mb-2">Save changes</button>
            <button type="button" className="btn btn-lg btn-light w-100 mx-0" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
}

export default DifficultlyModel;
