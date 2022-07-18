import SignInBtn from "../SignInBtn/SignInBtn";
import LogOutBtn from "../LogOutBtn/LogOutBtn";
import HeaderLink from "../HeaderLink/HeaderLink";
import "./Header.css";
import { Link } from 'react-router-dom';

function Header({openSignInPopup}) {
    const loggedIn=false; //api -context from app 
  return (
    <header className="header">
      <Link to='/' className="header__logo">NewsExplorer</Link>
      <div className="header__right-group">
         <HeaderLink to="/" text="Home" sidePadding='10px' active={true} color='#FFFFFF'/>
         { loggedIn? <HeaderLink to="/saved-news" text="Saved articles" sidePadding='32px' color='#FFFFFF' active={false}/>:null} 
         { loggedIn? <LogOutBtn color='#FFFFFF' /> : <SignInBtn openSignInPopup={openSignInPopup}/> }
      </div>
    </header>
  );
}

export default Header;
