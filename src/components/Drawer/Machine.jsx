/* eslint-disable import/named */
/* eslint-disable no-else-return */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-plusplus */
/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
/* eslint-disable prettier/prettier */
/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import axios from "axios";
import { Tabs, Checkbox, Space } from "antd";
import React, { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

// 툴킷
import { Provider, useSelector, useDispatch } from "react-redux";
import store from "../../reducers/store";
import {
  machineSelectedUpdate,
  machineSelectedUpdate_,
  lineSelectedUpdate,
  lineSelectedUpdate_,
  nameSelectedUpdate,
  checkedUpdate,
  validMachineUpdate,
  validMachineInitiate,
  checkedDefault,
  checkedDelete,
  checkedLineDelete,
  checkedLineUpdate,
  checkedAll,
  updateMachineErrorMsg,
  machineErrorMsg,
  checkedReset,
  checkedLineReset,
  checkedMachineNameDelete,
  checkedMachineNameUpdate,
  checkedMachineLineDelete,
  checkedMachineLineUpdate,
  checkedMainUpdate,
  checkedMainReset,
  checkedMainDelete,
  validLineUpdate,
} from "../../reducers/slices/machineSlice";

const drawerMachineWrapper = css`
  margin-right: 80px;
  width: 300px;
`;

const machineHeaderWrapper = css`
  padding-bottom: 20px;
`;

const error = css`
  font-weight: 800;
  margin-top: 20px;
  font-size: 13px;
  color: red;
`;

function Machine() {
  const [machineLine, setMachineLine] = useState([]);
  const [machineList, setMachineList] = useState([]);

  const [indeterminate, setIndeterminate] = useState(false);
  const [checkAll, setCheckAll] = useState(false);

  const accessToken = sessionStorage.getItem("accessToken");

  const dispatch = useDispatch();

  const errorMsg = useSelector((state) => state.machineData.machineErrorMsg);

  const selectedMachineLists = useSelector((state) => {
    return JSON.stringify(state.machineData.seleted);
  });

  const selectedLineLists = useSelector((state) => {
    return JSON.stringify(state.machineData.seletedLine);
  });

  const checked2 = useSelector((state) => state.machineData.checked);

  const checkedLine = useSelector((state) => state.machineData.checkedLine);
  const checkedMain = useSelector((state) => state.machineData.checkedMain);

  const checkedMachineName = useSelector(
    (state) => state.machineData.checkedMachineName
  );

  const checkedMachineLine = useSelector(
    (state) => state.machineData.checkedMachineLine
  );

  const valMa = useSelector((state) => state.machineData.validMachine);
  const valLi = useSelector((state) => state.machineData.validLine);

  useEffect(() => {
    let tempList = [];

    const fetchMachine = async () => {
      try {
        const response = await axios.get("/rss/api/system/machinesInfo/", {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        const arrayUniqueByKey = [
          ...new Map(
            response.data.lists.map((item) => [item.line, item])
          ).values(),
        ];

        console.log(response);

        setMachineLine(arrayUniqueByKey);
        setMachineList(response.data.lists);

        dispatch(validMachineInitiate());

        for (let i = 0; i < response.data.lists.length; i++) {
          console.log(response.data.lists[i].line);
          if (
            response.data.lists[i].line != null &&
            response.data.lists[i].vftpConnected === true
          ) {
            dispatch(validMachineUpdate(response.data.lists[i].machineName));
            dispatch(validLineUpdate(response.data.lists[i].line))
            tempList.push(response.data.lists[i].machineName);
          }
        }
      } catch (e) {
        console.log(e);
      }

      setIndeterminate(
        checked2.length && checked2.length !== tempList.length
      );
      setCheckAll(checked2.length === tempList.length);
    };

    fetchMachine();
  }, []);

  useEffect(() => {
    setIndeterminate(
      checked2.length && checked2.length !== valMa.length
    );
    setCheckAll(checked2.length === valMa.length);
  }, [checked2]);

  const selectMachine = (e, checkedNameOfMachine, checkedLineOfMachine) => {
    const isChecked = e.target.checked;

    dispatch(machineErrorMsg());

    if (isChecked === true) {
      dispatch(checkedUpdate(checkedNameOfMachine));
      dispatch(checkedMainUpdate(`${checkedLineOfMachine}>${checkedNameOfMachine}`));
    } else if (isChecked === false) {
      dispatch(checkedDelete(checkedNameOfMachine));
      dispatch(checkedMainDelete(`${checkedLineOfMachine}>${checkedNameOfMachine}`));
    }
  };


  const onCheckAllChange = (e, line) => {

    setCheckAll(e.target.checked);
    
    dispatch(checkedReset());
    dispatch(checkedMainReset());

    if (e.target.checked === true) {
      for (let i = 0; i < valMa.length; i++) {
        dispatch(checkedUpdate(valMa[i]));
        dispatch(checkedMainUpdate(`${valLi[i]}>${valMa[i]}`));
      }
    } 
  };

  return (
    <div css={drawerMachineWrapper}>
      <div css={machineHeaderWrapper}>
        MACHINE
        <Checkbox
          indeterminate={indeterminate}
          onChange={onCheckAllChange}
          checked={checkAll}
          style={{ marginLeft: "50px" }}
        >
          All
        </Checkbox>
      </div>
      <div>
        <Tabs
          defaultActiveKey="1"
          items={machineLine.map((machine, i) => {
            if (machine.line != null) {
              const id = String(i + 1);

              return {
                label: machine.line,
                key: id,
                children: (
                  <div>
                    <Space direction="vertical">
                      {machineList.map((list, j) => {
                        if (list.line === machine.line) {
                          return (
                            <Checkbox
                              value={machineList[j].machineName}
                              value2={machineList[j].line}
                              checked={checked2.includes(
                                list.machineName
                              )}
                              disabled={!list.vftpConnected}
                              onChange={(e) =>
                                selectMachine(e, list.machineName, list.line)
                              }
                            >
                              {list.machineName}
                            </Checkbox>
                          );
                        }
                      })}
                    </Space>
                  </div>
                ),
              };
            }
          })}
          tabPosition="left"
        />
      </div>
      <div>{checkedMain}</div>
      <div>{checked2}</div>
      <div>경계선</div>
      <div>{checkedMachineName}</div>
      <div>{checkedMachineLine}</div>
      <div css={error}>{errorMsg}</div>
    </div>
  );
}

export default Machine;
