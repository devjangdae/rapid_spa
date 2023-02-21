/* eslint-disable no-underscore-dangle */
/* eslint-disable no-console */
/* eslint-disable react/jsx-boolean-value */
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
  checkedAll,
  updateMachineErrorMsg,
  machineErrorMsg,
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
  const [machineList2, setMachineList2] = useState([]);

  const [indeterminate, setIndeterminate] = useState(false);
  const [checkAll, setCheckAll] = useState(false);
  const [checked, setChecked] = useState([]);

  const accessToken = sessionStorage.getItem("accessToken");

  const dispatch = useDispatch();

  const errorMsg = useSelector((state) => state.machineData.machineErrorMsg);

  const selectedMachineLists = useSelector((state) => {
    return JSON.stringify(state.machineData.seleted);
  });

  const selectedLineLists = useSelector((state) => {
    return JSON.stringify(state.machineData.seletedLine);
  });

  const checked2 = useSelector((state) => (
    state.machineData.checked
  ));
  const valMa = useSelector((state) => (
    state.machineData.validMachine
  ));

  var tempList = [];

  useEffect(() => {
    const fetchMachine = async () => {
      try {
        const response = await axios.get("/rss/api/system/machinesInfo/", {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        const arrayUniqueByKey = [
          ...new Map(
            response.data.lists.map((item) => [item["line"], item])
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
            console.log('0000'+valMa);
          }
        }

        // machineList.map((list, j) => {
        //     if (machineList[j].line === machine.line) {
        //       if (machineList[j].vftpConnected === true) {
        //         return (
        //           <Checkbox
        //             value={machineList[j].machineName}
        //             value2={machineList[j].line}
        //             onChange={(e) => selectMachine(e)}
        //           >
        //             {machineList[j].machineName}
        //           </Checkbox>
        //         );
        //       }
        //       if (machineList[j].vftpConnected === false) {
        //         return (
        //           <Checkbox defaultChecked={false} disabled>
        //             {machineList[j].machineName}
        //           </Checkbox>
        //         );
        //       }
        //     }
        //   })}
        //tempList = response.data.lists;
      } catch (e) {
        console.log(e);
      }

      // setIndeterminate(checked2.length && checked2.length !== valMa.length);
      // setCheckAll(checked2.length === valMa.length);
      // setMachineList2(tempList);
    };

    fetchMachine();
  }, []);

  // useEffect(() => {
  //   setIndeterminate(checked2.length && checked2.length !== valMa.length);
  //   setCheckAll(checked2.length === valMa.length);
  // }, [checked2]);

  const selectMachine = (e) => {
    const isChecked = e.target.checked;

    const checkedNameOfMachine = e.target.value;
    const checkedLineOfMachine = e.target.value2;

    console.log(checkedNameOfMachine);

    dispatch(machineErrorMsg());

    if (isChecked === true) {
      //   setSeletedMachine((seletedMachine) => [...seletedMachine, checkedNameOfMachine]);

      //   machineName2.push(checkedNameOfMachine);
      //   fabName2.push(checkedLineOfMachine);
      dispatch(checkedUpdate(e.target.value));
      console.log(e.target.checked);
      dispatch(machineSelectedUpdate(checkedNameOfMachine));
      dispatch(lineSelectedUpdate(checkedLineOfMachine));
    } else if (isChecked === false) {
      //   setSeletedMachine(seletedMachine.filter((item) => item !== checkedNameOfMachine));

      //   const index = machineName2.indexOf(checkedNameOfMachine);
      //   if (index > -1) {
      //     machineName2.splice(index, 1);
      //   }

      dispatch(machineSelectedUpdate_(checkedNameOfMachine));
      dispatch(lineSelectedUpdate_(checkedLineOfMachine));
    }
  };

  const func_ = (line) => {

    for(let i=0; i <machineList.length; i++){
      if(machineList[i].line === line){
        if(machineList[i].vftpConnected === true){
          return false;  
        }
      }
    }

    return true;
  };

  // const func2_ = (line) => {

  //   for(let i=0; i <machineList.length; i++){
  //     if(machineList[i].line === line){
  //       if(machineList[i].vftpConnected === true){
  //         return false;  
  //       }
  //     }
  //   }

  //   return true;
  // };

  const onCheckAllChange = (e, line) => {
    //setChecked(e.target.checked ? valMa : []);

    if (e.target.checked === true) {
      //dispatch(checkedAll());
      for(let i=0; i <machineList.length; i++){
        if(machineList[i].line === line){
          if(machineList[i].vftpConnected === true){
            dispatch(checkedUpdate(machineList[i].machineName));
          }
        }
      }

    } else if (e.target.checked === false) {
      dispatch(checkedDefault());
    }

    setCheckAll(e.target.checked);

    // if(e.target.checked === true){

    //     dispatch(seletedDefault());

    //     for(let i=0; i<categoryList.length; i++){
    //         dispatch(caUpdate3(categoryList[i]));
    //     }

    // }else if(e.target.checked === false){
    //     //
    //     dispatch(seletedDefault());
    // }
  };

  return (
    <div css={drawerMachineWrapper}>
      <div css={machineHeaderWrapper}>
        MACHINE
        {/* <Checkbox
          indeterminate={indeterminate}
          onChange={onCheckAllChange}
          checked={checkAll}
          style={{ marginLeft: "50px" }}
        >
          All
        </Checkbox> */}
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
                      <Checkbox
                        disabled ={ func_(machine.line) }
                        // value={machine.line}
                        indeterminate={indeterminate}
                        onChange={(e)=>onCheckAllChange(e, machine.line)}
                      >
                        All
                      </Checkbox>

                      {machineList.map((list, j) => {
                        if (list.line === machine.line) {

                            return (
                              <Checkbox
                                value={machineList[j].machineName}
                                value2={machineList[j].line}
                                disabled ={!list.vftpConnected}
                                onChange={(e) => selectMachine(e)}
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
      {valMa}
      {checked2}
      <div css={error}>{errorMsg}</div>
    </div>
  );
}

export default Machine;
