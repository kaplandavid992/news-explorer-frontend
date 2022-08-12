import SearchForm from "../SearchForm/SearchForm";
import About from "../About/About";
import Header from "../Header/Header";
import MainSearchResults from "../MainSearchResults/MainSearchResults";
import { useState } from "react";
import newsApi from "../../utils/NewsApi";
import "./Main.css";

function Main({ search, setSearch, loggedIn, setLoggedIn, setIsSignUpPopupOpen, anyPopUpOpen,
setArticleData, articleData, articleDbData, getArticles, setIsSignInPopupOpen
}) {
  const [searchStatus, setSearchStatus] = useState("");
 
  function handleSubmit(e,searchKey) {
    e.preventDefault();
    setSearchStatus('pending');
    newsApi.getNewsData(searchKey).then((data)=>{
      setArticleData(Array.from(data.articles));
      data.articles.length === 0  ? setSearchStatus('not found')
      : setSearchStatus('results');
    }).catch(console.log);
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
      <SearchForm handleSubmit={handleSubmit} search={search} setSearch={setSearch}/>
      <MainSearchResults 
        articleDbData={articleDbData}
        searchKey={search}
        loggedIn={loggedIn} 
        searchStatus={searchStatus} 
        articleData={articleData}
        getArticles={getArticles}
        setIsSignUpPopupOpen={setIsSignUpPopupOpen}
        />
      <About />
    </main>
  );
}

export default Main;
