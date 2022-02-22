import React from "react";
import Navbar from "./Navbar";
import "./Home.css";

import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../js/actions/product";
import { useEffect } from "react";
// import { width } from "@mui/system";
import Footer from "./Footer";
const Home = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.userReducer.isAuth);
  const products = useSelector((state) => state.productReducer.products);
  const length = useSelector((state) => state.productReducer.length);
  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);
  return (
    <div>
      <Navbar />
      <div className="image">
        <Link to="/product" style={{ textDecoration: "none" }}>
          <button>shop now</button>
        </Link>
      </div>
      <div className="text">
        <h1
          style={{
            width: "300px",
            height: "70px",
            fontSize: "40px",
            lineHeight: "80px",
          }}
        >
          MARKET ,your new shopping assistant
        </h1>
        {isAuth ? (
          <Link to="/add" style={{ textDecoration: "none" }}>
            <button
              style={{
                width: "120px",
                height: "60px",
                backgroundColor: "white",
                border: "1px black solid",
                color: "black",
                fontSize: "22px",
              }}
            >
              add{" "}
            </button>
          </Link>
        ) : (
          <Link to="/signup" style={{ textDecoration: "none" }}>
            <button
              style={{
                width: "120px",
                height: "60px",
                backgroundColor: "white",
                border: "1px black solid",
                color: "black",
                fontSize: "22px",
              }}
            >
              add{" "}
            </button>
          </Link>
        )}
      </div>
      <div className="line"></div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <a href="/product" style={{ textDecoration: "none", color: "black" }}>
          <div
            style={{
              width: "240px",
              height: "50px",
              marginTop: "100px",
              border: "2px solid black",
              borderRadius: "20px",

              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <span style={{ fontSize: "40px" }}>
              {products ? products.length : <h1>loading...</h1>}
            </span>
            <h1>posts</h1>
          </div>
        </a>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
