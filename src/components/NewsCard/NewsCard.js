import "./NewsCard.css";
import saveArticleIcon from "../../images/saveArtIcon.png";
import trashIcon from "../../images/trashIcon.png";
import hardCodeDogImg from "../../images/dogCard.png";
import MediaSource from "../MediaSource/MediaSource";
import ActionIcon from "../ActionIcon/ActionIcon";

function NewsCard({
  loggedIn,
  date,
  titleText,
  paragraphText,
  mediaSourceName,
  category,
}) {
  return (
    <div className="news-card">
      {loggedIn ? <><span className="news-card-category">{category}</span>
      <span className="hover-trash-info">Removed from saved</span>
      <ActionIcon icon={trashIcon}/>
        </> :
      <>
      <span className="hover-save-info">Sign in to save articles</span>
      <ActionIcon icon={saveArticleIcon} /> </>} 

      <img className="news-card__img" src={hardCodeDogImg} />
      <div className="news-card__text-block">
        <span className="text-block-date">{date}</span>
        <h3 className="text-block-title">{titleText}</h3>
        <p className="text-block-paragraph">{paragraphText}</p>
        <MediaSource name={mediaSourceName} />
      </div>
    </div>
  );
}

export default NewsCard;
