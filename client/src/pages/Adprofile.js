import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import { deleteproduct } from "../js/actions/product";
import { IconButton } from "@mui/material";

import "./Products.css";
const Adprofile = ({ product }) => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.userReducer.isAuth);
  const user = useSelector((state) => state.userReducer.user);
  return (
    // {() => dispatch(deleteproduct(product._id))}
    <div>
      <IconButton style={{ width: "30px", height: "30px" }}>
        <CloseIcon
          style={{ width: "30px", height: "30px" }}
          onClick={() =>
            confirm("are you sure")
              ? dispatch(deleteproduct(product._id))
              : null
          }
        />
      </IconButton>
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
    </div>
  );
};

export default Adprofile;
