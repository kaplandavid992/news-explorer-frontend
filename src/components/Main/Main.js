import SearchForm from "../SearchForm/SearchForm";
import About from "../About/About";
import Header from "../Header/Header";
import MainSearchResults from "../MainSearchResults/MainSearchResults";
import "./Main.css";

function Main({ loggedIn, setLoggedIn, setIsSignInPopupOpen, anyPopUpOpen }) {
  return (
    <main className="main">
       <Header
        loggedIn={loggedIn}
        setLoggedIn={setLoggedIn}
        theme="dark"
        setIsSignInPopupOpen={setIsSignInPopupOpen}
        anyPopUpOpen={anyPopUpOpen}
      /> 
       <SearchForm /> 
      <MainSearchResults loggedIn={loggedIn}/> 
      <About />  
    </main>
  );
}

export default Main;
