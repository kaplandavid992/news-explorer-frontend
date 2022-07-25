import "./HeaderLinkUnderline.css";
import React from "react";
import { useLocation } from "react-router-dom";

function HeaderLinkUnderline({ to , marginLeft, theme}) {
  let location = useLocation();
  let active;
  location.pathname === to ? (active = "_active") : (active = " ");
  const lightThemeBgColor = theme === 'light' ? 'header__nav-link-underline_light' : '';
  return (
    <div
      className={`header__nav-link-underline header__nav-link-underline${active} ${lightThemeBgColor}`}
    style={{ marginLeft:marginLeft }}
    />
  );
}

export default HeaderLinkUnderline;
