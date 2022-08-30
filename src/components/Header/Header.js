import SignInBtn from "../SignInBtn/SignInBtn";
import LogOutBtn from "../LogOutBtn/LogOutBtn";
import HeaderLink from "../HeaderLink/HeaderLink";
import menu from "../../images/menu.svg";
import menuLightTheme from "../../images/menuBlack.svg";
import exitMenu from "../../images/exitMenu.svg";
import exitMenuLightTheme from "../../images/close.svg";

import "./Header.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function Header({
  loggedIn,
  setLoggedIn,
  setIsSignInPopupOpen,
  anyPopUpOpen,
  theme,
}) {
  const [expandedMenu, setExpandedMenu] = useState(false);
  const condition = expandedMenu && !anyPopUpOpen();
  const menuActive = condition ? "" : "header__menu-icon_active";
  const exitActive = condition ? "header__menu-icon_active" : "";
  const headerExpandedClass = condition ? "header_layout_vertical" : "";
  const popupOpenModifierClass = anyPopUpOpen() ? "header__items-hider" : "";

  const handleLogOut = () => {
    setLoggedIn(false);
    localStorage.removeItem("token");
    setIsSignInPopupOpen(true);
    return true;
  };

  const headerLightBg = theme === "light" ? "header_background_light" : "";
  const logoLightTheme = theme === "light" ? "header__logo_light" : "";
  const verticalGroupLight =
    theme === "light" ? "header__right-group_links_vertical-light" : "";
  const remainderLight =
    theme === "light"
      ? "header__right-group_links_vertical-remainder-light"
      : "";
  const menuIcon = theme === "light" ? menuLightTheme : menu;
  const exitIcon = theme === "light" ? exitMenuLightTheme : exitMenu;

  return (
    <>
      <header className={`header ${headerExpandedClass} ${headerLightBg}`}>
        <Link
          to="/"
          className={`header__logo ${popupOpenModifierClass} ${logoLightTheme}`}
        >
          NewsExplorer
        </Link>

        {!expandedMenu ? (
          <div className="header__right-group">
            <HeaderLink
              theme={theme}
              to="/"
              text="Home"
              sidePadding="10px"
              active={true}
            />
            {loggedIn ? (
              <HeaderLink
                theme={theme}
                to="/saved-news"
                text="Saved articles"
                sidePadding="32px"
                active={false}
              />
            ) : null}
            {loggedIn ? (
              <LogOutBtn onClick={handleLogOut} theme={theme} />
            ) : (
              <SignInBtn setIsSignInPopupOpen={setIsSignInPopupOpen} />
            )}
          </div>
        ) : null}

        <div className={`header__mobile-icons ${popupOpenModifierClass}`}>
          <img
            className={`header__menu-icon ${menuActive}`}
            src={menuIcon}
            alt="menu button"
            onClick={() => {
              setExpandedMenu(true);
            }}
          />
          <img
            className={`header__menu-icon ${exitActive}`}
            src={exitIcon}
            alt="menu button"
            onClick={() => {
              setExpandedMenu(false);
            }}
          />
        </div>
      </header>

      {expandedMenu ? (
        <div
          className={`header__right-group_links_vertical-wrappper ${popupOpenModifierClass}`}
        >
          <div
            className={`header__right-group header__right-group_links_vertical ${verticalGroupLight}`}
          >
            <HeaderLink
              theme={theme}
              to="/"
              text="Home"
              sidePadding="10px"
              active={true}
            />
            {loggedIn ? (
              <HeaderLink
                theme={theme}
                to="/saved-news"
                text="Saved articles"
                sidePadding="32px"
                active={false}
              />
            ) : null}
            {loggedIn ? (
              <LogOutBtn onClick={handleLogOut} theme={theme} />
            ) : (
              <SignInBtn setIsSignInPopupOpen={setIsSignInPopupOpen} />
            )}
          </div>
          <div
            className={`header__right-group_links_vertical-remainder ${remainderLight}`}
          ></div>
        </div>
      ) : null}
    </>
  );
}

export default Header;
