import "./HeaderLinkUnderline.css";
import React from "react";
import { useLocation } from "react-router-dom";

function HeaderLinkUnderline({ to , theme}) {
  let location = useLocation();
  let active;
  location.pathname === to ? (active = "_active") : (active = " ");
  const lightClass = theme === 'light' ? 'header-nav-link-underline_light' : '';

  return ( 
   <i className={`header-nav-link-underline header-nav-link-underline${active} ${lightClass}`} />
  );
}

export default HeaderLinkUnderline;
