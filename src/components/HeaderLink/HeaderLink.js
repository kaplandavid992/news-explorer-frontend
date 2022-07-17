import HeaderLinkUnderline from '../HeaderLinkUnderline/HeaderLinkUnderline';
import { Link } from 'react-router-dom';
import "./HeaderLink.css";

function HeaderLink({ to, text, sidePadding, color }) {
  const marginLeft = text === 'Saved articles' ? '0' : '0';
  return (
    <div className="header__nav-link-wrapper">
      <Link to={to} className="header__nav-link" style={{ paddingRight:sidePadding , paddingLeft:sidePadding, marginLeft:marginLeft, color: color }}>
        {text}
      </Link>
      <HeaderLinkUnderline to={to} marginLeft={marginLeft} backgroundColor={color}/>
    </div>
  );
}

export default HeaderLink;
