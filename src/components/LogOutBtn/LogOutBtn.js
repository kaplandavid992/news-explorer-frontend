import ExitLoginIcon from "../ExitLoginIcon/ExitLoginIcon";
import "./LogOutBtn.css";

const currentUser = "currentUser"; //get from api actual
function LogOutBtn({color}) {
    function logOut(){
        console.log('change login state , use context to reach app login hook');
      }
    
  return (
    <>
      <button className="log-out-btn" onClick={logOut}>
        <span className="log-out-btn-txt" style={{color:color}}>{currentUser}</span>
        <ExitLoginIcon color={color}/>
      </button>
    </>
  );
}

export default LogOutBtn;
