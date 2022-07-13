import { Link } from 'react-router-dom';
import SearchForm from '../SearchForm/SearchForm';

function Main() {
    return (
        <>
        <p>this is main component</p>
        <Link to='saved-news'> saved news page </Link>
        <SearchForm />
        </>
    )
}

export default Main;