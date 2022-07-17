import './MainSearchResults.css';
import ShowMoreBtn from '../ShowMoreBtn/ShowMoreBtn';
import NewsCardList from '../NewsCardList/NewsCardList';
import TitleH2 from '../TitleH2/TitleH2';

function MainSearchResults() { // prop {newsCards}
    return (
        <>
        <section className='main_results_section'>
            <TitleH2 text='Search results' />
            <NewsCardList />
            <ShowMoreBtn />
        </section>
        </>
    )
}

export default MainSearchResults;