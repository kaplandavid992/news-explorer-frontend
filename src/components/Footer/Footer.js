import { Link } from "react-router-dom";
import githubIcon from '../../images/githubPngIcon.png'
import fbIcon from '../../images/facebookPNGIcon.png'
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <span className="footer__copyright">
        © 2022 Supersite, Powered by News API
      </span>

      <div className="footer__right-side-group">
      <div className="footer__links-wrapper">
        <Link to="/" className="footer__link">
          Home
        </Link>
        <a href="https://practicum.com/" className="footer__link">
          Practicum by Yandex
        </a>
      </div>

      <div className="footer__social-icons-wrapper">
        <a href="https://github.com/kaplandavid992">
        <img className="footer__social-icon" src={githubIcon} alt='github icon' /></a>
        <a href="https://www.facebook.com/Practicum100IL/">
        <img className="footer__social-icon" src={fbIcon} alt='facebook icon'/></a>
      </div>
      </div>
    </footer>
  );
}

export default Footer;