/* eslint-disable no-plusplus */
/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import axios from "axios";
import { Checkbox, Space } from "antd";
import React, { useState, useEffect } from "react";

// 툴킷
import { Provider, useSelector, useDispatch } from "react-redux";
import {
  updateCheckedCategory,
  deleteCheckedCategory,
  updateCheckedCategoryCode,
  deleteCheckedCategoryCode,
  updateCheckedCategoryName,
  deleteCheckedCategoryName,
  initiateCheckedCategory,
  categoryErrorMsg,
} from "../../reducers/slices/categorySlice";

const machineHeaderWrapper = css`
  padding-bottom: 20px;
  display: flex;
`;

const checkAll = css`
  margin-right: 50px;
`;

const error = css`
  font-weight: 800;
  margin-top: 20px;
  font-size: 13px;
  color: red;
`;

function Category() {
  const [categoryList, setCategoryList] = useState([]);
  const [indeterminate, setIndeterminate] = useState(false);
  const [checkAll, setCheckAll] = useState(false);
  const [checked, setChecked] = useState([]);

  const accessToken = sessionStorage.getItem("accessToken");

  const dispatch = useDispatch();

  const a = useSelector((state) => state.categoryData.checkedCategory);
  const errorMsg = useSelector((state) => state.categoryData.categoryErrorMsg);

  useEffect(() => {
    let tempList = [];

    const fetchCategory = async () => {
      try {
        const response = await axios.get("/rss/api/system/categoryInfo/", {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        for (let i = 0; i < response.data.lists.length; i++) {
          tempList.push(
            `${response.data.lists[i].categoryCode}_${response.data.lists[i].categoryName}`
          );
        }

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

  const checkCategory = (e) => {
    const isChecked = e.target.checked;
    const checkedCategory = e.target.value;
    dispatch(categoryErrorMsg());

    if (isChecked === true) {
      dispatch(updateCheckedCategory(checkedCategory));
      dispatch(updateCheckedCategoryCode(checkedCategory.substring(0, 3)));
      dispatch(updateCheckedCategoryName(checkedCategory.substring(4)));
    } else if (isChecked === false) {
      dispatch(deleteCheckedCategory(checkedCategory));
      dispatch(deleteCheckedCategoryCode(checkedCategory.substring(0, 3)));
      dispatch(deleteCheckedCategoryName(checkedCategory.substring(4)));
    }
  };

  const onCheckAllChange = (e) => {
    setChecked(e.target.checked ? categoryList.map((item) => item) : []);
    setCheckAll(e.target.checked);
    dispatch(categoryErrorMsg());

    if (e.target.checked === true) {
      dispatch(initiateCheckedCategory());

      for (let i = 0; i < categoryList.length; i++) {
        dispatch(updateCheckedCategory(categoryList[i]));
      }
    } else if (e.target.checked === false) {
      dispatch(initiateCheckedCategory());
    }
  };

  return (
    <div>
      <div css={machineHeaderWrapper}>
        CATEGORY
        <Checkbox
          indeterminate={indeterminate}
          onChange={onCheckAllChange}
          checked={checkAll}
          style={{ marginLeft: "50px" }}
        >
          All
        </Checkbox>
      </div>
      <div>
        <Checkbox.Group
          style={{
            width: "100%",
          }}
          value={checked}
          onChange={(checkedValues) => {
            setChecked(checkedValues);
          }}
        >
          <Space direction="vertical">
            {categoryList.map((list) => (
              <Checkbox value={list} onChange={(e) => checkCategory(e)}>
                {list}
              </Checkbox>
            ))}
          </Space>
        </Checkbox.Group>
        <div css={error}>{errorMsg}</div>
      </div>
    </div>
  );
}

export default Category;
