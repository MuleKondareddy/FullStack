import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const Navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/register", { name, email, password })
      .then((res) => {
        if (res.data === "User inserted Successfully") {
          Navigate("/login");
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
        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

        <div className="form-floating">
          <input
            type="text"
            className="form-control mb-3"
            name="floatingName"
            placeholder="name@example.com"
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="floatingName">Name</label>
        </div>

        <div className="form-floating">
          <input
            type="email"
            className="form-control mb-3"
            name="floatingEmail"
            placeholder="name@example.com"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="floatingEmail">Email address</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            className="form-control mb-3"
            name="floatingPassword"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>
        <button className="btn btn-primary w-100 py-2 mb-3" type="submit">
          Sign in
        </button>
      </form>
    </div>
  );
};

export default SignIn;
