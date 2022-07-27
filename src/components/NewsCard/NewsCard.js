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
    !saveIconSelected ? setSaveIconSelected('') : setSaveIconSelected ('save-icon_selected');
  }

  const handleDeleteCard=()=>{
    alert('delete clicked');
  }
  return (
    <li className="news-card">
      { loggedIn ? <><span className="news-card-category">{category}</span>
      <i className="trash-icon white-container" onClick={handleDeleteCard}/>
      <span className="hover-info hover-info_trash">Remove from saved</span>
        </>  :
      <>
       <i className={`save-icon ${saveIconSelected} white-container`} onClick={handleToggleSaveCard}/> 
      <span className="hover-info hover-info_save">Sign in to save articles</span>
       </>}

      <img className="news-card__img" src={hardCodeDogImg} alt='dog in forest'/>
      <article className="news-card__text-block">
        <time className="text-block-date">{date}</time>
        <h3 className="text-block-title">{titleText}</h3>
        <p className="text-block-paragraph">{paragraphText}</p>
        <MediaSource name={mediaSourceName} />
      </article>
      
    </li>
  );
}

export default NewsCard;
