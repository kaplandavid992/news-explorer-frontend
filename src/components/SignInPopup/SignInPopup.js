import './SignInPopup.css';
import { useState } from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import * as auth from "../../utils/auth";

function SignInPopup({ isOpen, onClose, openSignUpPopup, handleLogin }) { //onSignin --add
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function onEmailChange(e) {
    setEmail(e.target.value);
  }

  function onPasswordChange(e) {
    setPassword(e.target.value);
  }

  function resetForm(){
    setEmail("");
    setPassword("");
  };


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
          auth.getUser(data.token).then((user)=>{
            const email = user.data.email;
            const name = user.data.name;
            const owner = user.data._id;
             handleLogin(email, name, owner);
          })
          resetForm();
          onClose();
          return data;
        }  
      })
      .catch((err) => {
        console.log(err);
      })
      // .finally(() => 
      // });
  }

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
   
      <label htmlFor="loginEmail" className="popup__form-label">Email</label>
        <input
          id="loginEmail"
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
      
      
      <label htmlFor="loginPassword" className="popup__form-label">Password</label>
        <input
          id="loginPassword"
          type="password"
          className="popup__form-input"
          placeholder="Enter password"
          name="form__password"
          required
          minLength="8"
          onChange={onPasswordChange}
        />
        <p className="popup__form-error" id="inputPassword-error" />
      
    </PopupWithForm>
  );
}

export default SignInPopup;