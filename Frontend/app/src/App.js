import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./component/Login";
import Header from "./component/Header";
import Footer from "./component/Footer";
import SignIn from "./component/Register";
import Home from "./component/Home";
import Products from "./component/Products";
import Productdetails from "./component/Productdetails";
import Forgot from "./component/Forgot";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<SignIn />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/product" element={<Products />}></Route>
        <Route path="/productdetails/:id" element={<Productdetails />}></Route>
        <Route path="/reset" element={<Forgot />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
