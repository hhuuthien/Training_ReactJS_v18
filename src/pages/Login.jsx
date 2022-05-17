import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { dangNhapAPI } from "../reducer/nguoiDungReducer";

export default function Login() {
  const dispatch = useDispatch();
  const userLoginRef = useRef({ taiKhoan: "", matKhau: "" });

  const handleChange = (e) => {
    let { id, value } = e.target;
    userLoginRef.current[id] = value;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userLoginRef.current);

    const actionThunk = dangNhapAPI(userLoginRef.current);
    dispatch(actionThunk);
  };

  return (
    <form className="container p-5" onSubmit={handleSubmit}>
      <p>Username</p>
      <input className="form-control" type="text" id="taiKhoan" name="taiKhoan" onChange={handleChange} />
      <p className="mt-2">Pasword</p>
      <input className="form-control" type="password" id="matKhau" name="matKhau" onChange={handleChange} />
      <button className="btn btn-primary mt-2" type="submit">
        Login
      </button>
    </form>
  );
}
