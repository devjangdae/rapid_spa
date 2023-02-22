/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Skeleton } from "antd";

const skeletonBox = css`
  display: flex;
  min-height: 70vh;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  border-radius: 10px;
  margin: 5px;
  width: 1440px;
`;

const skeletonStyle = css`
  width: 640px;
`;

function SkeletonBox() {
  return (
    <div className="skeletonBox" css={skeletonBox}>
      <Skeleton
        css={skeletonStyle}
        active
        paragraph={{
          rows: 3,
        }}
      />
    </div>
  );
}

export default SkeletonBox;
