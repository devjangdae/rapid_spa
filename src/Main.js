/** @jsxImportSource @emotion/react */
import styled from "styled-components";
import { css, jsx } from "@emotion/react";
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
  Row,
  Col,
  Space, 
  Empty
} from "antd";
import {
  UserOutlined,
  LogoutOutlined,
  DoubleRightOutlined,
} from "@ant-design/icons";
import { useState, useEffect } from "react";
import React from "react";

const { Header, Content, Footer } = Layout;
const { Panel } = Collapse;
const { RangePicker } = DatePicker;

//const { Title } = Typography;

var lineArray = [[]];

const items = [
  {
    key: "1",
    label: `Tab 1`,
    children: "ch",
  },
  {
    key: "2",
    label: `Tab 2`,
    children: `Content of Tab Pane 2`,
  },
  {
    key: "3",
    label: `Tab 3`,
    children: `Content of Tab Pane 3`,
  },
];

const plainOptions = ["Apple", "Pear", "Orange"];

const title_wrapper = css`
  display: flex;
  font-size: 20px;
`;

const wrapper = css`
  display: flex;
  justify-content: space-between;
`;

const profile_wrapper = css`
  display: flex;
`;

const logout_wrapper = css`
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

const number_wrapper = css`
  margin-right: 30px;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

const top_container = css`
  width: 1440px;
  display: flex;
  flex-direction: column;
`;

const table_container = css`
display: flex;
width: 1440px;
flex-grow: 1;
min-height:60vh;
`;

const content_wrapper = css`
  height: 100%;
  width: 1440px;
  display: flex;
  flex-direction: column;
`;

const date_container = css`
  width: fill;
  display: flex;
  justify-content: space-between;
  padding-right: 5px;
  padding-left: 5px;
  padding-top: 20px;
  align-items: flex-end;
`;

const date_box = css`
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

const disabled_color = css`
  color: #d9d9d9;
`;

const blue_button = css`
  font-family: "Saira";
  color: #1890ff;
  border: 1px solid #1890ff;
  margin-right: 5px;
`;

const white_button = css`
  font-family: "Saira";
  background: #1890ff;
  color: #ffffff;
`;

const collapse_container = css`
  width: fill;
  display: flex;
`;

const date_wrapper = css`
  display: flex;
  padding: 0px;
  width: 270px;
  height: 45px;
`;

const collapse = css`
  background: #ffffff;
  border: 1px solid #d9d9d9;
  border-radius: 10px;
  width: 50%;
  margin: 5px;
  font-family: "Saira";
`;

const machine_category_wrapper = css`
  display: flex;
`;

const drawer_machine_wrapper = css`
  margin-right: 80px;
`;

const machine_header_wrapper = css`
  padding-bottom: 20px;
`;

const drawer_date_containter = css`
  margin-bottom: 25px;
`;

const drawer_containter = css`
  margin-bottom: 25px;
  font-family: "Saira";
`;

const drawer_containter2 = css`
height: 100%;
display: flex;
flex-direction: column;
`;


const drawer_checkbox = css``;

const drawer_checkbox_group = css`
  display: "inline-block";
`;

const drawer_button_wrapper = css`
flex-grow: 1;
display: flex;
justify-content: flex-end;
align-items: flex-end;
`;

const drawer_button_wrapper2 = css`
display: flex;
width:fill;
  align-items: flex-end;
  align-self: stretch;
  justify-content: flex-end;
`;

const empty = css`
display: flex;
width:1440px;
justify-content: center;
align-items: center;
background: #ffffff;
border-radius: 10px;
margin: 5px;

