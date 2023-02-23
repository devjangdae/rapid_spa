/* eslint-disable import/no-duplicates */
/* eslint-disable no-plusplus */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Collapse, Button, Tag } from "antd";
import { DoubleRightOutlined } from "@ant-design/icons";
import { Provider, useSelector, useDispatch } from "react-redux";
import { current } from "@reduxjs/toolkit";
import {
  closeDrawer,
  openDrawer,
  clickResetButton,
  clickSearchButton,
  currentDateReset,
  currentStartDateReset,
  currentEndDateReset,
  currentCategoryReset,
  currentCategoryCodeReset,
  currentCategoryNameReset,
  currentFabMachineNameReset,
  currentMachineNameReset,
  currentFabNameReset,
} from "../../reducers/slices/mainSlice";

import {
  categoryErrorMsgUpdate,
  sortCheckedCategory,
  updateCheckedCategory,
  updateCheckedCategoryCode,
  updateCheckedCategoryName,
  checkedCategoryReset,
  checkedCategoryCodeReset,
  checkedCategoryNameReset,
  categoryErrorMsgReset,
} from "../../reducers/slices/categorySlice";

import {
  dateErrorMsgUpdate,
  checkedDateUpdate,
  checkedStartDateUpdate,
  checkedEndDateUpdate,
} from "../../reducers/slices/dateSlice";
import {
  machineErrorMsgUpdate,
  checkedFabMachineNameUpdate,
  checkedFabNameUpdate,
  checkedMachineName2Update,
  checkedFabMachineNameReset,
  checkedFabNameReset,
  checkedMachineName2Reset,
} from "../../reducers/slices/machineSlice";

const { Panel } = Collapse;

const dateBoxButtonWrap = css`
  width: fill;
  display: flex;
  justify-content: space-between;
  padding-right: 5px;
  padding-left: 5px;
  padding-top: 20px;
  align-items: flex-end;
`;

const dateBox = css`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  width: 49.6%;
  font-size: 14px;
  height: 46px;
  background: #ffffff;
  border-radius: 8px;
  padding-left: 40px;
  padding-right: 20px;
  margin-right: 0px;
  justify-content: space-between;
  border: 1px solid #d9d9d9;
`;

const resetButton = css`
  font-family: "Saira";
  color: #1890ff;
  border: 1px solid #1890ff;
  margin-right: 5px;
`;

const selectButton = css`
  font-family: "Saira";
`;

const collapse = css`
  background: #ffffff;
  border-radius: 10px;
  margin: 5px;
  font-family: "Saira";
`;

const disabledColor = css`
  color: #d9d9d9;
`;

const tagMargin = css`
  margin-top: 3px;
  margin-bottom: 3px;
`;

const panelHeader = css`
  color: "FFFFFF";
  display: flex;
  background: #f9f9f9;
  justify-content: space-between;
`;

