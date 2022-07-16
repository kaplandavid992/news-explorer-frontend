import './SavedNews.css';
import ShowMoreBtn from '../ShowMoreBtn/ShowMoreBtn';
// import NewsCard from '../NewsCard/NewsCard';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';

function SavedNews() { // prop {newsCards}
    return (
        <>
        <SavedNewsHeader />
        {/* <ul className="saved-news__list">
          {newsCards.map((newsCard) => (
            <NewsCard/>
          ))}
        </ul> */}
        <ShowMoreBtn />
        </>
    )
}

export default SavedNews;