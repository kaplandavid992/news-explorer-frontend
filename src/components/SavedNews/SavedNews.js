import "./SavedNews.css";
import NewsCardList from "../NewsCardList/NewsCardList";
import Header from "../Header/Header";
import { useNavigate } from "react-router-dom";

function SavedNews({ loggedIn, setLoggedIn, setIsSignInPopupOpen, anyPopUpOpen }) {
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
       <section className="saved-news">
        <div className="saved-news__titles">
          <span className="saved-news__saved-art-title">Saved articles</span>
          <h2 className="saved-news__h2title">Elise, you have 5 saved articles</h2>
           <p className="saved-news__keywords-title">
            By keywords:
            <span className="saved-news__keywords-title saved-news__keywords-title_content">
              {" "}
              Nature, Yellowstone, and 2 other
            </span>
          </p> 
        </div>
      </section>
      <section className="news-list-wrapper">
        <NewsCardList />
      </section>  
    </>
  );
}

export default SavedNews;
