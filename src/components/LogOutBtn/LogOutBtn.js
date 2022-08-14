import ExitLoginIcon from "../ExitLoginIcon/ExitLoginIcon";
import { useContext } from "react";
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import "./LogOutBtn.css";


function LogOutBtn({ onClick, theme}) {
  const logOutBtnLight = theme === 'light' ? 'log-out-btn_light' : '';
  const currentUser = useContext(CurrentUserContext);
  return (
    <>
      <button className={`log-out-btn ${logOutBtnLight}`} onClick={onClick}>
    {currentUser.userName}
    <div className="space-filler"/>
        <ExitLoginIcon theme={theme}/>
      </button>
    </>
  );
}

export default LogOutBtn;
