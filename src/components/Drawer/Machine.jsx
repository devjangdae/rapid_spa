/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
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
  validMachineUpdate,
  validMachineInitiate,
  validLineUpdate,
  machineErrorMsgReset,
  checkedFabMachineNameUpdate,
  checkedFabMachineNameDelete,
  checkedFabMachineNameReset,
  checkedMachineName2Update,
  checkedMachineName2Delete,
  checkedMachineName2Reset,
  checkedFabNameUpdate,
  checkedFabNameDelete,
  checkedFabNameReset,
} from "../../reducers/slices/machineSlice";
import { getRequest } from "../../libs/axios/configure";
import { URL_SYSTEM_M } from "../../constants/URL";

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
  const accessToken = sessionStorage.getItem("accessToken");

  const [machineLine, setMachineLine] = useState([]);
  const [machineList, setMachineList] = useState([]);

  const [indeterminate, setIndeterminate] = useState(false);
  const [checkAll, setCheckAll] = useState(false);

  const dispatch = useDispatch();
  const valMa = useSelector((state) => state.machineData.validMachine);
  const valLi = useSelector((state) => state.machineData.validLine);
  const errorMsg = useSelector((state) => state.machineData.machineErrorMsg);

  const checkedFabMachineName = useSelector(
    (state) => state.machineData.checkedFabMachineName
  );
  const checkedMachineName = useSelector(
    (state) => state.machineData.checkedMachineName2
  );
  const checkedFabName = useSelector(
    (state) => state.machineData.checkedFabName
  );

  useEffect(() => {
    let tempList = [];

    const fetchMachine = async () => {
      try {
        const response = await getRequest({
          url: URL_SYSTEM_M,
          token: accessToken,
        });

        const arrayUniqueByKey = [
          ...new Map(
            response.data.lists.map((item) => [item.line, item])
          ).values(),
        ];

        setMachineLine(arrayUniqueByKey);
        setMachineList(response.data.lists);

        dispatch(validMachineInitiate());

        for (let i = 0; i < response.data.lists.length; i++) {
          if (
            response.data.lists[i].line != null &&
            response.data.lists[i].vftpConnected === true
          ) {
            dispatch(validMachineUpdate(response.data.lists[i].machineName));
            dispatch(validLineUpdate(response.data.lists[i].line));
            tempList.push(response.data.lists[i].machineName);
          }
        }
      } catch (e) {
        console.log(e);
      }

      setIndeterminate(
        checkedFabMachineName.length &&
          checkedFabMachineName.length !== tempList.length
      );
      setCheckAll(checkedFabMachineName.length === tempList.length);
    };

    fetchMachine();
  }, []);

  useEffect(() => {
    setIndeterminate(
      checkedFabMachineName.length &&
        checkedFabMachineName.length !== valMa.length
    );
    setCheckAll(checkedFabMachineName.length === valMa.length);
  }, [checkedFabMachineName]);

  const selectMachine = (e, checkedNameOfMachine, checkedLineOfMachine) => {
    const isChecked = e.target.checked;

    dispatch(machineErrorMsgReset());

    if (isChecked === true) {
      dispatch(
        checkedFabMachineNameUpdate(
          `${checkedLineOfMachine}>${checkedNameOfMachine}`
        )
      );
      dispatch(checkedMachineName2Update(checkedNameOfMachine));
      dispatch(checkedFabNameUpdate(checkedLineOfMachine));
    } else if (isChecked === false) {
      dispatch(
        checkedFabMachineNameDelete(
          `${checkedLineOfMachine}>${checkedNameOfMachine}`
        )
      );
      dispatch(checkedMachineName2Delete(checkedNameOfMachine));
      dispatch(checkedFabNameDelete(checkedLineOfMachine));
    }
  };

  const onCheckAllChange = (e, line) => {
    setCheckAll(e.target.checked);

    dispatch(checkedFabMachineNameReset());
    dispatch(checkedMachineName2Reset());
    dispatch(checkedFabNameReset());

    if (e.target.checked === true) {
      for (let i = 0; i < valMa.length; i++) {
        dispatch(checkedFabMachineNameUpdate(`${valLi[i]}>${valMa[i]}`));
        dispatch(checkedMachineName2Update(valMa[i]));
        dispatch(checkedFabNameUpdate(valLi[i]));
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
                            <div key={list.machineName}>
                              <Checkbox
                                value={machineList[j].machineName}
                                value2={machineList[j].line}
                                checked={checkedFabMachineName.includes(
                                  `${list.line}>${list.machineName}`
                                )}
                                disabled={!list.vftpConnected}
                                onChange={(e) =>
                                  selectMachine(e, list.machineName, list.line)
                                }
                              >
                                {list.machineName}
                              </Checkbox>
                            </div>
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
      <div css={error}>{errorMsg}</div>
    </div>
  );
}

export default Machine;
