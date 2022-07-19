import '../PopupWithForm/PopupWithForm.css';
import "./MessagePopup.css";
import exitIcon from "../../images/exit_icon.png";

function MessagePopup({ isOpen, onClose, openSignInPopup, title }) {
  const isOpenClass = isOpen ? "popup_active" : "";
  const closeCurrentOpenSignInPopup = () => {
    onClose();
    openSignInPopup(true);
  };

  return (
    <div className={`popup ${isOpenClass}`}>
      <div className="popup__window">
        <button
          className="popup__exit-btn"
          type="reset"
          aria-label=""
          onClick={onClose}
        >
          <img
            className="popup__exit-icon"
            src={exitIcon}
            alt="exit icon button"
          />
        </button>
        <div className="popup__form">
          <h2 className="popup__form-header">{title}</h2>
          <div className="bottom-text-wrapper_left">
            <span className="bottom-text">
              <a
                className="bottom-text bottom-text_link"
                href="#"
                onClick={closeCurrentOpenSignInPopup}
              >
                Sign in
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MessagePopup;
