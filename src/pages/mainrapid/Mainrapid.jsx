/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Layout, Collapse, Button, Empty } from "antd";
import { DoubleRightOutlined } from "@ant-design/icons";
import { Outlet } from "react-router-dom";

const { Content } = Layout;
const { Panel } = Collapse;

const topContainer = css`
  width: 1440px;
  display: flex;
  flex-direction: column;
`;

const tableContainer = css`
  display: flex;
  width: 1440px;
  flex-grow: 1;
  min-height: 60vh;
`;

const contentWrapper = css`
  height: 100%;
  width: 1440px;
  display: flex;
  flex-direction: column;
`;

const dateContainer = css`
  width: fill;
  display: flex;
  justify-content: space-between;
  padding-right: 5px;
  padding-left: 5px;
  padding-top: 20px;
  align-items: flex-end;
`;

const dateBox = css`
  display: flex;
  align-items: center;
  width: 49.6%;
  height: 45px;
  background: #ffffff;
  border-radius: 10px;
  padding-left: 30px;
  padding-right: 30px;
  margin-right: 10px;
  justify-content: space-between;
`;

const blueButton = css`
  font-family: "Saira";
  color: #1890ff;
  border: 1px solid #1890ff;
  margin-right: 5px;
`;

const whiteButton = css`
  font-family: "Saira";
  background: #1890ff;
  color: #ffffff;
`;

const collapseContainer = css`
  width: fill;
  display: flex;
`;

const collapse = css`
  background: #ffffff;
  border-radius: 10px;
  margin: 5px;
  font-family: "Saira";
`;

const empty = css`
  display: flex;
  width: 1440px;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  border-radius: 10px;
  margin: 5px;
`;

function Mainrapid() {
  return (
    <div>
      <Layout
        style={{
          fontFamily: "Saira",
          minHeight: "100vh",
        }}
      >
        <Content
          style={{
            justifyContent: "center",
            display: "flex",
            backgroundColor: "#F0F2F5",
          }}
        >
          <div css={contentWrapper}>
            <div css={topContainer}>
              <div css={dateContainer}>
                <div css={dateBox}>
                  <div>DATE</div>
                </div>
                <div>
                  <Button css={blueButton}>Reset</Button>
                  <Button css={whiteButton}>
                    Select <DoubleRightOutlined />
                  </Button>
                </div>
              </div>
              <div css={collapseContainer}>
                <div style={{ width: "50%" }}>
                  <Collapse
                    css={collapse}
                    size="small"
                    style={{ color: "black" }}
                  >
                    <Panel header="MACHINE" key="1">
                      <div>Please select at least one machine.</div>
                    </Panel>
                  </Collapse>
                </div>
                <div style={{ width: "50%" }}>
                  <Collapse css={collapse}>
                    <Panel header="CATEGORY" key="1">
                      <div>Please select at least one category</div>
                    </Panel>
                  </Collapse>
                </div>
              </div>
            </div>

            <div css={tableContainer}>
              <div css={empty}>
                <Empty
                  image={Empty.PRESENTED_IMAGE_SIMPLE}
                  description={<span>Please Search for Data</span>}
                />
              </div>
            </div>
          </div>
        </Content>
      </Layout>
      <Outlet />
    </div>
  );
}

export default Mainrapid;
