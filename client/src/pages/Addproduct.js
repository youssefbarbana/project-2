import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addProduct } from "../js/actions/product";
import "./Addproduct.css";
const Addproduct = () => {
  const user = useSelector((state) => state.userReducer.user);
  const isAuth = useSelector((state) => state.userReducer.isAuth);

  const id = isAuth ? user._id : null;
  const owner = isAuth ? user.name : null;

  const [product, setproduct] = useState({
    price: "",
    name: "",
    desc: "",
    image: "",
    image2: "",
    categorie: "",
    user_id: id,
    shop: owner,
    phone: "",
    localisation: "",
    km: "",
    gear: "",
    year: "",
    cylinder: "",
    PuissanceF: "",
    Carburant: "",
    model: "",
    gender: "",
  });
  const dispatch = useDispatch();
  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];
    const bodyFormData = new FormData();
    bodyFormData.append("file", file);
    const { data } = await axios.post(
      "http://localhost:5000/story/uploads",
      bodyFormData
    );
    console.log(data);
    setproduct({ ...product, image: data });
  };
  return (
    <div className="addproduct">
      <div className="con">
        <Link to="/" style={{ textDecoration: "none" }}>
          <button
            style={{
              width: "200px",
              color: "white",
              backgroundColor: "black",
              marginLeft: "10px",
            }}
          >
            close
          </button>
        </Link>
        <div className="add">
          <h3 style={{ width: "100px", color: "white" }}>name:</h3>
          <input
            type="text"
            placeholder="name"
            onChange={(e) => setproduct({ ...product, name: e.target.value })}
          />
        </div>
        <div className="add">
          <h3 style={{ width: "100px", color: "white" }}>price:</h3>
          <input
            type="text"
            placeholder="price"
            onChange={(e) => setproduct({ ...product, price: e.target.value })}
          />
        </div>
        <div className="add">
          <h3 style={{ width: "100px", color: "white" }}>number phone:</h3>
          <input
            type="text"
            placeholder="phone"
            onChange={(e) => setproduct({ ...product, phone: e.target.value })}
          />
        </div>
        <div className="add">
          <h3 style={{ width: "100px", color: "white" }}>localisation:</h3>
          <select
            style={{
              width: "200px",
              height: "35px",
              borderRadius: "10px",
              marginLeft: "60px",
            }}
            onClick={(e) =>
              setproduct({ ...product, localisation: e.target.value })
            }
          >
            <option>tunisia</option>
            <option value="tunis">tunis</option>
            <option value="gabes">gabes</option>
            <option value="sousse">sousse</option>
            <option value="sfax">sfax</option>
          </select>
        </div>
        <div className="add">
          <h3 style={{ width: "100px", color: "white" }}>image:</h3>
          <input type="file" name="file" onChange={uploadFileHandler} />
        </div>
        <div className="add">
          <h3 style={{ width: "100px", color: "white" }}>image2:</h3>
          <input
            type="text"
            placeholder="image"
            onChange={(e) => setproduct({ ...product, image2: e.target.value })}
          />
        </div>
        <div className="add">
          <h3 style={{ width: "100px", color: "white" }}>categorie:</h3>

          <select
            style={{
              width: "200px",
              height: "35px",
              borderRadius: "10px",
              marginLeft: "60px",
            }}
            onClick={(e) =>
              setproduct({ ...product, categorie: e.target.value })
            }
          >
            <option>category</option>

            <option value="wear">wear</option>
            <option value="vehicle">vehicle</option>
            <option value="informatics">informatics</option>
            <option value="job">job</option>
            <option value="truck">truck</option>
          </select>
        </div>
        <div className="added">
          <h3 style={{ width: "100px", color: "white" }}>description:</h3>
          <textarea
            style={{ marginLeft: "60px" }}
            type="text"
            placeholder="description"
            onChange={(e) => setproduct({ ...product, desc: e.target.value })}
          />
        </div>
      </div>
      <div className="conplus">
        {product.categorie === "vehicle" || product.categorie === "truck" ? (
          <div style={{ background: "none" }}>
            <div className="plus">
              <h3>km:</h3>
              <input
                type="text"
                placeholder="km"
                onChange={(e) => setproduct({ ...product, km: e.target.value })}
              />
            </div>
            <div className="plus">
              <h3>gear:</h3>
              <select
                type="text"
                placeholder="gear"
                onChange={(e) =>
                  setproduct({ ...product, gear: e.target.value })
                }
              >
                <option value="">gear</option>
                <option value="auto">auto</option>
                <option value="manual">manual</option>
              </select>
            </div>
            <div className="plus">
              <h3>year:</h3>
              <input
                type="text"
                placeholder="year"
                onChange={(e) =>
                  setproduct({ ...product, year: e.target.value })
                }
              />
            </div>
            <div className="plus">
              <h3>cylinder:</h3>
              <input
                type="text"
                placeholder="cylinder number"
                onChange={(e) =>
                  setproduct({ ...product, cylinder: e.target.value })
                }
              />
            </div>
            <div className="plus">
              <h3>horse power:</h3>
              <input
                type="text"
                placeholder="horse powerr"
                onChange={(e) =>
                  setproduct({ ...product, PuissanceF: e.target.value })
                }
              />
            </div>
            <div className="plus">
              <h3>Carburant:</h3>
              <select
                type="text"
                placeholder="Carburant"
                onChange={(e) =>
                  setproduct({ ...product, Carburant: e.target.value })
                }
              >
                <option value="">Carburant</option>
                <option value="auto">gasoline</option>
                <option value="manual">diesel</option>
                <option value="manual">electric</option>
              </select>
            </div>
            <div className="plus">
              <h3>model:</h3>
              <input
                type="text"
                placeholder="model"
                onChange={(e) =>
                  setproduct({ ...product, model: e.target.value })
                }
              />
            </div>
          </div>
        ) : null}
        {product.categorie === "wear" ? (
          <div className="pluss">
            <h3>gender:</h3>
            <select
              onChange={(e) =>
                setproduct({ ...product, gender: e.target.value })
              }
            >
              <option value="">gender</option>
              <option value="men">men</option>
              <option value="women">women</option>
              <option value="children">children</option>
            </select>
          </div>
        ) : null}
      </div>
      <a href="/product" style={{ textDecoration: "none" }}>
        <button
          style={{
            color: "white",
            backgroundColor: "black",
            width: "100px",
          }}
          onClick={() => {
            dispatch(addProduct(product));
          }}
        >
          save
        </button>
      </a>
    </div>
  );
};

export default Addproduct;
