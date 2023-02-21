/* eslint-disable react/jsx-boolean-value */
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

  const checkedCategory = useSelector(
    (state) => state.categoryData.checkedCategory
  );
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

      setIndeterminate(
        checkedCategory.length && checkedCategory.length !== tempList.length
      );
      setCheckAll(checkedCategory.length === tempList.length);
    };

    fetchCategory();
  }, []);

  useEffect(() => {
    setIndeterminate(
      checkedCategory.length && checkedCategory.length !== categoryList.length
    );
    setCheckAll(checkedCategory.length === categoryList.length);
  }, [checkedCategory]);

  const checkCategory = (e, categoryValue) => {
    const isChecked = e.target.checked;

    dispatch(categoryErrorMsg());

    if (isChecked === true) {
      dispatch(updateCheckedCategory(categoryValue));
      dispatch(updateCheckedCategoryCode(categoryValue.substring(0, 3)));
      dispatch(updateCheckedCategoryName(categoryValue.substring(4)));
    } else if (isChecked === false) {
      dispatch(deleteCheckedCategory(categoryValue));
      dispatch(deleteCheckedCategoryCode(categoryValue.substring(0, 3)));
      dispatch(deleteCheckedCategoryName(categoryValue.substring(4)));
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
        {/* <Checkbox.Group
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
        </Checkbox.Group> */}

        <Space direction="vertical">
          {categoryList.map((list) => (
            <Checkbox
              checked={checkedCategory.includes(list)}
              onChange={(e) => checkCategory(e, list)}
            >
              {list}
            </Checkbox>
          ))}
        </Space>
        {checkedCategory}
        <div css={error}>{errorMsg}</div>
      </div>
    </div>
  );
}

export default Category;
