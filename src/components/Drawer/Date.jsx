/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import dayjs from "dayjs";
import { DatePicker } from "antd";

// 툴킷
import { Provider, useSelector, useDispatch } from "react-redux";
import {
  dateUpdate,
  startDateUpdate,
  endDateUpdate,
  updateDateErrorMsg,
  dateMsg,
} from "../../reducers/slices/dateSlice";

const { RangePicker } = DatePicker;

const drawerDateContainter = css`
  margin-bottom: 25px;
`;

const error = css`
  font-weight: 800;
  margin-top: 20px;
  font-size: 13px;
  color: red;
`;

function Date() {
  const dispatch = useDispatch();

  const errorMsg = useSelector((state) => state.dateData.dateErrorMsg);

  const disabledDate = (current) => {
    // Can not select days before today and today
    return current && current > dayjs().endOf("day");
  };

  const selectDate = (e) => {
    dispatch(dateMsg());

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
  };

  return (
    <div css={drawerDateContainter}>
      <div>
        DATE
        <RangePicker
          showTime
          bordered={false}
          disabledDate={disabledDate}
          onChange={(e) => {
            selectDate(e);
          }}
        />
      </div>
      <div css={error}>{errorMsg}</div>
    </div>
  );
}

export default Date;
