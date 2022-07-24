import './ShowMoreBtn.css';

function ShowMoreBtn({onClick}){
    return (
        <button className='show-more-btn' onClick={onClick}>Show more</button>
    )
}

export default ShowMoreBtn;