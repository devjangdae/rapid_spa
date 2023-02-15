/* eslint-disable prettier/prettier */
/* eslint-disable no-shadow */
/* eslint-disable react/no-unknown-property */
/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import axios from "axios";
import dayjs from "dayjs";
import {
  Layout,
  Avatar,
  Collapse,
  Button,
  Drawer,
  DatePicker,
  Tabs,
  Divider,
  Checkbox,
  Space,
  Empty,
  Tag,
} from "antd";
import {
  UserOutlined,
  LogoutOutlined,
  DoubleRightOutlined,
} from "@ant-design/icons";
import React, { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

// 툴킷
import { Provider, useSelector, useDispatch } from "react-redux";
import store from "../../reducers/store";
import { caUpdate } from "../../reducers/slices/categorySlice";

function Cate() {
  const dispatch = useDispatch();
  const categorys = useSelector((state) => {
    console.log(state); // 카테고리 객체 콘솔로그
    return state.categoryData.items.length;
  });
  return (
    <div style={{display: "none"}}>
      <button
        onClick={() => {
          dispatch(caUpdate(5));
        }}
      >
        +
      </button>
      {`객체의 2개씩추가 개수 :  ${categorys}`}
    </div>
  );
}

const { Header, Content, Footer } = Layout;
const { Panel } = Collapse;
const { RangePicker } = DatePicker;

// const { Title } = Typography;
// https://stackoverflow.com/questions/55763038/how-to-get-the-value-of-the-rangepicker-which-having-the-time-with-ant-design

const wrapper = css`
  display: flex;
  justify-content: space-between;
`;

const profileWrapper = css`
  display: flex;
`;

const logoutWrapper = css`
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

const numberWrapper = css`
  margin-right: 30px;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

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
  width: 275px;
  height: 45px;
  background: #ffffff;
  border: 1px solid #d9d9d9;
  border-radius: 10px;
  padding-left: 30px;
  padding-right: 30px;
  justify-content: space-between;
`;

const disabledColor = css`
  color: #d9d9d9;
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
  border: 1px solid #d9d9d9;
  border-radius: 10px;
  margin: 5px;
  font-family: "Saira";
`;

const machineCategoryWrapper = css`
  display: flex;
`;

const drawerMachineWrapper = css`
  margin-right: 80px;
`;

const machineHeaderWrapper = css`
  padding-bottom: 20px;
`;

const drawerDateContainter = css`
  margin-bottom: 25px;
`;

const drawerContainter = css`
  margin-bottom: 25px;
  font-family: "Saira";
`;

const drawerContainter2 = css`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const drawerButtonWrapper = css`
  flex-grow: 1;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
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

const disabledDate = (current) => {
  // Can not select days before today and today
  return current && current > dayjs().endOf("day");
};

function Mainrapid() {
  const navigate = useNavigate();

  const outLog = () => {
    console.log("로그아웃버튼클릭.");
    sessionStorage.clear();
    navigate("/");
  };

  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const [categoryList, setCategoryList] = useState([]);
  const [machineList, setMachineList] = useState([]);
  const [selectedCategory, setselectedCategory] = useState([]);
  const [uniqueLine, setUniqueLine] = useState([]);

  const accessToken = sessionStorage.getItem("accessToken");

  useEffect(() => {
    if (!sessionStorage.getItem("accessToken")) {
      console.log("로그인 토큰 정보가 없습니다. 로그인페이지로 이동합니다.");
      navigate("/");
    }

    const fetchMachine = async () => {
      
      try {
        const response = await axios.get("/rss/api/system/machinesInfo/", {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        const arrayUniqueByLine = [
          ...new Map(
            response.data.lists.map((item) => [item.line, item])
          ).values(),
        ];

        setUniqueLine(arrayUniqueByLine);
        setMachineList(response.data.lists);

      } catch (e) {
        console.log(e);
      }
    };

    fetchMachine();
  }, []);

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const response = await axios.get("/rss/api/system/categoryInfo/", {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        const tempList = [];
        for (let i = 0; i < response.data.lists.length; i += 1) {
          tempList.push(
            `${response.data.lists[i].categoryCode}_${response.data.lists[i].categoryName}`
          );
        }

        setCategoryList(tempList);

      } catch (e) {
        console.log(e);
      }
    };

    fetchCategory();
  }, []);

  // const MainHeader = styled(Layout.Header)`
  // font-family:'Saira';
  // color: "white";
  // background-color: '#1890FF';
  // `;

  // const MainFooter = styled(Layout.Footer)`
  // font-family:'Saira';
  // text-align: 'center';
  // `;

  const handleChange = (e) => {
    const isChecked = e.target.checked;
    // let isChecked = e.target.value;
    // do whatever you want with isChecked value

    if (isChecked === true) {
      const checkedCategory = e.target.value;
      setselectedCategory((selectedCategory) => [...selectedCategory, checkedCategory]);
      // setIsSelectedCategoryNull(false);
    } else if (isChecked === false) {
      const checkedCategory = e.target.value;
      setselectedCategory(selectedCategory.filter((item) => item !== checkedCategory));
      // setIsSelectedCategoryNull(true);
    }
  };

  return (
    <div>
      <Provider store={store}>
        <Layout
          style={{
            fontFamily: "Saira",
            minHeight: "100vh",
          }}
        >
          <Header
            style={{
              height: "65px",
              color: "white",
              fontFamily: "Saira",
              backgroundColor: "#1890FF",
            }}
          >
            <div css={wrapper}>
              <div>Rapid Collector</div>
              <div css={profileWrapper}>
                <div css={numberWrapper}>
                  <Avatar size={22} icon={<UserOutlined />} />
                  20220463
                </div>
                <div css={logoutWrapper}>
                  <LogoutOutlined
                    style={{ fontSize: "15px" }}
                    onClick={outLog}
                  />
                  Logout
                </div>
              </div>
            </div>
          </Header>

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
                    <div css={disabledColor}>Please Select Date</div>
                  </div>
                  <Cate />
                  <div>
                    <Button css={blueButton}>Reset</Button>
                    <Button css={whiteButton} onClick={showDrawer}>
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
                      <Panel header="MACHINE" key="1" />
                    </Collapse>
                  </div>
                  <div style={{ width: "50%" }}>
                    {/* {theArray.length ==0 ? (

                    <Collapse css={collapse} collapsible="disabled" >
                      <Panel header="CATEGORY" key="1"> Please Select Category</Panel>
                    </Collapse>

                  ) : (

                    <Collapse css={collapse} defaultActiveKey={['1']}>
                      <Panel header="CATEGORY" key="1">
                      {theArray.map((list) => (
                        <Tag color="orange" style={{marginTop:"3px", marginBottom:"3px"}}>
                          {list}
                        </Tag>
                        ))}
                      </Panel>
                    </Collapse>

                  )} */}

                    <Collapse css={collapse}>
                      <Panel header="CATEGORY" key="1">
                        {selectedCategory.length === 0 ? (
                          <div>Please Select Panel</div>
                        ) : (
                          selectedCategory.map((list) => (
                            <Tag
                              color="orange"
                              style={{ marginTop: "3px", marginBottom: "3px" }}
                            >
                              {list}
                            </Tag>
                          ))
                        )}
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

          <Footer style={{ backgroundColor: "#D9D9D9" ,display: "flex", justifyContent: "space-between"}}>
            <div>version 2023.02.06</div>
            <div>copyroght(c)</div>
          </Footer>

          <Drawer
            title="Option Select"
            placement="left"
            onClose={onClose}
            closable={false}
            open={open}
            size="large"
          >
            <div css={drawerContainter2}>
              <div css={drawerContainter}>
                <div css={drawerDateContainter}>
                  DATE
                  <RangePicker bordered={false} disabledDate={disabledDate} />
                </div>
                <Divider />

                <div css={machineCategoryWrapper}>
                  <div css={drawerMachineWrapper}>
                    <div css={machineHeaderWrapper}>MACHINE</div>
                    <div>
                      <Tabs
                        defaultActiveKey="1"
                        items={uniqueLine.map((line, i) => {
                          const id = String(i + 1);
                          return {
                            label: line.line,
                            key: id,
                            children: (
                              <Checkbox.Group
                                style={{
                                  width: "100%",
                                }}
                              >
                                <Space direction="vertical">
                                  {machineList &&
                                    machineList.map((machine, i) => (
                                      <Checkbox
                                        value={machineList[i].machineName}
                                      >
                                        {machineList[i].machineName}
                                      </Checkbox>
                                    ))}
                                </Space>
                              </Checkbox.Group>
                            ),
                          };
                        })}
                        tabPosition="left"
                      />
                    </div>
                  </div>
                  <div>
                    <div css={machineHeaderWrapper}>CATEGORY</div>
                    <div>
                      {/* <Tabs defaultActiveKey="1" items={items} tabPosition={"left"} /> */}

                      <Checkbox.Group
                        style={{
                          width: "100%",
                        }}
                      >
                        <Space direction="vertical">
                          {/* <Checkbox value="A">A</Checkbox>
                          <Checkbox value="A">A</Checkbox>
                          <Checkbox value="A">A</Checkbox> */}

                          {categoryList.map((list) => (
                            <Checkbox
                              value={list}
                              onChange={(e) => handleChange(e)}
                            >
                              {list}
                            </Checkbox>
                          ))}
                        </Space>
                      </Checkbox.Group>
                    </div>
                  </div>
                </div>
              </div>

              <div css={drawerButtonWrapper}>
                <Button css={blueButton}>Cancel</Button>
                <Button css={whiteButton}>Save</Button>
              </div>
            </div>
          </Drawer>
        </Layout>
      </Provider>
      <Outlet />
    </div>
  );
}

export default Mainrapid;