`;

const StyledCheckbox = styled(Checkbox.Group)`
.ant-checkbox-group{
  flex-direction: column!important;
}
`;

const disabledDate = (current) => {
  // Can not select days before today and today
  return current && current > dayjs().endOf("day");
};

function Main() {
  // const {
  //   token: { colorBgContainer },
  // } = theme.useToken();

  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const accessToken= "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhY2Nlc3NUb2tlbiIsImV4cCI6MTY3NjAwNzI4NSwiaWF0IjoxNjc1OTkyODg1LCJ1c2VySWQiOjEwMDAxLCJ1c2VyTmFtZSI6IjIwMjIwNDYzIiwicGVybWlzc2lvbiI6IiJ9.tOTY0dwdiLNny6GckURmyJlR88j73lBQrA6IUZrRzDU";

  useEffect(() => {

  	const fetchMachine = async () => {
  		try {
  			const response = await axios.get(
  				'/rss/api/system/machinesInfo/',
          {headers: {
            "Authorization": `Bearer ${accessToken}`
          }}
  			);
  			console.log(response.data.lists);
        console.log(JSON.stringify(response.data.lists[1].line));

        const arrayUniqueByKey = [...new Map(response.data.lists.map(item =>
          [item['line'], item])).values()];

      
        console.log(arrayUniqueByKey);
        console.log(arrayUniqueByKey[1]);
        console.log(arrayUniqueByKey[1].line);


        console.log(response.data.lists[1].line);
        console.log(response.data.lists.length);
    

        for(let i=0; i<arrayUniqueByKey.length; i++){
            for(let j=0; j<response.data.lists.length; j++){

                if((arrayUniqueByKey[i].line === response.data.lists[j].line)){
                  lineArray.push([arrayUniqueByKey[i].line, response.data.lists[j].machineName]);
                  
                } 
              

            }
          
        }

        console.log(lineArray);



  		} catch (e) {
  			console.log(e);
  		}
  	}

  	fetchMachine();

  }, []);

  // const MainHeader = styled(Layout.Header)`
  // font-family:'Saira';
  // color: "white";
  // background-color: '#1890FF';
  // `;

  // const MainFooter = styled(Layout.Footer)`
  // font-family:'Saira';
  // text-align: 'center';
  //`;

  return (
    <Layout
      style={{
        fontFamily: "Saira",
        minHeight: "100vh"
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
          <div css={title_wrapper}>Rapid Collector</div>
          <div css={profile_wrapper}>
            <div css={number_wrapper}>
              <Avatar size={22} icon={<UserOutlined />} />
              20220463
            </div>
            <div css={logout_wrapper}>
              <LogoutOutlined style={{ fontSize: "15px" }} />
              Logout
            </div>
          </div>
        </div>
      </Header>

      <Content style={{ justifyContent: "center", display: "flex", backgroundColor:'#F0F2F5' }}>
        <div css={content_wrapper}>
        <div css={top_container}>
          <div css={date_container}>
            <div css={date_box}>
              <div>DATE</div>
              <div css={disabled_color}>Please Select Date</div>
            </div>
            <div>
              <Button css={blue_button}>Reset</Button>
              <Button css={white_button} onClick={showDrawer}>
                Select <DoubleRightOutlined />
              </Button>
            </div>
          </div>
          <div css={collapse_container}>
            <Collapse css={collapse} collapsible="disabled" size="small" style={{color:"black"}}>
              <Panel header="MACHINE" key="1"></Panel>
            </Collapse>
            <Collapse css={collapse} collapsible="disabled">
              <Panel header="CATEGORY" key="2">
              </Panel>
            </Collapse>
          </div>
        </div>

        <div css={table_container}>
          <div css={empty}>
            <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description={<span>Please Search for Data</span>}/>
          </div>
        </div>
        
        </div>


      </Content>

      <Footer style={{height:"55px", backgroundColor:'#D9D9D9'}}>footer</Footer>

      <Drawer
        title="Option Select"
        placement="left"
        onClose={onClose}
        closable={false}
        open={open}
        size="large"
      
      >
        <div css={drawer_containter2}>
        <div css={drawer_containter}>
          <div css={drawer_date_containter}>
            DATE
            <RangePicker bordered={false} disabledDate={disabledDate} />
          </div>
          <Divider />

          <div css={machine_category_wrapper}>
            <div css={drawer_machine_wrapper}>
              <div css={machine_header_wrapper}>MACHINE</div>
              <div>
                <Tabs
                  defaultActiveKey="1"
                  items={new Array(3).fill(null).map((_, i) => {
                    const id = String(i + 1);
                    return {
                      label: `Fab_${id}`,
                      key: id,
                      children: (
                        <Checkbox.Group
                        style={{
                          width: '100%',
                        }}
                      >
                        <Space direction="vertical">
                        <Checkbox value="A">A</Checkbox>
                        <Checkbox value="A">A</Checkbox>
                        <Checkbox value="A">A</Checkbox>
                        </Space>
                      </Checkbox.Group>
                      ),
                    };
                  })}
                  tabPosition={"left"}
                />
              </div>
            </div>
            <div>
              <div css={machine_header_wrapper}>CATEGORY</div>
              <div>
                {/* <Tabs defaultActiveKey="1" items={items} tabPosition={"left"} /> */}
                <Tabs
                  defaultActiveKey="1"
                  items={new Array(3).fill(null).map((_, i) => {
                    const id = String(i + 1);
                    return {
                      label: `Fab_${id}`,
                      key: id,
                      children: (
                        <Checkbox.Group
                        style={{
                          width: '100%',
                        }}
                      >
                        <Space direction="vertical">
                        <Checkbox value="A">A</Checkbox>
                        <Checkbox value="A">A</Checkbox>
                        <Checkbox value="A">A</Checkbox>
                        </Space>
                      </Checkbox.Group>
                      ),
                    };
                  })}
                  tabPosition={"left"}
                />
              </div>
            </div>
          </div>
        </div>

        <div css={drawer_button_wrapper}>
          <Button css={blue_button}>Cancel</Button>
          <Button css={white_button}>Save</Button>
        </div>
        </div>
      </Drawer>
    </Layout>
  );
}

export default Main;
