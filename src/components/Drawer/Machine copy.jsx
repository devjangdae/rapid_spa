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
import {
  Tabs,
  Checkbox,
  Space,
} from "antd";
import React, { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

// 툴킷
import { Provider, useSelector, useDispatch } from "react-redux";
import store from "../../reducers/store";
import { machineSelectedUpdate, machineSelectedUpdate_,lineSelectedUpdate, lineSelectedUpdate_,nameSelectedUpdate } from "../../reducers/slices/machineSlice";


const drawerMachineWrapper = css`
  margin-right: 80px;
`;

const machineHeaderWrapper = css`
  padding-bottom: 20px;
`;



function Machine() {

  const [machineLine, setMachineLine] = useState([]);
  const [machineList, setMachineList] = useState([]);

  const [indeterminate, setIndeterminate] = useState(false);
  const [checkAll, setCheckAll] = useState(false);
  const [checked, setChecked] = useState([]);


  const accessToken = sessionStorage.getItem("accessToken");

  const dispatch = useDispatch();

  const selectedMachineLists = useSelector((state) => {
    return JSON.stringify(state.machineData.seleted);
 });

 const selectedLineLists = useSelector((state) => {
    return JSON.stringify(state.machineData.seletedLine);
 });
 
  useEffect(() => {

    var tempList = [];

    const fetchMachine = async () => {
      try {
        const response = await axios.get("/rss/api/system/machinesInfo/", {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
 
        const arrayUniqueByKey = [
          ...new Map(
            response.data.lists.map((item) =>  [item["line"], item])
          ).values(),
        ];


        console.log(response);

        setMachineLine(arrayUniqueByKey);
        setMachineList(response.data.lists);
        tempList = response.data.lists;

      } catch (e) {
        console.log(e);
      }

      setIndeterminate(checked.length && checked.length !== tempList.length);
      setCheckAll(checked.length === tempList.length);
    };

    fetchMachine();
  }, []);

  useEffect(() => {
    setIndeterminate(checked.length && checked.length !== machineList.length);
    setCheckAll(checked.length === machineList.length);
  }, [checked]);


  const selectMachine = (e) => {
    const isChecked = e.target.checked;

    const checkedNameOfMachine = e.target.value;
    const checkedLineOfMachine = e.target.value2;

    console.log(checkedNameOfMachine);

    if (isChecked === true) {

    //   setSeletedMachine((seletedMachine) => [...seletedMachine, checkedNameOfMachine]);

    //   machineName2.push(checkedNameOfMachine);
    //   fabName2.push(checkedLineOfMachine);

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

  const onCheckAllChange = (e) => {

    setChecked(e.target.checked ? machineList.map((item) => item.machineName) : []);
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
                <Checkbox  indeterminate={indeterminate}  onChange={onCheckAllChange}  checked={checkAll} style={{marginLeft:'50px'}}>All</Checkbox>
                </div>
              <div>
                <Tabs
                  defaultActiveKey="1"
                  items={machineLine.map((machine, i) => {
                    const id = String(i + 1);
                    if(machine.line != null){
                        return {
                            label: machine.line,
                            key: id,
                            children: (
                              <Checkbox.Group
                                style={{
                                  width: "100%",
                                }}
                                value={checked}

                                onChange={(checkedValues) => {
                                    setChecked(checkedValues);
                                  }}
                              >

                                <Space direction="vertical">
                                <Checkbox  indeterminate={indeterminate}  onChange={onCheckAllChange}  checked={checkAll} style={{marginLeft:'50px'}}>All</Checkbox>
                                {machineList && machineList.map((list,j) => {
                                if(machineList[j].line === machine.line){
                                    if(machineList[j].vftpConnected === true){
                                        return(
                                            <Checkbox
                                            value={list.machineName}
                                            onChange={(e) => selectMachine(e)}
                                          >
                                            {machineList[j].machineName}
                                          </Checkbox>
                                          )                
                                    }if(machineList[j].vftpConnected === false){
                                        return(
                                            <Checkbox
                                            defaultChecked={false} disabled
                                          >
                                            {machineList[j].machineName}
                                          </Checkbox>
                                          )   
                                    }

                                }
                              })}
                                </Space>
                                {selectedLineLists}
                              </Checkbox.Group>
                            ),
                          };
                    }
                  })}
                  tabPosition="left"
                />
              </div>
            </div>          
    );
  }
  
  export default Machine;
  