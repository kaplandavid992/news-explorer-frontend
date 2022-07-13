import SignInBtn from "../SignInBtn/SignInBtn";
import LogOutBtn from "../LogOutBtn/LogOutBtn";
import HeaderLink from "../HeaderLink/HeaderLink";
import "./Header.css";
import { Link } from 'react-router-dom';

function Header() {
    const loggedIn=true; //api -context from app 
  return (
    <header className="header">
      <Link to='/' className="header__logo">NewsExplorer</Link>
      <div className="header__right-group">
         <HeaderLink to="/" text="Home" sidePadding='12px' active={true} />
         { loggedIn? <HeaderLink to="/saved-news" text="Saved articles" sidePadding='32px' active={false}/>:null} 
         { loggedIn? <LogOutBtn /> : <SignInBtn /> }
      </div>
    </header>
  );
}

export default Header;
