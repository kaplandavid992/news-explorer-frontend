import LogOutBtn from "../LogOutBtn/LogOutBtn";
import HeaderLink from "../HeaderLink/HeaderLink";
import "./SavedNewsHeader.css";
import { Link } from 'react-router-dom';

function SavedNewsHeader() {
  return (
    <header className="savedNewsHeader" >
      <Link to='/' className="savedNewsHeader__logo">NewsExplorer</Link>
      <div className="savedNewsHeader__right-group">
         <HeaderLink to="/" text="Home" sidePadding='12px' active={true} color='#1A1B22'/>
         <HeaderLink to="/saved-news" text="Saved articles" sidePadding='32px' color='#1A1B22' active={false}/>
         <LogOutBtn color='#1A1B22'/> 
      </div>
    </header>
  );
}

export default SavedNewsHeader;
