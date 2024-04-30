import React, { useState, useEffect } from "react";
import axios from "axios";
import Product from "../Product";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = () => {
    axios.get("http://localhost:3000/product").then((data) => {
      setProducts(data.data);
    });
  };

  return (
    <div>
      <h1 className="text-center text-uppercase">Welcome to Products page</h1>
      <div className="row">
        {products.map((item) => (
          <div
            key={item.id}
            className="col-sm-12, col-md-6, col-lg-4 text-center mb-3"
          >
            <Product product={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
