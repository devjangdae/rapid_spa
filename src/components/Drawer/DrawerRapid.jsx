/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import axios from "axios";
import dayjs from "dayjs";
import { Button, Drawer, DatePicker, Divider } from "antd";
import React, { useState, useEffect } from "react";

// 툴킷
import { Provider, useSelector, useDispatch } from "react-redux";
import store from "../../reducers/store";
import { openDrawer, closeDrawer } from "../../reducers/slices/drawerSlice";

import Category from "./Category";
import Machine from "./Machine";
import Date from "./Date";

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
  const [open, setOpen] = useState(true);
  const [machineLine, setMachineLine] = useState([]);
  const [machineList, setMachineList] = useState([]);
  const [categoryList, setCategoryList] = useState([]);

  const accessToken = sessionStorage.getItem("accessToken");

  const dispatch = useDispatch();

  const drawerIsOpen = useSelector((state) => {
    // console.log(state.drawerData.isOpened);
    return JSON.stringify(state.drawerData.isOpened);
  });

  const closeDrawerRapid = () => {
    dispatch(closeDrawer());
  };

  const searchBtn = () => {
    dispatch(closeDrawer(false));
  };

  return (
    <Drawer
      title="Option Select"
      placement="left"
      // onClose={closeDrawer}
      closable={false}
      open={drawerIsOpen}
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
          {drawerIsOpen}
        </div>
      </div>
    </Drawer>
  );
}

export default DrawerRapid;
