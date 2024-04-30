// ProductDetails.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

// Importing useState, useEffect, and useParams as before

const ProductDetails = () => {
  const { id } = useParams();
  const [productDetails, setProductDetails] = useState();

  useEffect(() => {
    fetchProductDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]); // Include 'id' in the dependency array to fetch product details when 'id' changes

  const fetchProductDetails = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/productdetails/${id}`
      );
      setProductDetails(response.data[0]); // Accessing the first element of the array
    } catch (error) {
      console.error("Error fetching product details:", error);
      setProductDetails(null);
    }
  };

  const handleBack = () => {
    window.history.back();
  };

  if (!productDetails) {
    return <div>Loading...</div>;
  }

  // Parsing the 'images' string into an array
  const imagesArray = JSON.parse(productDetails.images);

  return (
    <div className="card">
      <div className="card-body">
        <h2 className="card-title">{productDetails.title}</h2>
        <p>Description: {productDetails.description}</p>
        <p>Price: Rs {productDetails.price}</p>
        <p>Rating: {productDetails.rating}</p>
        <p>Stock: {productDetails.stock}</p>
        <p>Brand: {productDetails.brand}</p>
        <p>Category: {productDetails.category}</p>

        <img src={productDetails.thumbnail} alt={productDetails.title} />
        {/* Rendering images from the 'imagesArray' */}
        <div>
          {imagesArray.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Product ${index + 1}`}
              height="100"
              width="100"
            />
          ))}
        </div>
        <div className="text-center">
          <button type="button" className="btn bg-primary" onClick={handleBack}>
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
