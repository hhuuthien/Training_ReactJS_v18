import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { http, TOKEN } from "../util/config";

const initialState = {
  arrayMovie: [1, 2, 3],
};

const movieReducer = createSlice({
  name: "movieReducer",
  initialState,
  reducers: {
    layDanhSachPhim: (state, action) => {
      // Không cần clone object hoặc array
      state.arrayMovie = action.payload;
    },
  },
});

export const { layDanhSachPhim } = movieReducer.actions;

export default movieReducer.reducer;

// -------------------- action thunk ---------------------
export const getFilmApiAction = () => {
  return async (dispatch) => {
    try {
      //   let result = await axios({
      //     url: "https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
      //     method: "GET",
      //     headers: {
      //       TokenCybersoft: TOKEN,
      //     },
      //   });

      let result = await http.get("/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01");

      const action = layDanhSachPhim(result.data.content);
      dispatch(action);
    } catch (err) {
      console.log({ err });
    }
  };
};
