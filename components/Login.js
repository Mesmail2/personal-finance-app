import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const login = async (e) => {
    e.preventDefault();

    try {
      const user = { username, password };
      const response = await axios.post(
        "http://localhost:3000/api/users/login",
        user,
      );
      setUsername("");
      setPassword("");
      setError("");
      localStorage.setItem("token", response.data.token);
    } catch (err) {
      setError(err.response.data.error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      {error && <span>{error}</span>}
      <form onSubmit={login}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
