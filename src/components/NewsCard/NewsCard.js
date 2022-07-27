import "./NewsCard.css";
import hardCodeDogImg from "../../images/dogCard.png";
import MediaSource from "../MediaSource/MediaSource";
import { useState } from "react";

function NewsCard({
  loggedIn,
  date,
  titleText,
  paragraphText,
  mediaSourceName,
  category,
}) {

  const [saveIconSelected, setSaveIconSelected] = useState('');
  const handleToggleSaveCard=()=>{
    !saveIconSelected ? setSaveIconSelected('') : setSaveIconSelected ('news-card__save-icon_selected');
  }

  const handleDeleteCard=()=>{
    alert('delete clicked');
  }
  return (
    <li className="news-card">
      { loggedIn ? <><span className="news-card__category">{category}</span>
      <i className="news-card__trash-icon news-card__white-container" onClick={handleDeleteCard}/>
      <span className="news-card__hover-info news-card__hover-info_trash">Remove from saved</span>
        </>  :
      <>
       <i className={`news-card__save-icon ${saveIconSelected} news-card__white-container`} onClick={handleToggleSaveCard}/> 
      <span className="news-card__hover-info news-card__hover-info_save">Sign in to save articles</span>
       </>}

      <img className="news-card__img" src={hardCodeDogImg} alt='dog in forest'/>
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
