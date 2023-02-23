/** @jsxImportSource @emotion/react */
import { Skeleton } from "antd";
import { skeletonStyle, skeletonBox } from "./styles/index";

function SkeletonBox() {
  return (
    <div css={skeletonBox}>
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
