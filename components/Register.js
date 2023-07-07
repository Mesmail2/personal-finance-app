import React, { useState } from "react";
import axios from "axios";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const register = async (e) => {
    e.preventDefault();

    try {
      const newUser = { username, password };
      await axios.post("http://localhost:3000/api/users/register", newUser);
      setUsername("");
      setPassword("");
      setError("");
    } catch (err) {
      setError(err.response.data.error);
    }
  };

  return (
    <div>
      <h2>Register</h2>
      {error && <span>{error}</span>}
      <form onSubmit={register}>
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
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
