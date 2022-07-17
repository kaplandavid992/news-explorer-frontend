import "./SavedNews.css";
import ShowMoreBtn from "../ShowMoreBtn/ShowMoreBtn";
import NewsCardList from "../NewsCardList/NewsCardList";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import TitleH2 from "../TitleH2/TitleH2";

function SavedNews() {
  // prop {newsCards}
  return (
    <>
      <SavedNewsHeader />
      <div className="saved-news-wrapper">
        <div className="titles-container">
          <span className="saved-art-title">Saved articles</span>
          <TitleH2 text="Elise, you have 5 saved articles" />
          <p className="keywords-title">
            By keywords:
            <span className="keywords-title keywords-title_content">
              {" "}
              Nature, Yellowstone, and 2 other
            </span>
          </p>
        </div>
        <div className="news-list-wrapper">
        <NewsCardList />
        </div>
      </div>
    </>
  );
}

export default SavedNews;
