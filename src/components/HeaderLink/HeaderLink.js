import HeaderLinkUnderline from '../HeaderLinkUnderline/HeaderLinkUnderline';
import { Link } from 'react-router-dom';
import "./HeaderLink.css";

function HeaderLink({ to, text, sidePadding }) {
  return (
    <div className="header__nav-link-wrapper">
      <Link to={to} className="header__nav-link" style={{ paddingRight:sidePadding , paddingLeft:sidePadding }}>
        {text}
      </Link>
      <HeaderLinkUnderline to={to}/>
    </div>
  );
}

export default HeaderLink;
