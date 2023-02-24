/* eslint-disable import/no-duplicates */
/* eslint-disable no-plusplus */
/** @jsxImportSource @emotion/react */
import { Collapse, Button, Tag } from "antd";
import { DoubleRightOutlined } from "@ant-design/icons";
import { Provider, useSelector, useDispatch } from "react-redux";
import { current } from "@reduxjs/toolkit";
import {
  openDrawer,
  currentDateReset,
  currentStartDateReset,
  currentEndDateReset,
  currentCategoryReset,
  currentCategoryNameReset,
  currentCategoryCodeReset,
  currentFabMachineNameReset,
  currentMachineNameReset,
  currentFabNameReset,
} from "../../reducers/slices/mainSlice";

import {
  updateCheckedCategory,
  updateCheckedCategoryCode,
  updateCheckedCategoryName,
  checkedCategoryReset,
  checkedCategoryCodeReset,
  checkedCategoryNameReset,
  categoryErrorMsgReset,
} from "../../reducers/slices/categorySlice";

import {
  checkedDateUpdate,
  checkedStartDateUpdate,
  checkedEndDateUpdate,
} from "../../reducers/slices/dateSlice";
import {
  checkedFabMachineNameUpdate,
  checkedFabNameUpdate,
  checkedMachineName2Update,
  checkedFabMachineNameReset,
  checkedFabNameReset,
  checkedMachineName2Reset,
} from "../../reducers/slices/machineSlice";
import {
  dateBoxButtonWrap,
  dateBox,
  resetButton,
  selectButton,
  collapse,
  disabledColor,
  disabledDate,
  tagMargin,
  panelHeader,
  tagsBox,
  totalNumber,
  collapseWrapper,
  collapseContainer,
} from "./styles/index";

const { Panel } = Collapse;

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
    dispatch(currentCategoryCodeReset());
    dispatch(currentCategoryNameReset());

    dispatch(currentFabMachineNameReset());
    dispatch(currentFabNameReset());
    dispatch(currentMachineNameReset());
  };

  const selectBtn = () => {
    dispatch(openDrawer());

    // reset all... slicer안에 함수 구현해서 한번에 리셋할 예정
    // assign 또한 silcer에서 한번에 가능하지 않을까...??
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
      <div css={dateBoxButtonWrap}>
        <div css={dateBox}>
          <div css={currentDate.length ? null : disabledColor}>DATE</div>
          {currentDate.length !== 0 ? (
            <Tag color="green">{currentDate}</Tag>
          ) : (
            <div css={disabledDate}>Please Select Date</div>
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
      <div css={collapseContainer}>
        <div css={collapseWrapper}>
          <Collapse
            css={collapse}
            collapsible={currentCategory.length ? null : "disabled"}
          >
            <Panel
              header={
                <div css={panelHeader}>
                  <div>MACHINE</div>
                  {currentFabMachineName.length ? (
                    <div css={totalNumber}>
                      Total:&nbsp;{currentFabMachineName.length}
                    </div>
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
                  <Tag color="purple" css={tagMargin} key={list}>
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
        <div css={collapseWrapper}>
          <Collapse
            css={collapse}
            collapsible={currentCategory.length ? null : "disabled"}
          >
            <Panel
              header={
                <div css={panelHeader}>
                  <div>CATEGORY</div>
                  {currentCategory.length ? (
                    <div css={totalNumber}>
                      Total:&nbsp;{currentCategory.length}
                    </div>
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
                  <Tag color="orange" css={tagMargin} key={list}>
                    {list}
                  </Tag>
                ))
              ) : (
                <div css={disabledColor}>
                  Please select at least one Category
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
