import "./SignInPopup.css";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import { useFormAndValidation } from "../../hooks/useFormAndValidation";

function SignInPopup({ isOpen, onClose, openSignUpPopup, authLogin }) {
  const { values, handleChange, errors, isValid, resetForm } =
    useFormAndValidation();

  function handleSubmit(e) {
    e.preventDefault();
    const { email, password } = values;
    if (!email || !password) {
      return;
    }
    authLogin(password, email, resetForm);
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
        onChange={handleChange}
      />
      <p className="popup__form-error" id="inputPass-error">
        {errors.password}
      </p>
    </PopupWithForm>
  );
}

export default SignInPopup;
