import React from "react";
import { Link } from "react-router-dom"; // Import Link component from React Router

const Header = () => {
  return (
    <div className="bg-dark">
      <div className="container">
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
          <div className="col-md-3 mb-2 mb-md-0">
            <img
              src="https://cdn.dummyjson.com/product-images/25/thumbnail.jpg"
              alt="Icon"
              width="50"
              height="50"
            />
          </div>

          <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li>
              <Link to="/" className="nav-link px-2 text-white active">
                Home
              </Link>
            </li>
            <li>
              <Link to="/product" className="nav-link px-2 text-white">
                Product
              </Link>
            </li>
            <li>
              <Link to="/career" className="nav-link px-2 text-white">
                Career
              </Link>
            </li>
            <li>
              <Link to="/about" className="nav-link px-2 text-white">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="nav-link px-2 text-white">
                Contact
              </Link>
            </li>
          </ul>

          <div className="col-md-3 text-end">
            <Link
              to="/login"
              className="btn btn-outline-primary me-2 text-white"
            >
              Login
            </Link>
            <Link to="/register" className="btn btn-outline-primary text-white">
              Sign-up
            </Link>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Header;
