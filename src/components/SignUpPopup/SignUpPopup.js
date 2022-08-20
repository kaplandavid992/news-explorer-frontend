import { useState, useRef } from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import "../SignInPopup/SignInPopup.css";
import "../SignUpPopup/SignUpPopup.css";
import * as auth from "../../utils/auth";
import { useFormAndValidation } from "../../hooks/useFormAndValidation";

function SignUpPopup({ isOpen, onClose, onSignUp, openSignInPopup }) {
  const { values, handleChange, errors, isValid, resetForm } =
    useFormAndValidation();

  const [submitErrorMsg, setSubmitErrorMsg] = useState("");
  const inputEmail = useRef(null);
  const inputPassword = useRef(null);
  const inputName = useRef(null);

  function handleSubmit(e) {
    const { password, email, name } = values;
    e.preventDefault();
    auth
      .register(password, email, name)
      .then(() => {
        onClose();
        onSignUp(true);
        resetForm();
      })
      .catch((err) => {
        if (err.message === "Error 409") {
          setSubmitErrorMsg("This email is not available");
        } else {
          setSubmitErrorMsg("Problem with the server try again");
        }
        const inputList = [];
        inputList.push(inputEmail.current);
        inputList.push(inputPassword.current);
        inputList.push(inputName.current);

        inputList.map((input) => {
          input.addEventListener("keypress", () => {
            setSubmitErrorMsg("");
          });
          return true;
        });
      });
  }

  return (
    <PopupWithForm
      activeSubmit={isValid}
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
        type="email"
        className="popup__form-input"
        placeholder="Enter email"
        name="email"
        required
        minLength="3"
        value={values.email}
        onChange={handleChange}
        ref={inputEmail}
      />
      <p className="popup__form-error" id="inputEmail-error">
        {errors.email}
      </p>

      <label htmlFor="signinPassword" className="popup__form-label">
        Password
      </label>
      <input
        id="signinPassword"
        type="password"
        className="popup__form-input"
        placeholder="Enter password"
        name="password"
        required
        minLength="8"
        value={values.password}
        onChange={handleChange}
        ref={inputPassword}
      />
      <p className="popup__form-error" id="inputPassword-error">
        {errors.password}
      </p>

      <label htmlFor="signinUsername" className="popup__form-label">
        Username
      </label>
      <input
        id="signinUsername"
        type="text"
        className="popup__form-input"
        placeholder="Enter your username"
        name="name"
        required
        minLength="2"
        value={values.name}
        onChange={handleChange}
        ref={inputName}
      />
      <p className="popup__form-error" id="inputUsername-error">
        {errors.name}
      </p>

      <p
        className="popup__form-error popup__error_email_not-avail"
        id="inputUsername-error"
      >
        {submitErrorMsg}
      </p>
    </PopupWithForm>
  );
}

export default SignUpPopup;
