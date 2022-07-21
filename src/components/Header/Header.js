import SignInBtn from "../SignInBtn/SignInBtn";
import LogOutBtn from "../LogOutBtn/LogOutBtn";
import HeaderLink from "../HeaderLink/HeaderLink";
import menu from '../../images/menu.png';
import exitMenu from '../../images/exitMenu.png';

import "./Header.css";
import { Link } from 'react-router-dom';
import { useState } from "react";

function Header({openSignInPopup}) {
    const loggedIn=true; //api -context from app 
    const [expandedMenu, setExpandedMenu] = useState(false);
    const menuActive = expandedMenu ? '' :'header__menu-icon_active';
    const exitActive = expandedMenu ? 'header__menu-icon_active' :'';
  return (
    <header className="header">
      <Link to='/' className="header__logo">NewsExplorer</Link>
      <div className="header__right-group">
         <HeaderLink to="/" text="Home" sidePadding='10px' active={true} color='#FFFFFF'/>
         { loggedIn? <HeaderLink to="/saved-news" text="Saved articles" sidePadding='32px' color='#FFFFFF' active={false}/>:null} 
         { loggedIn? <LogOutBtn color='#FFFFFF' /> : <SignInBtn openSignInPopup={openSignInPopup}/> }
      </div>
      <div className="header__mobile-icons">
        <img className={`header__menu-icon ${menuActive}`} src={menu} alt='menu button' onClick={()=>{setExpandedMenu(true)}} /> 
        <img className={`header__menu-icon ${exitActive}`} src={exitMenu} alt='menu button' onClick={()=>{setExpandedMenu(false)}} /> 
      </div>
    </header>
  );
}

export default Header;
