import '../PopupWithForm/PopupWithForm.css';
import exitIcon from "../../images/exit_icon.svg";

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
            <span className="popup__bottom-text">
              <button
                className="popup__bottom-text popup__bottom-text_link
                popup__bottom-text_type_link"
                onClick={closeCurrentOpenSignInPopup}
              >
                Sign in
              </button>
            </span>
          </div>
        </div>
      </div>
  );
}

export default MessagePopup;
