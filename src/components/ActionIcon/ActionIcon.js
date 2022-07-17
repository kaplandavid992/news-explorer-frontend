import './ActionIcon.css';

function ActionIcon({icon}){
 return(
    <>
    <div className='action-icon-container'>
        <div style={{backgroundImage:`url(${icon})`}} className='action-icon-img' />
    </div>
    </>
 )
}

export default ActionIcon;