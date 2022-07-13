import "./HeaderLinkUnderline.css";
import React from "react";
import { useLocation } from "react-router-dom";

function HeaderLinkUnderline({ to }) {
  let location = useLocation();
  let active;
  location.pathname === to ? (active = "_active") : (active = " ");
  return (
    <div
      className={`header__nav-link-underline header__nav-link-underline${active}`}
    />
  );
}

export default HeaderLinkUnderline;
