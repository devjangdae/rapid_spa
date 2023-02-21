/* eslint-disable no-else-return */
/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import axios from "axios";
import dayjs from "dayjs";
import { Button, Drawer, DatePicker, Divider } from "antd";
import React, { useState, useEffect } from "react";

// 툴킷
import { Provider, useSelector, useDispatch } from "react-redux";
import store from "../../reducers/store";
import {
  openDrawer,
  closeDrawer,
  clickResetButton,
  clickSearchButton,
} from "../../reducers/slices/mainSlice";
import {
  updateCategoryErrorMsg,
  sortCheckedCategory,
} from "../../reducers/slices/categorySlice";

import Category from "./Category";
import Machine from "./Machine";
import Date from "./Date";
import { updateDateErrorMsg } from "../../reducers/slices/dateSlice";
import { updateMachineErrorMsg } from "../../reducers/slices/machineSlice";

const { RangePicker } = DatePicker;

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

const machineCategoryWrapper = css`
  display: flex;
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

function DrawerRapid() {
  const [open, setOpen] = useState("");
  const [dateError, setdateError] = useState("");
  const [machineError, setMachineError] = useState("");
  const [categoryError, setCategoryError] = useState("");

  const dispatch = useDispatch();

  const drawerIsOpen = useSelector((state) => state.mainData.isOpened);

  const checkedCategory = useSelector(
    (state) => state.categoryData.checkedCategory
  );

  const checkedMachine = useSelector((state) => state.machineData.checked);

  const date = useSelector((state) => state.dateData.date);

  const closeDrawerRapid = () => {
    dispatch(closeDrawer());
  };

  const searchBtn = () => {
    if (
      checkedCategory.length === 0 ||
      date.length === 0 ||
      checkedMachine.length === 0
    ) {
      if (checkedCategory.length === 0) dispatch(updateCategoryErrorMsg());
      if (date.length === 0) dispatch(updateDateErrorMsg());
      if (checkedMachine.length === 0) dispatch(updateMachineErrorMsg());
    } else {
      dispatch(sortCheckedCategory());
      dispatch(closeDrawer(false));
    }
  };

  return (
    <Drawer
      title="Option Select"
      placement="left"
      // onClose={closeDrawer}
      closable={false}
      open={drawerIsOpen}
      // style={{ width: "900px" }}
      size="large"
    >
      <div css={drawerContainter2}>
        <div css={drawerContainter}>
          <Date />
          <Divider />
          <div css={machineCategoryWrapper}>
            <Machine />
            <Category />
          </div>
        </div>
        <div css={drawerButtonWrapper}>
          <Button css={blueButton} onClick={closeDrawerRapid}>
            Cancel
          </Button>
          <Button css={whiteButton} onClick={searchBtn}>
            Search
          </Button>
        </div>
      </div>
    </Drawer>
  );
}

export default DrawerRapid;
