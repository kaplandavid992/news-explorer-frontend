import './SavedNews.css';
import ShowMoreBtn from '../ShowMoreBtn/ShowMoreBtn';
import NewsCardList from '../NewsCardList/NewsCardList';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import TitleH2 from '../TitleH2/TitleH2';

function SavedNews() { // prop {newsCards}
    return (
        <>
        <SavedNewsHeader />
        <div className=''>
            <TitleH2 text='Search results' />
            <NewsCardList />
            <ShowMoreBtn />
        </div>
        </>
    )
}

export default SavedNews;