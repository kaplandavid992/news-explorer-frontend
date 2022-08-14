import HeaderLinkUnderline from "../HeaderLinkUnderline/HeaderLinkUnderline";
import { Link } from "react-router-dom";
import "./HeaderLink.css";

function HeaderLink({ to, text, sidePadding, theme }) {
  const marginLeft = text === "Saved articles" ? "16" : "0";
  const linkLightThemeColor = theme === "light" ? "header-nav-link_light" : "";

  return (
    <div className="header-nav-link__wrapper">
      <Link
        to={to}
        className={`header-nav-link ${linkLightThemeColor}`}
        style={{
          paddingRight: sidePadding,
          paddingLeft: sidePadding,
          marginLeft: marginLeft,
        }}
      >
        {text}
      </Link>
      <HeaderLinkUnderline theme={theme} to={to} />
    </div>
  );
}

export default HeaderLink;
