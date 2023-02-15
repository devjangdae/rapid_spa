/* eslint-disable import/named */
/* eslint-disable spaced-comment */
/* eslint-disable camelcase */
/* eslint-disable vars-on-top */
/* eslint-disable no-var */
/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
/* eslint-disable prefer-template */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/self-closing-comp */
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
import { caUpdate, caUpdate2} from "../../reducers/slices/categorySlice";

function Cate() {
  const dispatch = useDispatch();

  // const categorys = useSelector((state) => {
  //    console.log(state); // 카테고리 객체 콘솔로그
  //   return state.categoryData.items.length;
  // });

  const categoryList = useSelector((state) => {
    console.log(state); // 카테고리 객체 콘솔로그
    return JSON.stringify(state.categoryData.items);
 });

  return (
    <div>
      {/* <button
        onClick={() => {
          dispatch(caUpdate(5));
        }}
      >
        +
      </button>
      {`객체의 2개씩추가 개수 :  ${categorys}`} */}

      <button
        onClick={() => {
          dispatch(caUpdate2({"hihi": "hihi"}));
        }}
      >
        +
      </button>
      {`  ${categoryList}`}
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
  width: 49.6%;
  height: 45px;
  background: #ffffff;
  border: 1px solid #d9d9d9;
  border-radius: 10px;
  padding-left: 30px;
  padding-right: 30px;
  margin-right: 10px;
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

const disabled_color = css`
  color: #d9d9d9;
`;



const disabledDate = (current) => {
  // Can not select days before today and today
  return current && current > dayjs().endOf("day");
};

var categoryCode2=[];
var categoryName2=[];
var startDate2="";
var endDate2="";
var fabName2 = [];
var fabName3 = ['Line1'];
var machineName2 = [];
var searchId2;
var resultId2;

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

  const closeDrawer = () => {
    setOpen(false);
  };

 
  

  const [categoryList, setCategoryList] = useState([]);
  const [machineList, setMachineList] = useState([]);
  const [selectedCategory, setselectedCategory] = useState([]);
  const [uniqueLine, setUniqueLine] = useState([]);
  const [seletedMachine, setSeletedMachine] = useState([]);

  const [startDate, setstartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [date, setDate] = useState("");
  
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

  const selectDate = (e) => {

    setstartDate(e[0].format().substring(0,4)+ e[0].format().substring(5,7)+ e[0].format().substring(8,10)+ e[0].format().substring(11,13)+ e[0].format().substring(14,16)+ e[0].format().substring(17,19));
    setEndDate(e[1].format().substring(0,4)+ e[1].format().substring(5,7)+ e[1].format().substring(8,10)+ e[1].format().substring(11,13)+ e[1].format().substring(14,16)+ e[1].format().substring(17,19));
    setDate(e[0].format().substring(0,10)+" "+e[0].format().substring(11,19)+" ~ "+e[1].format().substring(0,10)+" "+e[1].format().substring(11,19));
    startDate2 = e[0].format().substring(0,4)+ e[0].format().substring(5,7)+ e[0].format().substring(8,10)+ e[0].format().substring(11,13)+ e[0].format().substring(14,16)+ e[0].format().substring(17,19);
    endDate2 = e[1].format().substring(0,4)+ e[1].format().substring(5,7)+ e[1].format().substring(8,10)+ e[1].format().substring(11,13)+ e[1].format().substring(14,16)+ e[1].format().substring(17,19);
    
}



  const selectCategory  = (e) => {
    const isChecked = e.target.checked;
    // let isChecked = e.target.value;
    // do whatever you want with isChecked value

    
    const checkedCategory = e.target.value;

    if (isChecked === true) {

      setselectedCategory((selectedCategory) => [...selectedCategory, checkedCategory]);
      categoryCode2.push(checkedCategory.substring(0,3));
      categoryName2.push(checkedCategory.substring(4));

    } else if (isChecked === false) {

      setselectedCategory(selectedCategory.filter((item) => item !== checkedCategory));

      const index = categoryCode2.indexOf(checkedCategory.substring(0,3));
      if (index > -1) { // only splice array when item is found
        categoryCode2.splice(index, 1); // 2nd parameter means remove one item only
      }

      const index2 = categoryCode2.indexOf(checkedCategory.substring(4));
      if (index > -1) { // only splice array when item is found
        categoryName2.splice(index2, 1); // 2nd parameter means remove one item only
      }

    }
  };

  const selectMachine = (e) => {
    const isChecked = e.target.checked;

    const checkedNameOfMachine = e.target.value;
    const checkedLineOfMachine = e.target.value2;

    if (isChecked === true) {

      setSeletedMachine((seletedMachine) => [...seletedMachine, checkedNameOfMachine]);

      machineName2.push(checkedNameOfMachine);
      fabName2.push(checkedLineOfMachine);


    } else if (isChecked === false) {

      setSeletedMachine(seletedMachine.filter((item) => item !== checkedNameOfMachine));

      const index = machineName2.indexOf(checkedNameOfMachine);
      if (index > -1) { 
        machineName2.splice(index, 1); 
      }
      

    }

  };

  const searchBtn = () => {
    setOpen(false);

    var searchId2;
    var resultId2;

    const fetchSearchURL = async () => {
      try {
        const response = await axios.post("/rss/api/ftp/search", {
          
            "fabNames": fabName3,
            "machineNames": machineName2,
            "categoryCodes": categoryCode2,
            "categoryNames": categoryName2,
            "startDate": startDate2,
            "endDate": endDate2,
            "folder": false, 
          },
          {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },}
        );



        console.log(response.data.searchId);
        searchId2 = response.data.searchId;
        //setSearchId3(response.data.searchId);

        try {
          const response = await axios.get(`/rss/api/ftp/search/${searchId2}`, {
            params:{"searchId":searchId2},
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          });
  
          console.log(response);
          resultId2 = response.data.resultUrl;

          try {
            const response = await axios.get(`${resultId2}`, {
              params:{"resultUrl":resultId2},
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            });
    
            console.log(response);

          } catch (e) {
            console.log(e);
          }
  
        } catch (e) {
          console.log(e);
        }

      } catch (e) {
        console.log(e);
      }
    };

    fetchSearchURL();

  
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
                    {date.length === 0 ? (
                      <div css={disabled_color}>Please Select Date</div>
                    ) : (
                        <Tag
                          color="green"
                          style={{ marginTop: "3px", marginBottom: "3px" }}
                        >
                          {date}
                        </Tag>
                    )}
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
                    <Panel header="MACHINE" key="1">
                  {seletedMachine.length === 0 ? (
                      <div>Please select at least one machine.</div>
                    ) : (
                      seletedMachine.map((list) => (
                        <Tag
                          color="purple"
                          style={{ marginTop: "3px", marginBottom: "3px" }}
                        >
                          {list}
                        </Tag>
                      ))
                    )}
                  </Panel>                    
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
                          <div>Please select at least one category</div>
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
            onClose={closeDrawer}
            closable={false}
            open={open}
            size="large"
          >
            <div css={drawerContainter2}>
              <div css={drawerContainter}>
                <div css={drawerDateContainter}>
                  DATE
                  <RangePicker showTime bordered={false} disabledDate={disabledDate}  onChange={(e)=>{selectDate(e)}}/>
                </div>
                <Divider />

                <div css={machineCategoryWrapper}>
                  <div css={drawerMachineWrapper}>
                    <div css={machineHeaderWrapper}>MACHINE</div>
                    <div>
                      <Tabs
                        defaultActiveKey="1"
                        items={uniqueLine.map((machine, i) => {
                          const id = String(i + 1);
                          return {
                            label: machine.line,
                            key: id,
                            children: (
                              <Checkbox.Group
                                style={{
                                  width: "100%",
                                }}
                              >
                                <Space direction="vertical">
                                {machineList && machineList.map((list,j) => {
                                if(machineList[j].line === machine.line){
                                  return(
                                    <Checkbox
                                    value={machineList[j].machineName}
                                    value2={machineList[j].line}
                                    onChange={(e) => selectMachine(e)}
                                  >
                                    {machineList[j].machineName}
                                  </Checkbox>
                                  )
                                }
                              })}
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
                              onChange={(e) => selectCategory(e)}
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
                <Button css={blueButton}  onClick={closeDrawer}>Cancel</Button>
                <Button css={whiteButton} onClick={searchBtn}>Search</Button>
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