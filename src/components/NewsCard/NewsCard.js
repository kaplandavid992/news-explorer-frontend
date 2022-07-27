import "./NewsCard.css";
import hardCodeDogImg from "../../images/dogCard.png";
import MediaSource from "../MediaSource/MediaSource";

function NewsCard({
  loggedIn,
  date,
  titleText,
  paragraphText,
  mediaSourceName,
  category,
}) {

  const handleSaveCard=()=>{
    alert('save clicked');
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
      <i className="save-icon white-container" onClick={handleSaveCard}/>
      <span className="hover-info hover-info_save">Sign in to save articles</span>
       </>}

      <img className="news-card__img" src={hardCodeDogImg} alt='dog in forest'/>
      <div className="news-card__text-block">
        <span className="text-block-date">{date}</span>
        <h3 className="text-block-title">{titleText}</h3>
        <p className="text-block-paragraph">{paragraphText}</p>
        <MediaSource name={mediaSourceName} />
        
      </div>
      
    </li>
  );
}

export default NewsCard;
