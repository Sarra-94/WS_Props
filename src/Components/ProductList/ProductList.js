import React from "react";
import Product from "./Product";
import "./ProductList.css";
const ProductList = ({ items }) => {
  const handleName = (name) => alert(`this product's name is ${name}`);
  return (
    <div>
      <h2 className="title">ProductList component</h2>
      <div className="container">
        {items.map((el, i) => (
          <Product item={el} key={i} handleName={handleName} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
Product.defaultProps = {
  item: {
    name: "undefined",
    price: "0",
    imgSrc:
      "https://mcleansmartialarts.com/wp-content/uploads/2017/04/default-image-620x600.jpg",
  },
};
