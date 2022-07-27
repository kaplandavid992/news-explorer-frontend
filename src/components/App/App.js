import { Routes, Route } from "react-router-dom";
import SignUpPopup from "../SignUpPopup/SignUpPopup";
import SignInPopup from "../SignInPopup/SignInPopup";
import MessagePopup from "../MessagePopup/MessagePopup";
import { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import SavedNews from "../SavedNews/SavedNews";
import "./App.css";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [isSignInPopupOpen, setIsSignInPopupOpen] = useState(false);
  const [isSignUpPopupOpen, setIsSignUpPopupOpen] = useState(false);
  const [isMsgPopupOpen, setIsMsgPopupOpen] = useState(false);

  function anyPopUpOpen() {
    const popups = [isSignInPopupOpen, isSignUpPopupOpen, isMsgPopupOpen];
    const areOpen = (element) => element;
    return popups.some(areOpen) ? true : false;
  }

  function closeAllPopups() {
    setIsSignInPopupOpen(false);
    setIsSignUpPopupOpen(false);
    setIsMsgPopupOpen(false);
  }

  useEffect(() => {
    const exitEsc = (e) => {
      const keyEsc = e.key === "Escape";
      if (keyEsc) {
        closeAllPopups();
      }
    };
    document.addEventListener("keydown", exitEsc);
    return () => document.removeEventListener("keydown", exitEsc);
  }, []);

  useEffect(() => {
    const exitClickOutSideModal = (e) => {
      if (e.target.classList.contains("popup_active")) {
        closeAllPopups();
      }
    };
    document.addEventListener("click", exitClickOutSideModal);
    return () => document.removeEventListener("click", exitClickOutSideModal);
  }, []);
  return (
    <div className="App">
       <SignUpPopup
        isOpen={isSignUpPopupOpen}
        onClose={closeAllPopups}
        onSignUp={setIsMsgPopupOpen}
        openSignInPopup={setIsSignInPopupOpen}
      />
      <SignInPopup
        isOpen={isSignInPopupOpen}
        onClose={closeAllPopups}
        onSignIn={null}
        openSignUpPopup={setIsSignUpPopupOpen}
      />
      <MessagePopup
        isOpen={isMsgPopupOpen}
        onClose={closeAllPopups}
        title="Registration successfully completed!"
        openSignInPopup={setIsSignInPopupOpen}
      />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Main
              loggedIn={loggedIn}
              setLoggedIn={setLoggedIn}
              setIsSignInPopupOpen={setIsSignInPopupOpen}
              anyPopUpOpen={anyPopUpOpen}
            />
          }
        />
        <Route
          exact
          path="/saved-news"
          element={
            <SavedNews
              loggedIn={loggedIn}
              setLoggedIn={setLoggedIn}
              setIsSignInPopupOpen={setIsSignInPopupOpen}
              anyPopUpOpen={anyPopUpOpen}
            />
          }
        />
      </Routes>
      <Footer />  
    </div>
  );
}

export default App;
