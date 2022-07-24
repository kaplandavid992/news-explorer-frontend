import SignInBtn from "../SignInBtn/SignInBtn";
import LogOutBtn from "../LogOutBtn/LogOutBtn";
import HeaderLink from "../HeaderLink/HeaderLink";
import menu from "../../images/menu.png";
import exitMenu from "../../images/exitMenu.png";

import "./Header.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function Header({ openSignInPopup, anyPopUpOpen }) {
  const loggedIn = true; //api -context from app
  const [expandedMenu, setExpandedMenu] = useState(false);
  const condition = expandedMenu && !anyPopUpOpen();
  const menuActive = condition ? "" : "header__menu-icon_active";
  const exitActive = condition ? "header__menu-icon_active" : "";
  const headerExpandedClass = condition ? "header_expanded-menu" : "";
  const popupOpenModifierClass = anyPopUpOpen() ? 'header-items_hider' : "";
  const handleLogOut = () => {alert('log out')}

  return (
    <>
      <header className={`header ${headerExpandedClass}`}>
        <Link to="/" className={`header__logo ${popupOpenModifierClass}`} >
          NewsExplorer
        </Link>

        {!expandedMenu ? (
          <div className='header__right-group'>
            <HeaderLink
              to="/"
              text="Home"
              sidePadding="10px"
              active={true}
              color="#FFFFFF"
            />
            {loggedIn ? (
              <HeaderLink
                to="/saved-news"
                text="Saved articles"
                sidePadding="32px"
                color="#FFFFFF"
                active={false}
              />
            ) : null}
            {loggedIn ? (
              <LogOutBtn color="#FFFFFF" onClick={handleLogOut}/>
            ) : (
              <SignInBtn openSignInPopup={openSignInPopup} />
            )}
          </div>
        ) : null}

        <div className={`header__mobile-icons ${popupOpenModifierClass}`}>
          <img
            className={`header__menu-icon ${menuActive}`}
            src={menu}
            alt="menu button"
            onClick={() => {
              setExpandedMenu(true);
            }}
          />
          <img
            className={`header__menu-icon ${exitActive}`}
            src={exitMenu}
            alt="menu button"
            onClick={() => {
              setExpandedMenu(false);
            }}
          />
        </div>
        
      </header>

      {expandedMenu ? (
        <div className={`header__right-group_vertical-wrappper ${popupOpenModifierClass}`}>
        <div className="header__right-group header__right-group_vertical">
          <HeaderLink
            to="/"
            text="Home"
            sidePadding="10px"
            active={true}
            color="#FFFFFF"
          />
          {loggedIn ? (
            <HeaderLink
              to="/saved-news"
              text="Saved articles"
              sidePadding="32px"
              color="#FFFFFF"
              active={false}
            />
          ) : null}
          {loggedIn ? (
            <LogOutBtn color="#FFFFFF" onClick={handleLogOut}/>
          ) : (
            <SignInBtn openSignInPopup={openSignInPopup} />
          )}
        </div> 
        <div className="header__right-group_vertical-remainder"></div>
        </div>
      ) : null}
    </>
  );
}

export default Header;
