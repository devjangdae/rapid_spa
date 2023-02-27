/* eslint-disable consistent-return */
/** @jsxImportSource @emotion/react */
import { Button, Modal, Spin } from "antd";
import { useEffect, useState, useRef } from "react";
import { spinStyle } from "./styles/index";

function SpinBox() {
  return (
    <div css={spinStyle}>
      <Spin tip="Loading" size="large" />
    </div>
  );
}

function LoadingBox() {
  const [modal, contextHolder] = Modal.useModal();

  // ##################### useInterval #####################
  // function useInterval(callback, delay) {
  //   const savedCallback = useRef();
  //   useEffect(() => {
  //     savedCallback.current = callback;
  //   }, [callback]);

  //   useEffect(() => {
  //     function tick() {
  //       savedCallback.current();
  //     }
  //     if (delay !== null) {
  //       let id = setInterval(tick, delay);
  //       return () => clearInterval(id);
  //     }
  //   }, [delay]);
  // }
  // ##################### useInterval #####################

  // const [count, setCount] = useState(0);

  // useInterval(() => {
  //   setCount((count) => count + 1);
  //   console.log(count);
  // }, 1000);

  const countDown = () => {
    let secondsToGo = 3;

    const instance = modal.success({
      title: "3초 검색중",
      content: <SpinBox />,
    });

    const timer = setInterval(() => {
      secondsToGo -= 1;
    }, 1000);

    setTimeout(() => {
      clearInterval(timer);
      instance.destroy();
    }, secondsToGo * 1000);
  };

  return (
    <>
      <Button onClick={countDown}>Open modal to close in 3s</Button>
      {contextHolder}
    </>
  );
}

export default LoadingBox;
