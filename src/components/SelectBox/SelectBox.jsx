/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Collapse, Button } from "antd";
import { DoubleRightOutlined } from "@ant-design/icons";

const { Panel } = Collapse;

const dateBoxButtonWrap = css`
  width: fill;
  display: flex;
  justify-content: space-between;
  padding-right: 5px;
  padding-left: 5px;
  padding-top: 20px;
  align-items: flex-end;
`;

const dateBox = css`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 318px;
  font-size: 14px;
  height: 46px;
  background: #ffffff;
  border-radius: 8px;
  padding-left: 40px;
  padding-right: 0px;
  margin-right: 0px;
  justify-content: space-between;
  border: 1px solid #d9d9d9;
`;

const selectButton = css`
  font-family: "Saira";
  color: #1890ff;
  border: 1px solid #1890ff;
  margin-right: 5px;
`;

const resetButton = css`
  font-family: "Saira";
  background: #1890ff;
  color: #ffffff;
`;

const collapse = css`
  background: #ffffff;
  border-radius: 10px;
  margin: 5px;
  font-family: "Saira";
`;

const content = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function SelectBox() {
  return (
    <div>
      <div className="dateBoxButtonWrap" css={dateBoxButtonWrap}>
        <div className="dateBox" css={dateBox}>
          <div>DATE</div>
        </div>
        <div>
          <Button className="selectButton" css={selectButton}>
            Reset
          </Button>
          <Button className="resetButton" css={resetButton}>
            Select <DoubleRightOutlined />
          </Button>
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <div style={{ width: "50%" }} className="collapse">
          <Collapse css={collapse} size="small" style={{ color: "black" }}>
            <Panel header="MACHINE" key="1">
              <div>Please select at least one machine.</div>
            </Panel>
          </Collapse>
        </div>
        <div style={{ width: "50%" }} className="collapse">
          <Collapse css={collapse}>
            <Panel header="CATEGORY" key="1">
              <div>Please select at least one category</div>
            </Panel>
          </Collapse>
        </div>
      </div>
    </div>
  );
}

export default SelectBox;
