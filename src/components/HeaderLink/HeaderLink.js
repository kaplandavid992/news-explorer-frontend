import HeaderLinkUnderline from '../HeaderLinkUnderline/HeaderLinkUnderline';
import { Link } from 'react-router-dom';
import "./HeaderLink.css";
import homeUnderLine from '../../images/homeUnder.svg';
import saveUnderLine from '../../images/saveUnderBlack.svg';

function HeaderLink({ to, text, sidePadding, color, theme }) {
  const marginLeft = text === 'Saved articles' ? '16' : '0';
  const underlineSource = text === 'Saved articles' ? saveUnderLine : homeUnderLine;
  const linkLightThemeColor = theme === 'light' ? 'header__nav-link_light' :'';
  return (
    <div className="header__nav-link-wrapper">
      <Link to={to} className={`header__nav-link ${linkLightThemeColor}`}  style={{ paddingRight:sidePadding , paddingLeft:sidePadding, marginLeft:marginLeft }}>
        {text}
      </Link>
      <img src={underlineSource} className='header__nav-link-underline' alt='underline highlighter line' />
    </div>
  );
}

export default HeaderLink;
