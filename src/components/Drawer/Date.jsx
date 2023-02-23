/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import dayjs from "dayjs";
import { DatePicker } from "antd";

// 툴킷
import { Provider, useSelector, useDispatch } from "react-redux";
import {
  checkedDateUpdate,
  checkedStartDateUpdate,
  checkedEndDateUpdate,
  checkedDefaultStartDateUpdate,
  checkedDefaultEndDateUpdate,
  dateErrorMsgReset,
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

  const checkedDefaultStartDate = useSelector(
    (state) => state.dateData.checkedDefaultStartDate
  );
  const checkedDefaultEndDate = useSelector(
    (state) => state.dateData.checkedDefaultEndDate
  );
  const errorMsg = useSelector((state) => state.dateData.dateErrorMsg);

  const disabledDate = (current) => {
    // Can not select days before today and today
    return current && current > dayjs().endOf("day");
  };

  const selectDate = (e) => {
    dispatch(dateErrorMsgReset());

    dispatch(checkedDefaultStartDateUpdate(e[0].format()));
    dispatch(
      checkedStartDateUpdate(
        e[0].format().substring(0, 4) +
          e[0].format().substring(5, 7) +
          e[0].format().substring(8, 10) +
          e[0].format().substring(11, 13) +
          e[0].format().substring(14, 16) +
          e[0].format().substring(17, 19)
      )
    );

    dispatch(checkedDefaultEndDateUpdate(e[1].format()));
    dispatch(
      checkedEndDateUpdate(
        e[1].format().substring(0, 4) +
          e[1].format().substring(5, 7) +
          e[1].format().substring(8, 10) +
          e[1].format().substring(11, 13) +
          e[1].format().substring(14, 16) +
          e[1].format().substring(17, 19)
      )
    );

    dispatch(
      checkedEndDateUpdate(
        e[1].format().substring(0, 4) +
          e[1].format().substring(5, 7) +
          e[1].format().substring(8, 10) +
          e[1].format().substring(11, 13) +
          e[1].format().substring(14, 16) +
          e[1].format().substring(17, 19)
      )
    );

    dispatch(
      checkedDateUpdate(
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
          value={
            checkedDefaultStartDate.length && checkedDefaultEndDate.length
              ? [dayjs(checkedDefaultStartDate), dayjs(checkedDefaultEndDate)]
              : null
          }
        />
      </div>
      <div css={error}>{errorMsg}</div>
    </div>
  );
}

export default Date;
