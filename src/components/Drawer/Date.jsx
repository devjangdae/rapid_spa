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
import { dateUpdate, startDateUpdate, endDateUpdate } from "../../reducers/slices/dateSlice";

const { RangePicker } = DatePicker;


const drawerDateContainter = css`
  margin-bottom: 25px;
`;

function Date() {

  const dispatch = useDispatch();

  const disabledDate = (current) => {
    // Can not select days before today and today
    return current && current > dayjs().endOf("day");
  };
  
  const selectDate = (e) => {

    dispatch(
        startDateUpdate(
            e[0].format().substring(0, 4) +
            e[0].format().substring(5, 7) +
            e[0].format().substring(8, 10) +
            e[0].format().substring(11, 13) +
            e[0].format().substring(14, 16) +
            e[0].format().substring(17, 19)
        )
      );

      dispatch(
        endDateUpdate(
        e[1].format().substring(0, 4) +
        e[1].format().substring(5, 7) +
        e[1].format().substring(8, 10) +
        e[1].format().substring(11, 13) +
        e[1].format().substring(14, 16) +
        e[1].format().substring(17, 19)
        )
      );

      dispatch(
        dateUpdate(
            `${e[0].format().substring(0, 10)} ${e[0]
                .format()
                .substring(11, 19)} ~ ${e[1].format().substring(0, 10)} ${e[1]
                .format()
                .substring(11, 19)}`
        )
      );

    
}


    return (
          <div css={drawerDateContainter}>
            DATE
            <RangePicker showTime bordered={false} disabledDate={disabledDate}  onChange={(e)=>{selectDate(e)}}/>
          </div>
    );
  }
  
  export default Date;
  