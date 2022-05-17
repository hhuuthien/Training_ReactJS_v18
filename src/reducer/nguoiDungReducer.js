import { createSlice } from "@reduxjs/toolkit";
import { http } from "../util/config";

const initialState = {
  userLogin: {},
};

const nguoiDungReducer = createSlice({
  name: "nguoiDungReducer",
  initialState,
  reducers: {
    dangNhapAction: (state, action) => {
      state.userLogin = action.payload;
    },
  },
});

export const { dangNhapAction } = nguoiDungReducer.actions;

export default nguoiDungReducer.reducer;

// -------------------- action thunk ---------------------

export const dangNhapAPI = (userLogin) => {
  return async (dispatch) => {
    try {
      let result = await http.post("/api/quanlynguoidung/dangnhap", userLogin);
      console.log(result);
      let userLoginResult = result.data.content;
      localStorage.setItem("USER_LOGIN", JSON.stringify(userLoginResult));
      localStorage.setItem("ACCESSTOKEN", userLoginResult.accessToken);

      const action = dangNhapAction(userLoginResult);
      dispatch(action);
    } catch (err) {
      console.log({ err });
    }
  };
};
