/** @jsxImportSource @emotion/react */
import { notFoundStyle } from "./styles/index";

function NotFoundBox() {
  return (
    <div>
      <div css={[notFoundStyle]}>404 페이지입니다.</div>
    </div>
  );
}

export default NotFoundBox;
