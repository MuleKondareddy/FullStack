import React from "react";
import { Link } from "react-router-dom";

const Product = (props) => {
  const { product } = props;
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <img
          src={product.thumbnail}
          alt={product.title}
          height="200"
          width="300"
        />
        <p className="text-success fw-bold">Rs {product.price}</p>
        <p className="text-dark fw-bold">{product.description}</p>
        <Link
          to={`/productdetails/${product.id}`}
          className="btn bg-primary text-white fw-bold"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default Product;
