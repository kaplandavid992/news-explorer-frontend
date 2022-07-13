import "./HeaderButton.css";
import ExitLoginIcon from "../ExitLoginIcon/ExitLoginIcon";

function HeaderButton({ loggedIn }) {
  const text = loggedIn ? 'userName' : "Sign in";
  return (
    <button className="header__button">
      {text} {loggedIn ? <ExitLoginIcon /> : null}
    </button>
  );
}

export default HeaderButton;
