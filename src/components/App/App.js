import { Routes, Route } from "react-router-dom";
import SignUpPopup from "../SignUpPopup/SignUpPopup";
import SignInPopup from "../SignInPopup/SignInPopup";
import MessagePopup from "../MessagePopup/MessagePopup";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import { useEffect, useState } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import mainApi from "../../utils/MainApi";
import * as auth from "../../utils/auth";
import SavedNews from "../SavedNews/SavedNews";

import "./App.css";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    userName: "",
    email: "",
    owner:""
  });
  const [isSignInPopupOpen, setIsSignInPopupOpen] = useState(false);
  const [isSignUpPopupOpen, setIsSignUpPopupOpen] = useState(false);
  const [isMsgPopupOpen, setIsMsgPopupOpen] = useState(false);
  const [articleData, setArticleData] = useState([]);
  const [articleDbData, setArticleDbData] = useState([]);
  const [search, setSearch] = useState("");

  const handleLogin = (email, name, owner) => {
    setLoggedIn(true);
    setCurrentUser({ email, userName: name, owner:owner });
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setCurrentUser({
      email: "",
      userName: "",
      owner:""
    });
    localStorage.removeItem("token");
    return true;
  };

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

  function getArticles(){
    loggedIn &&
      mainApi.getSavedArticles().then((articles) => {
        const userSavedArticles = articles.filter(article => article.owner === currentUser.owner);
        setArticleDbData(userSavedArticles);
      });
  }

  useEffect(() => {
    const jwt = localStorage.getItem("token");
    if (jwt) {
      auth
        .getUser(jwt)
        .then((res) => {
          setLoggedIn(true);
          setCurrentUser({userName:res.data.name, email:res.data.email, owner:res.data._id});
        })
        .catch(console.log);
    }
  }, []);

  useEffect(() => {
    getArticles()
  }, [loggedIn, currentUser.owner]);

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
    <CurrentUserContext.Provider value={currentUser}>
      <div className="app">
        <SignUpPopup
          isOpen={isSignUpPopupOpen}
          onClose={closeAllPopups}
          onSignUp={setIsMsgPopupOpen}
          openSignInPopup={setIsSignInPopupOpen}
        />
        <SignInPopup
          handleLogin={handleLogin}
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
                search={search}
                setSearch={setSearch}
                loggedIn={loggedIn}
                logout={handleLogout}
                setLoggedIn={setLoggedIn}
                setIsSignInPopupOpen={setIsSignInPopupOpen}
                anyPopUpOpen={anyPopUpOpen}
                setArticleData={setArticleData}
                articleData={articleData}
                articleDbData={articleDbData}
                getArticles={getArticles}
              />
            }
          />
          <Route
            path="/saved-news"
            element={
              <ProtectedRoute loggedIn={loggedIn}>
                <SavedNews
                  articleDbData={articleDbData}
                  setArticleDbData={setArticleDbData}
                  loggedIn={loggedIn}
                  setLoggedIn={setLoggedIn}
                  setIsSignInPopupOpen={setIsSignInPopupOpen}
                  anyPopUpOpen={anyPopUpOpen}
                  searchKey={search}
                  getArticles={getArticles}
                />
              </ProtectedRoute>
            }
          />
        </Routes>
        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
