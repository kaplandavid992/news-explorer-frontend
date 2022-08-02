import "./SavedNews.css";
import NewsCardList from "../NewsCardList/NewsCardList";
import Header from "../Header/Header";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import popularKeyWords from "../../utils/popularKeyWords";

function SavedNews({
  articleDbData,
  loggedIn,
  setLoggedIn,
  setIsSignInPopupOpen,
  anyPopUpOpen,
  searchKey,
}) {
  const currentUser = useContext(CurrentUserContext);
  const navigate = useNavigate();
  if (!loggedIn) {
    navigate("/");
  }
  const topKeyWordsDataString = popularKeyWords(articleDbData);

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
            <title className="saved-news__saved-art-title">
              Saved articles
            </title>
            <h2 className="saved-news__title">
              {currentUser.userName}, you have {articleDbData.length} saved
              articles
            </h2>
            <p className="saved-news__keywords-title">
              By keywords:
              <span className="saved-news__keywords-title saved-news__keywords-title_content_font-weight">
                {" "}
                {topKeyWordsDataString}
              </span>
            </p>
          </div>
        </section>
        <section className="news-list-wrapper">
          <NewsCardList
            articleData={articleDbData}
            searchKey={searchKey}
            loggedIn={loggedIn}
          />
        </section>
      </main>
    </>
  );
}

export default SavedNews;
