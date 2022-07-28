import ExitLoginIcon from "../ExitLoginIcon/ExitLoginIcon";
import "./LogOutBtn.css";


function LogOutBtn({ onClick, theme}) {
  const logOutBtnLight = theme === 'light' ? 'log-out-btn_light' : '';
  return (
    <>
      <button className={`log-out-btn ${logOutBtnLight}`} onClick={onClick}>
    Elise
    <div className="space-filler"/>
        <ExitLoginIcon theme={theme}/>
      </button>
    </>
  );
}

export default LogOutBtn;
