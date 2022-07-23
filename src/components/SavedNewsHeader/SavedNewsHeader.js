import LogOutBtn from "../LogOutBtn/LogOutBtn";
import HeaderLink from "../HeaderLink/HeaderLink";
import "./SavedNewsHeader.css";
import menuIcon from '../../images/menu-black.png'
import exitMenuBlack from "../../images/close.svg";
import { Link } from 'react-router-dom';
import { useState } from "react";

function SavedNewsHeader() {
  const [expandedMenu, setExpandedMenu] = useState(false);
  const menuIconActiveClass = expandedMenu ? '':'savedNewsHeader__menu-icon_active';

  return (
    <header className="savedNewsHeader" >
      <Link to='/' className="savedNewsHeader__logo">NewsExplorer</Link>
      {/* <div className="savedNewsHeader__right-group">
         <HeaderLink to="/" text="Home" sidePadding='12px' active={true} color='#1A1B22'/>
         <HeaderLink to="/saved-news" text="Saved articles" sidePadding='32px' color='#1A1B22' active={false}/>
         <LogOutBtn color='#1A1B22'/>
             </div>
         */}
         <img onClick={()=>setExpandedMenu(!expandedMenu)}
         src={expandedMenu ? exitMenuBlack : menuIcon} alt='menu icon' className='savedNewsHeader__menu-icon'/>
    </header>
  );
}

export default SavedNewsHeader;
