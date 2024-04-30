import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Forgot() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:3000/reset", { email, password })
      .then((res) => {
        if (res.data === "User password updated successfully") {
          navigate("/");
        }
      });
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
        <h1 className="h3 mb-3 fw-normal">Please Reset Password</h1>

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

        <button className="btn btn-primary w-100 py-2 mb-3" type="submit">
          Reset
        </button>
      </form>
    </div>
  );
}

export default Forgot;
