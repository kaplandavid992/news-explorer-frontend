import "./HeaderButton.css";
import ExitLoginIcon from "../ExitLoginIcon/ExitLoginIcon";

function HeaderButton({ loggedIn }) {
  const text = loggedIn ? "currentUser.name " : "Sign in";
  return (
    <>
      <button className="header__button">{text}</button>
      {loggedIn ? <ExitLoginIcon /> : null}
    </>
  );
}

export default HeaderButton;
