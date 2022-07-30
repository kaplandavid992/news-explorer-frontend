import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute ({ children, loggedIn, ...props }) {
  return (
         loggedIn ? children : <Navigate to={"/"} /> 
  );
}

export default ProtectedRoute;