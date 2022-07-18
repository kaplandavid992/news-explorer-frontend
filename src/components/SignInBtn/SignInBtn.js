import "./SignInBtn.css";

function SignInBtn({openSignInPopup}) {
  return (
    <button className="sign-in-btn" onClick={openSignInPopup}>
      Sign in 
    </button>
  );
}

export default SignInBtn;
