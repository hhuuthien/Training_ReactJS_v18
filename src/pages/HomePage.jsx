import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFilmApiAction } from "../reducer/movieReducer";

export default function HomePage(props) {
  // const { arrayMovie } = useSelector((reducer) => reducer.movieReducer);
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   const actionThunk = getFilmApiAction();
  //   dispatch(actionThunk);
  // }, []);
  // console.log(arrayMovie);

  return (
    <div>
      <header>
        <div className="container">
          <a href="#" className="logo">
            CyberPhone
          </a>
          <nav className="navbar">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Login</a>
            <a href="#">Shop</a>
            <a href="#">Contact</a>
          </nav>
        </div>
      </header>

      <section className="carousel">
        <div className="container">
          <div className="row">
            <div className="col-6">
              {/* <div>
                <h1>CyberPhone</h1>
                <h3>Best Smartphone of 2021!</h3>
                <p>Cras tortor mi, lobortis quis ornare in, varius scelerisque urna. Vivamus imperdiet dolor nec odio convallis consequat</p>
              </div> */}
              <div>
                <button className="btn btn-info">
                  <i className="fa-solid fa-circle-info"></i>More info
                </button>
                <button className="btn btn-shop">
                  <i className="fa-solid fa-cart-shopping"></i>Shop
                </button>
              </div>
            </div>
            {/* <div className="col-6">
              <img src="./image/product-header2.png" alt="..." />
            </div> */}
          </div>
        </div>
      </section>
    </div>
  );
}
