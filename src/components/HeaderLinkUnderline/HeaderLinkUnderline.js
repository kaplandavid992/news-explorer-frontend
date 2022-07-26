import "./HeaderLinkUnderline.css";
import React from "react";
import homeUnderLine from '../../images/homeUnder.svg';
import saveUnderLine from '../../images/saveUnderBlack.svg';
import { useLocation } from "react-router-dom";

function HeaderLinkUnderline({ to , theme}) {
  let location = useLocation();
  let active;
  location.pathname === to ? (active = "_active") : (active = " ");
  const underlineSource = theme === 'light' ? saveUnderLine : homeUnderLine;
  return ( 
   <img src={underlineSource} className={`header__nav-link-underline header__nav-link-underline${active}`} alt='underline highlighter line' />
  );
}

export default HeaderLinkUnderline;
