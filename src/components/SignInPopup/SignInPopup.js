import './SignInPopup.css';
import { useState } from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
// import { CurrentUserContext } from "../contexts/CurrentUserContext.js";

function SignInPopup({ isOpen, onClose, onSignIn, openSignUpPopup }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
//   const currentUser = useContext(CurrentUserContext);

  function onEmailChange(e) {
    setEmail(e.target.value);
  }

  function onPasswordChange(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSignIn({
      email,
      password
    });
  }

//   useEffect(() => {
//     setEmail(currentUser.email);
//     setPassword(currentUser.password);
//     setUsername(currentUser.username);
//   }, [currentUser]);

  return (
    <PopupWithForm
      onSubmit={handleSubmit}
      isOpen={isOpen}
      onClose={onClose}
      title="Sign in"
      name="signin__form"
      buttonText="Sign in"
      openOtherSignPopup={openSignUpPopup}
    >
   
      <label for="email" className="popup__form-label">Email</label>
        <input
          id="email"
          type="text"
          className="popup__form-input"
          placeholder="Enter email"
          name="form__email"
          defaultValue={null}
          required
          minLength="3"
          onChange={onEmailChange}
        />
        <p className="popup__form-errorMsg" id="inputEmail-error" />
      
      
      <label for="password" className="popup__form-label">Password</label>
        <input
          id="password"
          type="password"
          className="popup__form-input"
          placeholder="Enter password"
          name="form__password"
          required
          minLength="8"
          onChange={onPasswordChange}
        />
        <p className="popup__form-errorMsg" id="inputPassword-error" />
      
    </PopupWithForm>
  );
}

export default SignInPopup;