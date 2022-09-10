import "../styles/ErrorModal.css";
import "../styles/Button.css";

const ErrorModal = (props) => {

  return (
    <div onClick={props.checkClick} className="modal-position">
      <div className="modal-header">{props.errorTitle}</div>
      <div className="modal">
        {props.errorDescription}
        <br />
        <br />
        <button>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default ErrorModal;
