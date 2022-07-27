import exitIcon from "../../images/exit_icon.svg";
import React from 'react';
import './PopupWithForm.css';
   
function PopupWithForm({
      isOpen,
      name,
      onClose,
      title,
      children,
      buttonText,
      onSubmit,
      openOtherSignPopup
    }) {
      const isOpenClass = isOpen ? "popup_active" : "";
      const submitBtnActiveClass = false ? 'popup__form-submit-btn_active' :''; // inputs valid
      const closeOpenOpenOtherSignPopup = () => {
        onClose();
        openOtherSignPopup(true);
      }

      return (
        <div className={`popup ${isOpenClass}`} id={name}>
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
            <form
              className="popup__form"
              name={name}
              noValidate
              onSubmit={onSubmit}
            >
              <h2 className="popup__form-header">{title}</h2>
              {children}
              <button
                className={`popup__form-submit-btn ${submitBtnActiveClass}`}
                type="submit"
                aria-label=""
              >
                {buttonText}
              </button>
              <div className="popup__bottom-text-wrapper">
              <span className="popup__bottom-text">or <a className="popup__bottom-text popup__bottom-text_link" 
              href='#' 
              onClick={closeOpenOpenOtherSignPopup}>
                Sign { buttonText.includes('up') ? 'in' : 'up'}</a>
              </span>
              </div>
            </form>
          </div>
        </div>
      );
    }
    
    export default PopupWithForm;
    