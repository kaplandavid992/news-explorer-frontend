import "./HeaderLinkUnderline.css";
import React from "react";
import { useLocation } from "react-router-dom";

function HeaderLinkUnderline({ to , theme}) {
  let location = useLocation();
  let active;
  location.pathname === to ? (active = "_active") : (active = " ");
  const lightClass = theme === 'light' ? 'header__nav-link-underline_light' : '';

  return ( 
   <i className={`header__nav-link-underline header__nav-link-underline${active} ${lightClass}`} />
  );
}

export default HeaderLinkUnderline;
