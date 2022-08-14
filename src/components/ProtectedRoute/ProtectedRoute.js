import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute ({ children, loggedIn, setIsSignInPopupOpen }) {
  return (
         loggedIn ? children : <>
         <Navigate to={"/"}/>
         {setIsSignInPopupOpen(true)}
         </>   
  );
}

export default ProtectedRoute;