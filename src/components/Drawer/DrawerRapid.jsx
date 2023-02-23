/* eslint-disable no-plusplus */
/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import axios from "axios";
import dayjs from "dayjs";
import { Button, Drawer, DatePicker, Divider } from "antd";
import React, { useState, useEffect } from "react";

// 툴킷
import { useSelector, useDispatch } from "react-redux";
import { asyncSearchThunk } from "../../reducers/slices/searchSlice";
import {
  openDrawer,
  closeDrawer,
  clickResetButton,
  clickSearchButton,
  currentDateUpdate,
  currentStartDateUpdate,
  currentEndDateUpdate,
  currentCategoryUpdate,
  currentCategoryCodeUpdate,
  currentCategoryNameUpdate,
  currentFabMachineNameUpdate,
  currentMachineNameUpdate,
  currentFabNameUpdate,
  currentCategoryReset,
  currentCategoryCodeReset,
  currentCategoryNameReset,
  currentFabMachineNameReset,
  currentMachineNameReset,
  currentFabNameReset,
} from "../../reducers/slices/mainSlice";
import {
  categoryErrorMsgUpdate,
  categoryErrorMsgReset,
  sortCheckedCategory,
} from "../../reducers/slices/categorySlice";

import Category from "./Category";
import Machine from "./Machine";
import Date from "./Date";
import {
  dateErrorMsgUpdate,
  dateErrorMsgReset,
} from "../../reducers/slices/dateSlice";
import {
  machineErrorMsgUpdate,
  machineErrorMsgReset,
} from "../../reducers/slices/machineSlice";
import LoadingBox from "../LoadingBox/index";

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

  const checkedDate = useSelector((state) => state.dateData.checkedDate);
  const checkedStartDate = useSelector(
    (state) => state.dateData.checkedStartDate
  );
  const checkedEndDate = useSelector((state) => state.dateData.checkedEndDate);

  const checkedCategory = useSelector(
    (state) => state.categoryData.checkedCategory
  );

  const checkedCategoryCode = useSelector(
    (state) => state.categoryData.checkedCategoryCode
  );

  const checkedCategoryName = useSelector(
    (state) => state.categoryData.checkedCategoryName
  );

  const checkedFabMachine = useSelector(
    (state) => state.machineData.checkedFabMachineName
  );

  const checkedMachineName = useSelector(
    (state) => state.machineData.checkedMachineName2
  );

  const checkedFabName = useSelector(
    (state) => state.machineData.checkedFabName
  );

  const cancelBtn = () => {
    dispatch(closeDrawer());
    dispatch(dateErrorMsgReset());
    dispatch(categoryErrorMsgReset());
    dispatch(machineErrorMsgReset());
  };

  const [isRequest, setRequest] = useState(false);

  const searchBtn = () => {
    if (
      checkedCategory.length === 0 ||
      checkedDate.length === 0 ||
      checkedFabMachine.length === 0
    ) {
      if (checkedCategory.length === 0) dispatch(categoryErrorMsgUpdate());
      if (checkedDate.length === 0) dispatch(dateErrorMsgUpdate());
      if (checkedFabMachine.length === 0) dispatch(machineErrorMsgUpdate());
    } else {
      // reset all... slicer안에 함수 구현해서 한번에 리셋할 예정
      // assign 또한 silcer에서 한번에 가능하지 않을까...??
      dispatch(currentDateUpdate(checkedDate));
      dispatch(currentStartDateUpdate(checkedStartDate));
      dispatch(currentEndDateUpdate(checkedEndDate));
      dispatch(currentCategoryReset());
      dispatch(currentCategoryCodeReset());
      dispatch(currentCategoryNameReset());
      dispatch(currentFabMachineNameReset());
      dispatch(currentFabNameReset());
      dispatch(currentMachineNameReset());

      for (let i = 0; i < checkedCategory.length; i++) {
        dispatch(currentCategoryUpdate(checkedCategory[i]));
        dispatch(currentCategoryCodeUpdate(checkedCategoryCode[i]));
        dispatch(currentCategoryNameUpdate(checkedCategoryName[i]));
      }
      for (let i = 0; i < checkedFabMachine.length; i++) {
        dispatch(currentFabMachineNameUpdate(checkedFabMachine[i]));
        dispatch(currentMachineNameUpdate(checkedMachineName[i]));
        dispatch(currentFabNameUpdate(checkedFabName[i]));
      }
      // dispatch(sortCheckedCategory());
      dispatch(closeDrawer(false));

      // search 시작
      const thunkParameterArray = [
        checkedFabName,
        checkedMachineName,
        checkedCategoryCode,
        checkedCategoryName,
        checkedStartDate,
        checkedEndDate,
      ];
      dispatch(asyncSearchThunk(thunkParameterArray));
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
          <Button css={blueButton} onClick={cancelBtn}>
            Cancel
          </Button>
          <LoadingBox />

          <Button type="primary" onClick={searchBtn}>
            Search
          </Button>
        </div>
      </div>
    </Drawer>
  );
}

export default DrawerRapid;
