import ExitLoginIcon from "../ExitLoginIcon/ExitLoginIcon";
import "./LogOutBtn.css";


function LogOutBtn({ onClick, theme}) {
  const logOutBtnTxtlight = theme === 'light' ? 'log-out-btn-txt_light' :''; 
  const logOutBtnLight = theme === 'light' ? 'log-out-btn_light' : '';
  return (
    <>
      <button className={`log-out-btn ${logOutBtnLight}`} onClick={onClick}>
    Elise
    <div className="spaceFiller"/>
        <ExitLoginIcon theme={theme}/>
      </button>
    </>
  );
}

export default LogOutBtn;
