import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Products.css";
const Product = ({ product }) => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.userReducer.isAuth);
  const user = useSelector((state) => state.userReducer.user);
  return (
    <Link
      to={`/view/${product._id}`}
      style={{ textDecoration: "none", color: "black" }}
      className="link"
    >
      <div className="card">
        <div className="top">
          <div className="price">
            <h4>{product.price}dt</h4>
          </div>
          <img
            src={product ? product.image : <h2>loading</h2>}
            alt="image"
            className="images"
          />
        </div>
        <div className="bottom">
          <div className="name">{product.name}</div>
          <div className="date">
            {product.createdAt ? (
              product.createdAt.substr(0, 10)
            ) : (
              <h2>loading...</h2>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Product;
