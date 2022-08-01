import SearchForm from "../SearchForm/SearchForm";
import About from "../About/About";
import Header from "../Header/Header";
import MainSearchResults from "../MainSearchResults/MainSearchResults";
import { useState } from "react";
import newsApi from "../../utils/NewsApi";
import "./Main.css";

function Main({ loggedIn, setLoggedIn, setIsSignInPopupOpen, anyPopUpOpen,
setArticleData, articleData
}) {
  const [searchStatus, setSearchStatus] = useState("");
  function handleSubmit(e,search) {
    e.preventDefault();
    setSearchStatus('pending');
    newsApi.getNewsData(search).then((data)=>{
      setArticleData(Array.from(data.articles));
      data.articles.length === 0  ? setSearchStatus('not found')
      : setSearchStatus('results');
    })
  }
  return (
    <main className="main">
      <Header
        loggedIn={loggedIn}
        setLoggedIn={setLoggedIn}
        theme="dark"
        setIsSignInPopupOpen={setIsSignInPopupOpen}
        anyPopUpOpen={anyPopUpOpen}
      />
      <SearchForm handleSubmit={handleSubmit}/>
      <MainSearchResults 
        loggedIn={loggedIn} 
        searchStatus={searchStatus} 
        articleData={articleData}/>
      <About />
    </main>
  );
}

export default Main;
