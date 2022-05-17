import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFilmApiAction } from "../reducer/movieReducer";

export default function HomePage(props) {
  const { arrayMovie } = useSelector((reducer) => reducer.movieReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    const actionThunk = getFilmApiAction();
    dispatch(actionThunk);
  }, []);
  console.log(arrayMovie);

  return <div>HomePage</div>;
}