function SelectBox() {
  const dispatch = useDispatch();

  const drawerIsOpen = useSelector((state) => state.mainData.isOpened);
  const isSearching = useSelector((state) => state.mainData.isSearching);

  const currentFabMachineName = useSelector((state) => {
    return state.mainData.currentFabMachineName;
  });
  const currentFabName = useSelector((state) => {
    return state.mainData.currentFabName;
  });
  const currentMachineName = useSelector((state) => {
    return state.mainData.currentMachineName;
  });
  const currentCategory = useSelector((state) => {
    return state.mainData.currentCategory;
  });
  const currentCategoryCode = useSelector((state) => {
    return state.mainData.currentCategoryCode;
  });
  const currentCategoryName = useSelector((state) => {
    return state.mainData.currentCategoryName;
  });
  const currentDate = useSelector((state) => {
    return state.mainData.currentDate;
  });
  const currentStartDate = useSelector((state) => {
    return state.mainData.currentStartDate;
  });
  const currentEndDate = useSelector((state) => {
    return state.mainData.currentEndDate;
  });

  const resetBtn = () => {
    // reset all... slicer안에 함수 구현해서 한번에 리셋할 예정
    dispatch(currentDateReset());
    dispatch(currentStartDateReset());
    dispatch(currentEndDateReset());

    dispatch(currentCategoryReset());
    dispatch(currentCategoryReset());
    dispatch(currentCategoryReset());

    dispatch(currentFabMachineNameReset());
    dispatch(currentFabNameReset());
    dispatch(currentMachineNameReset());
  };

  const selectBtn = () => {
    dispatch(openDrawer());

    // reset all... slicer안에 함수 구현해서 한번에 리셋할 예정
    dispatch(checkedCategoryReset());
    dispatch(checkedCategoryCodeReset());
    dispatch(checkedCategoryNameReset());

    dispatch(checkedFabMachineNameReset());
    dispatch(checkedFabNameReset());
    dispatch(checkedMachineName2Reset());

    dispatch(checkedDateUpdate(currentDate));
    dispatch(checkedStartDateUpdate(currentStartDate));
    dispatch(checkedEndDateUpdate(currentEndDate));

    for (let i = 0; i < currentCategory.length; i++) {
      dispatch(updateCheckedCategory(currentCategory[i]));
      dispatch(updateCheckedCategoryCode(currentCategoryCode[i]));
      dispatch(updateCheckedCategoryName(currentCategoryName[i]));
    }

    for (let i = 0; i < currentFabMachineName.length; i++) {
      dispatch(checkedFabMachineNameUpdate(currentFabMachineName[i]));
      dispatch(checkedMachineName2Update(currentMachineName[i]));
      dispatch(checkedFabNameUpdate(currentFabName[i]));
    }
  };

  return (
    <div>
      <div className="dateBoxButtonWrap" css={dateBoxButtonWrap}>
        <div className="dateBox" css={dateBox}>
          <div css={currentDate.length ? null : disabledColor}>DATE</div>
          {currentDate.length !== 0 ? (
            <Tag color="green">{currentDate}</Tag>
          ) : (
            <div css={disabledColor}>Please Select Date</div>
          )}
        </div>
        <div>
          <Button onClick={resetBtn} css={resetButton}>
            Reset
          </Button>
          <Button type="primary" onClick={selectBtn} css={selectButton}>
            Select <DoubleRightOutlined />
          </Button>
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <div style={{ width: "50%" }}>
          <Collapse
            css={collapse}
            collapsible={currentCategory.length ? null : "disabled"}
          >
            <Panel
              header={
                <div css={panelHeader}>
                  <div>MACHINE</div>
                  {currentFabMachineName.length ? (
                    <div>Total:{currentFabMachineName.length}</div>
                  ) : (
                    <div css={disabledColor}>
                      Please select at least one Machine
                    </div>
                  )}
                </div>
              }
              key="1"
            >
              {currentFabMachineName.length !== 0 ? (
                currentFabMachineName.map((list) => (
                  <Tag color="purple" css={tagMargin}>
                    {list}
                  </Tag>
                ))
              ) : (
                <div css={disabledColor}>
                  Please select at least one Machine
                </div>
              )}
            </Panel>
          </Collapse>
        </div>
        <div style={{ width: "50%" }}>
          <Collapse
            css={collapse}
            collapsible={currentCategory.length ? null : "disabled"}
          >
            <Panel
              header={
                <div css={panelHeader}>
                  <div>CATEGORY</div>
                  {currentCategory.length ? (
                    <div>Total:{currentCategory.length}</div>
                  ) : (
                    <div css={disabledColor}>
                      Please select at least one category
                    </div>
                  )}
                </div>
              }
              key="1"
            >
              {currentCategory.length !== 0 ? (
                currentCategory.map((list) => (
                  <Tag color="orange" css={tagMargin}>
                    {list}
                  </Tag>
                ))
              ) : (
                <div css={disabledColor}>
                  Please select at least one category
                </div>
              )}
            </Panel>
          </Collapse>
        </div>
      </div>
    </div>
  );
}

export default SelectBox;
