import React from "react";
import { Route } from "react-router-dom";
import HeaderHome from "../components/HeaderHome";

export const HomeTemplate = (props) => {
  return (
    <Route
      exact
      path={props.path}
      render={(propsRoute) => {
        return (
          <div>
            <HeaderHome />
            {props.component}
            <div>Footer</div>
          </div>
        );
      }}
    />
  );
};
