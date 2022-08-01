import "./NewsCard.css";
import MediaSource from "../MediaSource/MediaSource";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import mainApi from "../../utils/MainApi";

function NewsCard({
  loggedIn,
  date,
  titleText,
  paragraphText,
  mediaSourceName,
  category,
  imgSrc,
  articleUrl,
  key
}) {
  let location = useLocation();
  const uri = location.pathname;
  const [saveIconSelected, setSaveIconSelected] = useState("");
  const handleSaveCard = (e) => {
    e.stopPropagation();
    // const obj={
    //   keyword: category,
    //   title: titleText,
    //   text: paragraphText,
    //   date: date,
    //   source: mediaSourceName,
    //   link: articleUrl,
    //   image: imgSrc,
    // }
    // mainApi.saveArticle(obj).then(()=>{});
     setSaveIconSelected("news-card__save-icon_selected");
    alert("dlicked");
  };
  
  const handleDeleteCard = () => {
    alert("delete clicked");
  };
  return (
    <li className="news-card" onClick={(() => { window.location = articleUrl; })} key={key}>
      {uri === "/saved-news" ? (
        <>
           <span className="news-card__category">{category}</span> 
          <i
            className="news-card__trash-icon news-card__white-container"
            onClick={handleDeleteCard}
          />
          <span className="news-card__hover-info news-card__hover-info-trash">
            Remove from saved
          </span>
        </>
      ) : (
        <>
          <i
            className={`news-card__save-icon ${saveIconSelected} news-card__white-container`}
            onClick={handleSaveCard}
          />
          {!loggedIn ? (<span className="news-card__hover-info news-card__hover-info-save">
            Sign in to save articles
          </span>) :null }
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
        <p className="news-card__paragraph">{paragraphText}</p>
        <MediaSource name={mediaSourceName} />
      </article>
    </li>
  );
}

export default NewsCard;
