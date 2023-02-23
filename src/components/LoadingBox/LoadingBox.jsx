/** @jsxImportSource @emotion/react */
import { Button, Modal, Spin } from "antd";
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
