import React from "react";
import "./login.css";

function Login() {
  return (
    <div id="mainLog">
      <div id="loginBox">
        <label htmlFor="userName">Enter User Name:</label>
        <input
          type="text"
          id="userName"
          name="userName"
          placeholder="User Name."
        />
        <button>Enter</button>
      </div>
    </div>
  );
}

export default Login;
