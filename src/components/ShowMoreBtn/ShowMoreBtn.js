import './ShowMoreBtn.css';

function ShowMoreBtn({onClick, displayShowMore}){
    const displayed =  displayShowMore ? 'show-more-btn_displayed' :'';
    return (
        <button className={`show-more-btn ${displayed}`} onClick={onClick}>Show more</button>
    )
}

export default ShowMoreBtn;