import SearchForm from "../SearchForm/SearchForm";
import About from "../About/About";
import Header from "../Header/Header";
import MainSearchResults from "../MainSearchResults/MainSearchResults";
import "./Main.css";

function Main({ loggedIn, setLoggedIn, setIsSignInPopupOpen, anyPopUpOpen }) {
  return (
    <section className="main">
       {/* <Header
        loggedIn={loggedIn}
        setLoggedIn={setLoggedIn}
        theme="dark"
        setIsSignInPopupOpen={setIsSignInPopupOpen}
        anyPopUpOpen={anyPopUpOpen}
      /> 
       <SearchForm /> */}
      {/* <MainSearchResults />  */}
      <About />  
    </section>
  );
}

export default Main;
