import "./RulesModal.css";
function RulesModal(props) {
  return <div 
    onClick={() => props.setOpen(false)}
    className="modal d-block bg-light py-5" role="dialog" id="modalSheet"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content rounded-4 shadow">
          <div className="modal-header border-bottom-0">
            <h5 className="modal-title">Rules</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body py-0">
            <ul>
              <li>Only click on each color once.</li>
              <li>If you have not already clicked on a color, you will gain a<br/>point and the colors will shuffle.</li>
              <li>If you have already clicked on a color, a new set of colors<br/>will be shown and your score will be reset.</li>
            </ul>
          </div>
          <div className="modal-footer flex-column border-top-0">
            <button type="button" className="btn btn-lg btn-light w-100 mx-0" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
}

export default RulesModal;
