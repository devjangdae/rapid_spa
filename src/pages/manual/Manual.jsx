/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Provider } from "react-redux";
import { Collapse, Button, Empty } from "antd";
import { DoubleRightOutlined } from "@ant-design/icons";

import Header from "../../components/Header/index";
import Footer from "../../components/Footer/index";
import store from "../../reducers/store";
// import DrawerRapid from "../../components/Drawer/DrawerRapid";

const { Panel } = Collapse;

const topContainer = css`
  display: flex;
  flex-direction: column;
  width: 1440px;
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

const dataBoxEmpty = css`
  display: flex;
  min-height: 60vh;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  border-radius: 10px;
  margin: 5px;
  width: 1440px;
`;

const content = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function Manual() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!sessionStorage.getItem("accessToken")) {
      console.log("로그인 토큰 정보가 없습니다. 로그인페이지로 이동합니다.");
      navigate("/maintest");
    }
  }, []);

  return (
    <div className="basic-container">
      <Provider store={store}>
        <div className="basic-header">
          <Header />
        </div>
        <div className="content-container">
          <div css={content}>
            <div className="topContainer" css={topContainer}>
              <div className="dateContainer" css={dateContainer}>
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
                <div style={{ width: "50%" }} className="collapse">
                  <Collapse css={collapse}>
                    <Panel header="CATEGORY" key="1">
                      <div>Please select at least one category</div>
                    </Panel>
                  </Collapse>
                </div>
              </div>
            </div>

            <div className="dataBoxEmpty" css={dataBoxEmpty}>
              <Empty
                image={Empty.PRESENTED_IMAGE_SIMPLE}
                description={<span>Please Search for Data</span>}
              />
            </div>
          </div>
        </div>
        <div className="basic-footer">
          <Footer />
        </div>
        <Outlet />
      </Provider>
    </div>
  );
}

export default Manual;
