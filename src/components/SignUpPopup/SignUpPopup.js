import { useState, useRef } from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import "../SignInPopup/SignInPopup.css";
import "../SignUpPopup/SignUpPopup.css";
import * as auth from "../../utils/auth";
import validation from "../../utils/validate";

function SignUpPopup({ isOpen, onClose, onSignUp, openSignInPopup }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [submitErrorMsg, setSubmitErrorMsg] = useState("");
  let activeSubmit = false;
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [nameError, setNameError] = useState("");
  const inputEmail = useRef(null);
  const inputPassword = useRef(null);
  const inputName = useRef(null);
  if (
    email &&
    password &&
    name &&
    emailError === "" &&
    passwordError === "" &&
    nameError === ""
  ) {
    activeSubmit = true;
  }

  function onEmailChange(e) {
    const currentEmailInput = e.target.value;
    setEmail(currentEmailInput);
    if (
      currentEmailInput.length > 0 &&
      !validation(currentEmailInput, "email")
    ) {
      setEmailError("Provide a valid email address");
    } else if (
      (currentEmailInput.length > 0 &&
        validation(currentEmailInput, "password")) ||
      currentEmailInput.length === 0
    ) {
      setEmailError("");
    }
  }

  function onPasswordChange(e) {
    const currentPasswordInput = e.target.value;
    setPassword(currentPasswordInput);
    if (
      currentPasswordInput.length > 0 &&
      !validation(currentPasswordInput, "password")
    ) {
      setPasswordError("Password must consist of at least 8 characters");
    } else if (
      (currentPasswordInput.length > 0 &&
        validation(currentPasswordInput, "password")) ||
      currentPasswordInput.length === 0
    ) {
      setPasswordError("");
    }
  }

  function onNameChange(e) {
    const currentNameInput = e.target.value;
    setName(currentNameInput);
    if (currentNameInput.length > 0 && !validation(currentNameInput, "name")) {
      setNameError("Name must have at least 2 characters");
    } else if (
      (currentNameInput.length > 0 && validation(currentNameInput, "name")) ||
      currentNameInput.length === 0
    ) {
      setNameError("");
    }
  }

  function resetForm() {
    setEmail("");
    setPassword("");
    setName("");
  }

  function handleSubmit(e) {
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
      activeSubmit={activeSubmit}
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
        name="form__email"
        required
        minLength="3"
        value={email}
        onChange={onEmailChange}
        ref={inputEmail}
      />
      <p className="popup__form-error" id="inputEmail-error">
        {emailError}
      </p>

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
        value={password}
        onChange={onPasswordChange}
        ref={inputPassword}
      />
      <p className="popup__form-error" id="inputPassword-error">
        {passwordError}
      </p>

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
        value={name}
        onChange={onNameChange}
        ref={inputName}
      />
      <p className="popup__form-error" id="inputUsername-error">
        {nameError}
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
