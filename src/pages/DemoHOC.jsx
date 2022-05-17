import React, { useState } from "react";
import ModalHOC from "../HOC/ModalHOC";

export default function DemoHOC(props) {
  const [component, setComponent] = useState(<></>);

  return (
    <div className="container">
      <button
        data-toggle="modal"
        data-target="#modelId"
        onClick={() => {
          setComponent(<p>Đăng ký</p>);
        }}
      >
        Đăng ký
      </button>
      <button
        data-toggle="modal"
        data-target="#modelId"
        onClick={() => {
          setComponent(<p>Đăng nhập</p>);
        }}
      >
        Đăng nhập
      </button>

      <ModalHOC content={component} />
    </div>
  );
}
