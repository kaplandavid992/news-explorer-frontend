import "./SignInBtn.css";

function SignInBtn({setIsSignInPopupOpen}) {
  return (
    <button className="sign-in-btn" onClick={setIsSignInPopupOpen}>
      Sign in 
    </button>
  );
}

export default SignInBtn;
