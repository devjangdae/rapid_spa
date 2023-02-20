/* eslint-disable dot-notation */
/* eslint-disable no-plusplus */
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
import { caUpdate, caUpdate2, caUpdate3} from "../../reducers/slices/categorySlice";

import Category from "./Category";
import Machine from "./Machine";
import Date from "./Date";

const { RangePicker } = DatePicker;

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

// function Cate2() {
//   const dispatch = useDispatch();

//   // const categorys = useSelector((state) => {
//   //    console.log(state); // 카테고리 객체 콘솔로그
//   //   return state.categoryData.items.length;
//   // });

//   const categoryList = useSelector((state) => {
//     console.log(state); // 카테고리 객체 콘솔로그
//     return JSON.stringify(state.categoryData.items);
//  });

//   return (
//     <div>
//       {/* <button
//         onClick={() => {
//           dispatch(caUpdate(5));
//         }}
//       >
//         +
//       </button>
//       {`객체의 2개씩추가 개수 :  ${categorys}`} */}

//       <button
//         onClick={() => {
//           dispatch(caUpdate2({"hihi": "hihi"}));
//         }}
//       >
//         +
//       </button>
//       {`  ${categoryList}`}
//     </div>
    
//   );
// }




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
  min-height: 60vh;
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


const disabled_color = css`
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

const drawer_checkbox = css``;

const drawer_checkbox_group = css`
  display: "inline-block";
`;

const drawerButtonWrapper = css`
  flex-grow: 1;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;

const drawerButtonWrapper2 = css`
  display: flex;
  width: fill;
  align-items: flex-end;
  align-self: stretch;
  justify-content: flex-end;
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

function DrawerRapid() {

  const [open, setOpen] = useState(true);
  const [machineLine, setMachineLine] = useState([]);
  const [machineList, setMachineList] = useState([]);
  const [categoryList, setCategoryList] = useState([]);


  const accessToken = sessionStorage.getItem("accessToken");

  const dispatch = useDispatch();

  // const categorys = useSelector((state) => {
  //    console.log(state); // 카테고리 객체 콘솔로그
  //   return state.categoryData.items.length;
  // });

  const categoryLists = useSelector((state) => {
    console.log(state.categoryData.seleted); // 카테고리 객체 콘솔로그
    return JSON.stringify(state.categoryData.seleted);
 });
 

  
  const showDrawer = () => {
    setOpen(true);
  };

  const closeDrawer = () => {
    setOpen(false);
  };


  const searchBtn = () => {
    setOpen(false);

    var searchId2;
    var resultId2;
  };

  const selectCategory  = (e) => {

    const isChecked = e.target.checked;
    const checkedCategory = e.target.value;

    if (isChecked === true) {

      // setselectedCategory((selectedCategory) => [...selectedCategory, checkedCategory]);
      // categoryCode2.push(checkedCategory.substring(0,3));
      // categoryName2.push(checkedCategory.substring(4));

      dispatch(caUpdate3(checkedCategory));

    } else if (isChecked === false) {

      // setselectedCategory(selectedCategory.filter((item) => item !== checkedCategory));

      // const index = categoryCode2.indexOf(checkedCategory.substring(0,3));
      // if (index > -1) { 
      //   categoryCode2.splice(index, 1); 
      // }

      // const index2 = categoryCode2.indexOf(checkedCategory.substring(4));
      // if (index > -1) {
      //   categoryName2.splice(index2, 1); 
      // }

    }
  };

    return (
      <Drawer
      title="Option Select"
      placement="left"
      //onClose={closeDrawer}
      closable={false}
      open={open}
      size="large"
    >
      <div css={drawerContainter2}>
        <div css={drawerContainter}>
          <Date/>
          <Divider />
          <div css={machineCategoryWrapper}>
            <Machine/>
            <Category/>
          </div>
        </div>
        <div css={drawerButtonWrapper}>
          <Button css={blueButton}  onClick={closeDrawer}>Cancel</Button>
          <Button css={whiteButton} onClick={searchBtn}>Search</Button>
        </div>
      </div>
    </Drawer>
    );
  }
  
  export default DrawerRapid;
  