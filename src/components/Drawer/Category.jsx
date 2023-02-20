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
import { caUpdate, caUpdate2, caUpdate3, caUpdate3_, caUpdate4, caUpdate5, seletedDefault } from "../../reducers/slices/categorySlice";

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





const machineHeaderWrapper = css`
  padding-bottom: 20px;
  display: flex;
`;

const checkAll = css`
margin-right:50px;
`;



function Category() {

  const [categoryList, setCategoryList] = useState([]);
  const [indeterminate, setIndeterminate] = useState(false);
  const [checkAll, setCheckAll] = useState(false);
  const [checked, setChecked] = useState([]);




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

 

  useEffect(() => {

    var tempList = [];

    const fetchCategory = async () => {
      try {
        const response = await axios.get("/rss/api/system/categoryInfo/", {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        console.log(response.data.lists);
        //dispatch(caUpdate2(response.data.lists));
        

    
        for (let i = 0; i < response.data.lists.length; i++) {
          tempList.push(
            response.data.lists[i].categoryCode +
              "_" +
              response.data.lists[i].categoryName
          );
        }

        console.log(tempList);
        setCategoryList(tempList);

      } catch (e) {
        console.log(e);
      }

    setIndeterminate(checked.length && checked.length !== tempList.length);
    setCheckAll(checked.length === tempList.length);

    };

    fetchCategory();
  }, []);


  useEffect(() => {
    setIndeterminate(checked.length && checked.length !== categoryList.length);
    setCheckAll(checked.length === categoryList.length);
  }, [checked]);


  const selectCategory  = (e) => {

    const isChecked = e.target.checked;
    const checkedCategory = e.target.value;

    if (isChecked === true) {

      dispatch(caUpdate3(checkedCategory));
      dispatch(caUpdate4(checkedCategory.substring(0,3)));
      dispatch(caUpdate5(checkedCategory.substring(4)));

    } else if (isChecked === false) {

      dispatch(caUpdate3_(checkedCategory));
      dispatch(caUpdate3_(checkedCategory.substring(0,3)));
      dispatch(caUpdate3_(checkedCategory.substring(4)));

    }
  };

  const onCheckAllChange = (e) => {

    setChecked(e.target.checked ? categoryList.map((item) => item) : []);
    setCheckAll(e.target.checked);
    
    if(e.target.checked === true){

        dispatch(seletedDefault());

        for(let i=0; i<categoryList.length; i++){
            dispatch(caUpdate3(categoryList[i]));
        } 

    }else if(e.target.checked === false){
        // 
        dispatch(seletedDefault());
    }
  };

  

    return (
            <div>
              <div css={machineHeaderWrapper}>
                CATEGORY 
                <Checkbox  indeterminate={indeterminate}  onChange={onCheckAllChange}  checked={checkAll} style={{marginLeft:'50px'}}>All</Checkbox>
                </div>
              <div>
                {/* <Tabs defaultActiveKey="1" items={items} tabPosition={"left"} /> */}

                <Checkbox.Group
                  style={{
                    width: "100%",
                  }}
                  value={checked}
                  onChange={(checkedValues) => {
                    console.log(checkedValues);
                    setChecked(checkedValues);
                  }}

                >
                  <Space direction="vertical">
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
                {/* <Cate></Cate> */}
                {checked}
              </div>
            </div>

    );
  }
  
  export default Category;