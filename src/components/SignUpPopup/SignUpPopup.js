import { useState } from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import "../SignInPopup/SignInPopup.css";
import "../SignUpPopup/SignUpPopup.css";
import * as auth from "../../utils/auth";

function SignUpPopup({ isOpen, onClose, onSignUp, openSignInPopup }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  
  function onEmailChange(e) {
    setEmail(e.target.value);
  }

  function onPasswordChange(e) {
    setPassword(e.target.value);
  }

  function onNameChange(e) {
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    auth
      .register(password, email, name)
      .then(()=>{
        onClose();
        onSignUp(true);
      })
      .catch((err) => {
        console.log(err);
      })
      // .finally(() => {
      //   console.log('f');
      // });
  }

  return (
    <PopupWithForm
      onSubmit={handleSubmit}
      isOpen={isOpen}
      onClose={onClose}
      title="Sign up"
      name="signup__form"
      buttonText="Sign up"
      openOtherSignPopup={openSignInPopup}
    >
      <label htmlFor="signinEmail" className="popup__form-label">
        Email
      </label>
      <input
        id="signinEmail"
        type="text"
        className="popup__form-input"
        placeholder="Enter email"
        name="form__email"
        defaultValue={null}
        required
        minLength="3"
        onChange={onEmailChange}
      />
      <p className="popup__form-error" id="inputEmail-error" />

      <label htmlFor="signinPassword" className="popup__form-label">
        Password
      </label>
      <input
        id="signinPassword"
        type="password"
        className="popup__form-input"
        placeholder="Enter password"
        name="form__password"
        required
        minLength="8"
        onChange={onPasswordChange}
      />
      <p className="popup__form-error" id="inputPassword-error" />

      <label htmlFor="signinUsername" className="popup__form-label">
        Username
      </label>
      <input
        id="signinUsername"
        type="text"
        className="popup__form-input"
        placeholder="Enter your username"
        name="form__username"
        required
        minLength="2"
        onChange={onNameChange}
      />
      <p className="popup__form-error" id="inputUsername-error" />

      <p
        className="popup__form-error popup__error_email_not-avail"
        id="inputUsername-error"
      >
        This email is not available
      </p>
    </PopupWithForm>
  );
}

export default SignUpPopup;
