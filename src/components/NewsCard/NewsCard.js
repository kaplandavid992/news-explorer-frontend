import "./NewsCard.css";
import MediaSource from "../MediaSource/MediaSource";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import mainApi from "../../utils/MainApi";

function NewsCard({
  articleDbData,
  articleData,
  setArticleDbData,
  loggedIn,
  date,
  titleText,
  paragraphText,
  mediaSourceName,
  category,
  imgSrc,
  articleUrl,
  uniqueVal,
  getArticles,
  setIsSignUpPopupOpen,
}) {
  let location = useLocation();
  const uri = location.pathname;
  const [saveIconSelected, setSaveIconSelected] = useState("");
  const filteredText = paragraphText.split("[+").shift();
  function getCardId(updatedArticleData) {
    const itemMatched = updatedArticleData.find(
      (newsCard) => newsCard.title === titleText
    );
    return itemMatched._id;
  }

  const loader = (e) => {
    e.target.classList.add("news-card__save-icon_loading");
  };

  const removeLoader = (e) => {
    e.target.classList.remove("news-card__save-icon_loading");
  };

  function handleSaveCard(e) {
    e.stopPropagation();
    
    if (!loggedIn) {
      setIsSignUpPopupOpen(true);
      return;
    }
    loader(e);
    if (!saveIconSelected) {
      const obj = {
        keyword: category,
        title: titleText,
        text: paragraphText,
        date: date,
        source: mediaSourceName,
        link: articleUrl,
        image: imgSrc,
      };

      mainApi
        .saveArticle(obj)
        .then(() => {
          removeLoader(e);
          setSaveIconSelected("news-card__save-icon_selected");
          getArticles();
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      mainApi
        .getSavedArticles()
        .then((updatedArticles) => {
          const newsCardId = getCardId(updatedArticles);
          mainApi
            .deleteArticle(newsCardId)
            .then(() => {
              removeLoader(e);
              setSaveIconSelected("");
              getArticles();
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  function handleDeleteArticle(e) {
    e.stopPropagation();
    loader(e);
    mainApi
      .deleteArticle(uniqueVal)
      .then(() => {
        setArticleDbData(
          articleData.filter((article) => article._id !== uniqueVal)
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    if (uri === "/" && loggedIn) {
      if (articleDbData.some((newsCard) => newsCard.title === titleText)) {
        setSaveIconSelected("news-card__save-icon_selected");
      }
    }
  }, [articleDbData, loggedIn, titleText, uri]);

  return (
    <li
      className="news-card"
      onClick={() => {
        window.location = articleUrl;
      }}
    >
      {uri === "/saved-news" ? (
        <>
          <span className="news-card__category">{category}</span>
          <i
            className="news-card__trash-icon news-card__white-container"
            onClick={handleDeleteArticle}
          />
          <span className="news-card__hover-info news-card__hover-info-trash">
            Remove from saved
          </span>
        </>
      ) : (
        <>
          <i
            className={`news-card__save-icon  news-card__white-container ${saveIconSelected}`}
            onClick={handleSaveCard}
          />
          {!loggedIn ? (
            <span className="news-card__hover-info news-card__hover-info-save">
              Sign in to save articles
            </span>
          ) : null}
        </>
      )}

      <img
        className="news-card__img"
        src={imgSrc}
        alt="related article visual"
      />
      <article className="news-card__text-block">
        <time className="news-card__date">{date}</time>
        <h3 className="news-card__title">{titleText}</h3>
        <p className="news-card__paragraph">{filteredText}</p>
        <MediaSource name={mediaSourceName} />
      </article>
    </li>
  );
}

export default NewsCard;
