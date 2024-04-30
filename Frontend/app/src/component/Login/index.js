import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3000/login", {
        email,
        password,
      });
      if (res.data === "User Logged In Successfully") {
        navigate("/");
      }
    } catch (err) {
      if (err.response.status === 401) {
        setError("Invalid email or password. Please try again.");
      } else {
        setError("An unexpected error occurred. Please try again later.");
      }
    }
  };

  return (
    <div className="d-flex justify-content-center">
      <form onSubmit={handleSubmit}>
        <img
          className="mb-4"
          src="https://cdn.dummyjson.com/product-images/25/thumbnail.jpg"
          alt="logo"
          width="72"
          height="57"
        />
        <h1 className="h3 mb-3 fw-normal">Please Log in</h1>

        <div className="form-floating">
          <input
            type="email"
            className="form-control mb-3"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="name@example.com"
          />
          <label htmlFor="email">Email address</label>
        </div>

        <div className="form-floating">
          <input
            type="password"
            className="form-control mb-3"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <label htmlFor="password">Password</label>
        </div>
        <Link to="/reset">Forgotten Password</Link>

        <button className="btn btn-primary w-100 py-2 mb-3" type="submit">
          Log in
        </button>
        <p className="text-danger">{error}</p>
      </form>
    </div>
  );
}

export default Login;
