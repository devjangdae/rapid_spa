/** @jsxImportSource @emotion/react */
import { titleBox, titleTextWrap, titleText } from "./styles/index";

function TitleBox() {
  return (
    <div css={[titleBox]}>
      <div css={[titleTextWrap]}>
        <div css={[titleText]}>Rapid</div>
        <div css={[titleText]}>Collector</div>
      </div>
    </div>
  );
}

export default TitleBox;
