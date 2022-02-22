import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { current, logout } from "../../js/actions/user";
import Navbar from "../../pages/Navbar";
import { Link } from "react-router-dom";
import { getProduct } from "../../js/actions/product";
import Adprofile from "../../pages/Adprofile";
const Dashbord = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(current());
    dispatch(getProduct());
  }, [dispatch]);
  const user = useSelector((state) => state.userReducer.user);
  console.log(user);

  const products = useSelector((state) => state.productReducer.products);

  const loadProduct = useSelector((state) => state.productReducer.loadProducts);

  return (
    <div>
      <Navbar />

      {/* <button
        onClick={() => {
          dispatch(logout());
          navigate("/");
        }}
        style={{ marginTop: "100px", backgroundColor: "black" }}
      >
        Logout
      </button> */}
      <Link to="/add" style={{ textDecoration: "none" }}>
        <button
          style={{
            color: "white",
            backgroundColor: "black",
            marginTop: "150px",
          }}
        >
          add
        </button>
      </Link>
      <h2 style={{ display: "flex", justifyContent: "center" }}>
        {user ? user.name : <h1>loading...</h1>}
      </h2>

      <div
        style={{
          marginTop: "90px",
          display: "flex",
          flexWrap: "wrap",

          justifyContent: "center",
        }}
      >
        {loadProduct ? (
          <h2>loading..</h2>
        ) : (
          products
            .filter((el) => el.user_id === user._id)
            .map((el) => <Adprofile key={el._id} product={el} />)
            .reverse()
        )}
      </div>
    </div>
  );
};

export default Dashbord;
