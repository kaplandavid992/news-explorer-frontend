import ExitLoginIcon from "../ExitLoginIcon/ExitLoginIcon";
import "./LogOutBtn.css";

const currentUser = "currentUser"; //get from api actual
function LogOutBtn({color, onClick}) {
  return (
    <>
      <button className="log-out-btn" onClick={onClick}>
        <span className="log-out-btn-txt" style={{color:color}}>{currentUser}</span>
        <ExitLoginIcon color={color}/>
      </button>
    </>
  );
}

export default LogOutBtn;
