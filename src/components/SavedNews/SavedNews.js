import "./SavedNews.css";
import NewsCardList from "../NewsCardList/NewsCardList";
import Header from "../Header/Header";
import { useNavigate } from "react-router-dom";

function SavedNews({ articleDbData ,loggedIn, setLoggedIn, setIsSignInPopupOpen, anyPopUpOpen,
searchKey }) {
  const navigate = useNavigate();
   if(!loggedIn){navigate('/') };
   
   return (
    <>
       <Header
        loggedIn={loggedIn}
        setLoggedIn={setLoggedIn} 
        theme="light"
        setIsSignInPopupOpen={setIsSignInPopupOpen}
        anyPopUpOpen={anyPopUpOpen}
      /> 
      <main>
       <section className="saved-news">
        <div className="saved-news__titles">
          <title className="saved-news__saved-art-title">Saved articles</title>
          <h2 className="saved-news__title">Elise, you have 5 saved articles</h2>
           <p className="saved-news__keywords-title">
            By keywords:
            <span className="saved-news__keywords-title saved-news__keywords-title_content_font-weight">
              {" "}
              Nature, Yellowstone, and 2 other
            </span>
          </p> 
        </div>
      </section>
      <section className="news-list-wrapper">
         <NewsCardList articleData={articleDbData} searchKey={searchKey} loggedIn={loggedIn} /> 
      </section>  
      </main>
    </>
  );
}

export default SavedNews;
