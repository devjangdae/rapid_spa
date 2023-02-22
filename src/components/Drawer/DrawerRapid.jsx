/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import axios from "axios";
import dayjs from "dayjs";
import { Button, Drawer, DatePicker, Divider } from "antd";
import React, { useState, useEffect } from "react";

// 툴킷
import { Provider, useSelector, useDispatch } from "react-redux";
import { asyncUpFetch, up } from "../../reducers/slices/drawerSlice";
import {
  setFabNames,
  setMachineNames,
  setCategoryCodes,
  setCategoryName,
  setStartDate,
  setEndDate,
  asyncSearchThunk,
} from "../../reducers/slices/searchSlice";
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
import { machineErrorMsgUpdate } from "../../reducers/slices/machineSlice";
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

function Asdasdasd() {
  const dispatch = useDispatch();

  const count = useSelector((state) => {
    return state.asdasdasd.value;
  });

  const status = useSelector((state) => {
    return state.asdasdasd.status;
  });

  const searchStatus = useSelector((state) => {
    return state.search.status;
  });

  const searchIdString = useSelector((state) => {
    return state.search.searchId;
  });

  // fabNames  machineNames  categoryCodes  categoryName  startDate  endDate         "folder":false,        "depth":999
  // ArrayList<String> ArrayList<String>ArrayList<String>  String String             Boolean                Integer

  const checkedFabName = useSelector((state) => {
    return state.machineData.checkedFabName;
  });
  const checkedMachineName = useSelector((state) => {
    return state.machineData.checkedMachineName2;
  });
  const checkedCategoryCode = useSelector((state) => {
    return state.categoryData.checkedCategoryCode;
  });
  const checkedCategoryName = useSelector((state) => {
    return state.categoryData.checkedCategoryName;
  });
  const startDate = useSelector((state) => {
    return state.dateData.startDate;
  });
  const endDate = useSelector((state) => {
    return state.dateData.endDate;
  });

  return (
    <div>
      <Button
        onClick={() => {
          dispatch(up(2));
        }}
      >
        +
      </Button>
      <button
        onClick={() => {
          dispatch(asyncUpFetch());
        }}
      >
        + async fetch
      </button>
      <br />
      <div>
        {count} | {status} | {searchStatus} | {searchIdString}
      </div>
      <div>fabNames:{checkedFabName}</div>
      <div>machineNames:{checkedMachineName}</div>
      <div>categoryCodes:{checkedCategoryCode}</div>
      <div>categoryName:{checkedCategoryName}</div>
      <div>startDate:{startDate}</div>
      <div>endDate:{endDate}</div>
      <button
        onClick={() => {
          dispatch(setFabNames(checkedFabName));
          dispatch(setMachineNames(checkedMachineName));
          dispatch(setCategoryCodes(checkedCategoryCode));
          dispatch(setCategoryName(checkedCategoryName));
          dispatch(setStartDate(startDate));
          dispatch(setEndDate(endDate));
        }}
      >
        + searchDatasSend
      </button>
      <button
        onClick={() => {
          dispatch(asyncSearchThunk());
        }}
      >
        + async SearchThunk fetch
      </button>
    </div>
  );
}

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

  const checkedFabMachine = useSelector(
    (state) => state.machineData.checkedFabMachineName
  );

  const date = useSelector((state) => state.dateData.date);

  const closeDrawerRapid = () => {
    dispatch(closeDrawer());
  };

  const searchBtn = () => {
    if (
      checkedCategory.length === 0 ||
      date.length === 0 ||
      checkedFabMachine.length === 0
    ) {
      if (checkedCategory.length === 0) dispatch(updateCategoryErrorMsg());
      if (date.length === 0) dispatch(updateDateErrorMsg());
      if (checkedFabMachine.length === 0) dispatch(machineErrorMsgUpdate());
    } else {
      dispatch(sortCheckedCategory());
      dispatch(closeDrawer(false));
      // 검색로직
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
          <Provider store={store}>
            <Asdasdasd />
            <LoadingBox />
          </Provider>

          <Button css={whiteButton} onClick={searchBtn}>
            Search
          </Button>
        </div>
      </div>
    </Drawer>
  );
}

export default DrawerRapid;
