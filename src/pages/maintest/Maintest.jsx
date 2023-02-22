/** @jsxImportSource @emotion/react */
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { useEffect, useState } from "react";
import * as md5 from "md5";
import store from "../../reducers/store";
import { up } from "../../reducers/slices/counterSlice";

import Header from "../../components/Header/index";
import Footer from "../../components/Footer/index";

function Counter() {
  const dispatch = useDispatch();
  const count = useSelector((state) => {
    return state.counter123.value;
  });
  return (
    <div>
      <button
        onClick={() => {
          // dispatch({type:'counter/up', step:2});
          dispatch(up(1)); // 액션크리에이터를 이용하면 payload로!!
        }}
      >
        +
      </button>
      {count}
    </div>
  );
}

const userId = "20220464";
const userPw = "20220464";

function Maintest() {
  // const accessToken = sessionStorage.getItem("accessToken");
  // console.log(`엑세스토큰${accessToken}`);

  // const [machineList, setMachineList] = useState([]);
  // const [uniqueLine, setUniqueLine] = useState([]);
  // const [categoryList, setCategoryList] = useState([]);
  // let finalListData;

  // useEffect(() => {
  //   // MACHINE
  //   const fetchMachine = async () => {
  //     try {
  //       const response = await axios.get("/rss/api/system/machinesInfo/", {
  //         headers: {
  //           Authorization: `Bearer ${accessToken}`,
  //         },
  //       });

  //       const arrayUniqueByLine = [
  //         ...new Map(
  //           response.data.lists.map((item) => [item.line, item])
  //         ).values(),
  //       ];

  //       setUniqueLine(arrayUniqueByLine);
  //       setMachineList(response.data.lists);
  //       console.log(`machineList${machineList}`);
  //       console.log(`uniqueLine${uniqueLine}`);
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   };

  //   fetchMachine();

  //   // CATEGORY
  //   const fetchCategory = async () => {
  //     try {
  //       const response = await axios.get("/rss/api/system/categoryInfo/", {
  //         headers: {
  //           Authorization: `Bearer ${accessToken}`,
  //         },
  //       });

  //       const tempList = [];
  //       for (let i = 0; i < response.data.lists.length; i += 1) {
  //         tempList.push(
  //           `${response.data.lists[i].categoryCode}_${response.data.lists[i].categoryName}`
  //         );
  //       }

  //       setCategoryList(tempList);
  //       console.log(`tempList${tempList}`);
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   };

  //   fetchCategory();

  //   // SEARCH URL
  //   let searchId2;
  //   let resultId2;
  //   const fetchSearchURL = async () => {
  //     try {
  //       const response = await axios.post(
  //         "/rss/api/ftp/search",
  //         {
  //           fabNames: ["Line1"],
  //           machineNames: ["MPA_208"],
  //           categoryCodes: ["001"],
  //           categoryNames: ["RUNNING_STATUS"],
  //           startDate: "20221001144108",
  //           endDate: "20230215144113",
  //           folder: false,
  //         },
  //         {
  //           headers: {
  //             Authorization: `Bearer ${accessToken}`,
  //           },
  //         }
  //       );

  //       console.log(response.data.searchId);
  //       searchId2 = response.data.searchId;
  //       // setSearchId3(response.data.searchId);

  //       try {
  //         const response = await axios.get(`/rss/api/ftp/search/${searchId2}`, {
  //           params: { searchId: searchId2 },
  //           headers: {
  //             Authorization: `Bearer ${accessToken}`,
  //           },
  //         });

  //         console.log(response);
  //         resultId2 = response.data.resultUrl;

  //         try {
  //           const response = await axios.get(
  //             `/rss/api/ftp/search/result/SFTP-20230221141712552-5171`,
  //             {
  //               params: { resultUrl: resultId2 },
  //               headers: {
  //                 Authorization: `Bearer ${accessToken}`,
  //               },
  //             }
  //           );
  //           finalListData = response.data.lists;
  //           console.log(finalListData);
  //           // /rss/api/ftp/search/result/SFTP-20230221135513619-5137
  //         } catch (e) {
  //           console.log(e);
  //         }
  //       } catch (e) {
  //         console.log(e);
  //       }
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   };

  //   fetchSearchURL();
  //   // SFTP-20230221135043558-5127
  // }, []);

  console.log(1);
  const [accessToken, setAccessToken] = useState([]);
  const [refreshToken, setRefreshToken] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        // const response = await axios.get("http://localhost:8080/todos");
        const response = await axios.get(
          `/rss/api/auths/login?username=${userId}&password=${md5(userPw)}`
        );

        // console.log("response : ");
        // console.log(response);
        // console.log("response.data.data");
        // console.log(response.data);
        // setTodos(response.data.data);

        setAccessToken(response.data.accessToken);
        setRefreshToken(response.data.refreshToken);
        sessionStorage.setItem("accessToken", accessToken);
        sessionStorage.setItem("refreshToken", refreshToken);

        const response2 = await axios.get("/rss/api/system/machinesInfo/", {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        console.log(response2.data.lists);
      } catch (e) {
        console.log(e);
      }
    };

    loadData();
  }, []);

  return (
    <div className="basic-container">
      <div className="basic-header">
        <Header />
      </div>
      <div className="content-container">
        <div className="logint-container">
          <div>메인test페이지</div>
          <div>메인test페이지</div>
          <div>메인test페이지</div>
          <div>메인test페이지</div>

          <div>
            <Counter />
            <div style={{ backgroundColor: "pink", padding: "50px" }}>
              <div>accessToken</div>
              {accessToken}
            </div>
            <div style={{ backgroundColor: "blue", padding: "50px" }}>
              <div>refreshToken</div>
              {refreshToken}
            </div>
          </div>
        </div>
      </div>
      <div className="basic-footer">
        <Footer />
      </div>
    </div>
  );
}

export default Maintest;
