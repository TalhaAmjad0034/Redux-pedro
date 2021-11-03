import React from "react";
import { useDispatch } from "react-redux";
import { login } from "../features/user";
import { logout } from "../features/user";

function Login() {
  const dispatch = useDispatch();
  return (
    <div>
      <button
        onClick={() => {
          dispatch(
            login({ name: "talha", age: "21", email: "Talha.nexas1@gmail.com" })
          );
        }}
      >
        Login
      </button>
      <button
        onClick={() => {
          dispatch(logout());
        }}
      >
        logout
      </button>
      
      
    </div>
  );
}

export default Login;
