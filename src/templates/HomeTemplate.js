import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Route } from "react-router-dom";
import HeaderHome from "../components/HeaderHome";

export const HomeTemplate = (props) => {
  const [screen, setScreen] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    window.onload = () => {
      setScreen({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.onresize = () => {
      setScreen({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    return () => {
      window.removeEventListener("onload");
      window.removeEventListener("onresize");
    };
  }, []);

  let myComponent = props.component;
  if (props.componentMobile && screen.width <= 768) {
    myComponent = props.componentMobile;
  }

  return (
    <Route
      exact
      path={props.path}
      render={(propsRoute) => {
        return (
          <div>
            {/* <HeaderHome /> */}
            {myComponent}
            {/* <div>Footer</div> */}
          </div>
        );
      }}
    />
  );
};
