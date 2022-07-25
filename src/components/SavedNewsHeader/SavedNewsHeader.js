import LogOutBtn from "../LogOutBtn/LogOutBtn";
import HeaderLink from "../HeaderLink/HeaderLink";
import "./SavedNewsHeader.css";
import menuIcon from '../../images/menuBlack.svg'
import exitMenuBlack from "../../images/close.svg";
import { Link } from 'react-router-dom';
import { useState } from "react";

function SavedNewsHeader() {
  const [expandedMenu, setExpandedMenu] = useState(false);
  const expandedMenuClass = expandedMenu ? 'savedNewsheader_expanded-menu ' :'';

  return (
    <>
    <header className={`savedNewsHeader ${expandedMenuClass}`}>
      <Link to='/' className="savedNewsHeader__logo">NewsExplorer</Link>
      <div className="savedNewsHeader__right-group">
         <HeaderLink to="/" text="Home" sidePadding='12px' active={true} color='#1A1B22'/>
         <HeaderLink to="/saved-news" text="Saved articles" sidePadding='32px' color='#1A1B22' active={false}/>
         <LogOutBtn color='#1A1B22'/>
      </div>
         <img onClick={()=>setExpandedMenu(!expandedMenu)}
         src={expandedMenu ? exitMenuBlack : menuIcon} alt='menu icon' className='savedNewsHeader__menu-icon'/>
    </header>
    {expandedMenu ? <>
      <div className='savedNewsHeader__right-group_vertical-wrappper'>
        <div className='savedNewsHeader__right-group savedNewsHeader__right-group_vertical'>
          <HeaderLink
            to="/"
            text="Home"
            sidePadding="10px"
            active={true}
            color="#1A1B22"
          />
          
            <HeaderLink
              to="/saved-news"
              text="Saved articles"
              sidePadding="32px"
              color="#1A1B22"
              active={false}
            />
            <LogOutBtn color="#1A1B22"/>
        </div> 
        <div className="savedNewsHeader__right-group_vertical-remainder"></div>
        </div></> : null
    }
    </>
  );
}

export default SavedNewsHeader;
