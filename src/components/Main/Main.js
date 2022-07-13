import { Link } from 'react-router-dom';

function Main() {
    return (
        <>
        <p>this is main component</p>
        <Link to='saved-news'> saved news page </Link>
        </>
    )
}

export default Main;