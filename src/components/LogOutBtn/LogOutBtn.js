import ExitLoginIcon from "../ExitLoginIcon/ExitLoginIcon";
import "./LogOutBtn.css";

const currentUser = "userName"; //get from api actual
function LogOutBtn() {
    function logOut(){
        console.log('change login state , use context to reach app login hook');
      }
    
  return (
    <>
      <button className="log-out-btn" onClick={logOut}>
        <span className="log-out-btn-txt">{currentUser}</span><ExitLoginIcon /></button>
    </>
  );
}

export default LogOutBtn;
