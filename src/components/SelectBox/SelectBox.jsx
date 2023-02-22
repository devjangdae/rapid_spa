/* eslint-disable no-plusplus */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Collapse, Button, Tag } from "antd";
import { DoubleRightOutlined } from "@ant-design/icons";
import { Provider, useSelector, useDispatch } from "react-redux";
import {
  closeDrawer,
  openDrawer,
  clickResetButton,
  clickSearchButton,
} from "../../reducers/slices/mainSlice";

import {
  updateCategoryErrorMsg,
  sortCheckedCategory,
  updateCheckedCategory,
  updateCheckedCategoryCode,
  updateCheckedCategoryName,
  checkedCategoryReset,
  checkedCategoryCodeReset,
  checkedCategoryNameReset,
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

const selectButton = css`
  font-family: "Saira";
  color: #1890ff;
  border: 1px solid #1890ff;
  margin-right: 5px;
`;

const resetButton = css`
  font-family: "Saira";
  background: #1890ff;
  color: #ffffff;
`;

const collapse = css`
  background: #ffffff;
  border-radius: 10px;
  margin: 5px;
  font-family: "Saira";
`;

const content = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const disabledColor = css`
  color: #d9d9d9;
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

  const currentFabName2 = useSelector((state) => {
    return state.mainData.currentFabName;
  });

  const selectBtn = () => {
    dispatch(openDrawer());

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
          <div>DATE</div>
          {currentDate.length !== 0 ? (
            <Tag
              color="green"
              style={{ marginTop: "3px", marginBottom: "3px" }}
            >
              {currentDate}
            </Tag>
          ) : (
            <div css={disabledColor}>Please Select Date</div>
          )}
        </div>
        <div>
          <div>{currentFabName2}</div>
          <Button className="selectButton" css={selectButton}>
            Reset
          </Button>
          <Button className="resetButton" onClick={selectBtn} css={resetButton}>
            Select <DoubleRightOutlined />
          </Button>
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <div style={{ width: "50%" }} className="collapse">
          <Collapse css={collapse} size="small" style={{ color: "black" }}>
            <Panel header="MACHINE" key="1">
              {currentFabMachineName.length !== 0 ? (
                currentFabMachineName.map((list) => (
                  <Tag
                    color="purple"
                    style={{ marginTop: "3px", marginBottom: "3px" }}
                  >
                    {list}
                  </Tag>
                ))
              ) : (
                <div>Please select at least one Machine</div>
              )}
            </Panel>
          </Collapse>
        </div>
        <div style={{ width: "50%" }} className="collapse">
          <Collapse css={collapse}>
            <Panel header="CATEGORY" key="1">
              {currentCategory.length !== 0 ? (
                currentCategory.map((list) => (
                  <Tag
                    color="orange"
                    style={{ marginTop: "3px", marginBottom: "3px" }}
                  >
                    {list}
                  </Tag>
                ))
              ) : (
                <div>Please select at least one category</div>
              )}
            </Panel>
          </Collapse>
        </div>
      </div>
    </div>
  );
}

export default SelectBox;
