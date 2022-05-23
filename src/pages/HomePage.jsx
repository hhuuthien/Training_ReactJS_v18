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

      <section className="product-list">
        <div className="container">
          <h2>-Featured Products-</h2>
          <div className="row">
            <div className="col">
              <div className="card card-item-1">
                <img src="./image/product1.png" alt="..." />
                <div className="card-body">
                  <div className="prod-info">
                    <p className="product-name">
                      CyberBeats
                      <p className="desc">Accessories</p>
                    </p>
                    <p className="prod-price">$99.00</p>
                  </div>
                  <div className="prod-ratting">
                    <div className="ratting">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                    </div>
                    <div className="prod-button">
                      <button className="btn-buy">
                        <i className="fa fa-shopping-cart"></i> Buy now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card card-item-2">
                <img src="./image/product2.png" alt="..." />
                <div className="card-body">
                  <div className="prod-info">
                    <p className="product-name">
                      CyberBeats
                      <p className="desc">Accessories</p>
                    </p>
                    <p className="prod-price">$99.00</p>
                  </div>
                  <div className="prod-ratting">
                    <div className="ratting">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                    </div>
                    <div className="prod-button">
                      <button>
                        <i className="fa fa-shopping-cart"></i> Buy now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card card-item-3">
                <img src="./image/product3.png" alt="..." />
                <div className="card-body">
                  <div className="prod-info">
                    <p className="product-name">
                      CyberBeats
                      <p className="desc">Accessories</p>
                    </p>
                    <p className="prod-price">$99.00</p>
                  </div>
                  <div className="prod-ratting">
                    <div className="ratting">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                    </div>
                    <div className="prod-button">
                      <button>
                        <i className="fa fa-shopping-cart"></i> Buy now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card card-item-4">
                <img src="./image/product1.png" alt="..." />
                <div className="card-body">
                  <div className="prod-info">
                    <p className="product-name">
                      CyberBeats
                      <p className="desc">Accessories</p>
                    </p>
                    <p className="prod-price">$99.00</p>
                  </div>
                  <div className="prod-ratting">
                    <div className="ratting">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                    </div>
                    <div className="prod-button">
                      <button className="btn-buy">
                        <i className="fa fa-shopping-cart"></i> Buy now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card card-item-5">
                <img src="./image/product2.png" alt="..." />
                <div className="card-body">
                  <div className="prod-info">
                    <p className="product-name">
                      CyberBeats
                      <p className="desc">Accessories</p>
                    </p>
                    <p className="prod-price">$99.00</p>
                  </div>
                  <div className="prod-ratting">
                    <div className="ratting">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                    </div>
                    <div className="prod-button">
                      <button>
                        <i className="fa fa-shopping-cart"></i> Buy now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card card-item-6">
                <img src="./image/product3.png" alt="..." />
                <div className="card-body">
                  <div className="prod-info">
                    <p className="product-name">
                      CyberBeats
                      <p className="desc">Accessories</p>
                    </p>
                    <p className="prod-price">$99.00</p>
                  </div>
                  <div className="prod-ratting">
                    <div className="ratting">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                    </div>
                    <div className="prod-button">
                      <button>
                        <i className="fa fa-shopping-cart"></i> Buy now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
