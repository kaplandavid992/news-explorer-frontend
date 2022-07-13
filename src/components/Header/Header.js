import HeaderButton from "../HeaderButton/HeaderButton";
import HeaderLink from "../HeaderLink/HeaderLink";
import "./Header.css";

function Header() {
    const loggedIn=true; //api
  return (
    <header className="header">
      <span className="header__logo">NewsExplorer</span>
      <div className="header__right-group">
         <HeaderLink to="/" text="Home" sidePadding='12px' active={true} />
         { loggedIn? <HeaderLink to="/saved-news" text="Saved articles" sidePadding='32px' active={false}/>:null} 
        <HeaderButton loggedIn={loggedIn}/>
      </div>
    </header>
  );
}

export default Header;
