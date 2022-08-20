import "./SignInPopup.css";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import * as auth from "../../utils/auth";
import { useFormAndValidation } from "../../hooks/useFormAndValidation";

function SignInPopup({ isOpen, onClose, openSignUpPopup, handleLogin }) {
  const { values, handleChange, errors, isValid, resetForm } =
    useFormAndValidation();

  function handleSubmit(e) {
    e.preventDefault();
    const { email, password } = values;
    if (!email || !password) {
      return;
    }
    auth
      .authorize(password, email)
      .then((data) => {
        if (data) {
          localStorage.setItem("token", data.token);
          auth
            .getUser(data.token)
            .then((user) => {
              const email = user.data.email;
              const name = user.data.name;
              const owner = user.data._id;
              handleLogin(email, name, owner);
            })
            .catch(console.log);
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
      activeSubmit={isValid}
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
        name="email"
        value={values.email}
        required
        minLength="3"
        onChange={handleChange}
      />
      <p className="popup__form-error" id="inputEma-error">
        {errors.email}
      </p>

      <label htmlFor="loginPassword" className="popup__form-label">
        Password
      </label>
      <input
        id="loginPassword"
        type="password"
        className="popup__form-input"
        placeholder="Enter password"
        name="password"
        required
        minLength="8"
        value={values.password}
        onChange={handleChange}
      />
      <p className="popup__form-error" id="inputPass-error">
        {errors.password}
      </p>
    </PopupWithForm>
  );
}

export default SignInPopup;
