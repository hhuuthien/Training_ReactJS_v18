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
    </div>
  );
}
