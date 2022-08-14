import "./SignInPopup.css";
import { useState } from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import * as auth from "../../utils/auth";
import validation from "../../utils/validate";

function SignInPopup({ isOpen, onClose, openSignUpPopup, handleLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let activeSubmit=false;
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  if(email && password && emailError ==="" && passwordError===""){
    activeSubmit=true;
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

  

  function resetForm() {
    setEmail("");
    setPassword("");
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) {
      return;
    }
    auth
      .authorize(password, email)
      .then((data) => {
        if (data) {
          localStorage.setItem("token", data.token);
          auth.getUser(data.token).then((user) => {
            const email = user.data.email;
            const name = user.data.name;
            const owner = user.data._id;
            handleLogin(email, name, owner);
          }).catch(console.log);
          resetForm();
          onClose();
          return data;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <PopupWithForm
      activeSubmit={activeSubmit}
      onSubmit={handleSubmit}
      isOpen={isOpen}
      onClose={onClose}
      title="Sign in"
      name="signin__form"
      buttonText="Sign in"
      openOtherSignPopup={openSignUpPopup}
    >
      <label htmlFor="loginEmail" className="popup__form-label">
        Email
      </label>
      <input
        id="loginEmail"
        type="email"
        className="popup__form-input"
        placeholder="Enter email"
        name="form__email"
        value={email}
        required
        minLength="3"
        onChange={onEmailChange}
      />
      <p className="popup__form-error" id="inputEma-error">
        {emailError}
      </p>

      <label htmlFor="loginPassword" className="popup__form-label">
        Password
      </label>
      <input
        id="loginPassword"
        type="password"
        className="popup__form-input"
        placeholder="Enter password"
        name="form__password"
        required
        minLength="8"
        value={password}
        onChange={onPasswordChange}
      />
      <p className="popup__form-error" id="inputPass-error">
        {passwordError}
      </p>
    </PopupWithForm>
  );
}

export default SignInPopup;
