/* eslint-disable no-param-reassign */
/** @jsxImportSource @emotion/react */
import { Provider, useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { useEffect, useState } from "react";
import * as md5 from "md5";
import store from "../../reducers/store";
import { up } from "../../reducers/slices/counterSlice";
import { caUpdate } from "../../reducers/slices/categorySlice";

import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";

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

function Cate() {
  const dispatch = useDispatch();
  const categorys = useSelector((state) => {
    console.log(state); // 카테고리 객체 콘솔로그
    return state.categoryData.items.length;
  });
  return (
    <div>
      <button
        onClick={() => {
          dispatch(caUpdate(3));
        }}
      >
        +
      </button>
      {`객체의 2개씩추가 개수 :  ${categorys}`}
    </div>
  );
}

const userId = "20220464";
const userPw = "20220464";

function Maintest() {
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
            <Provider store={store}>
              <Counter />
              <Cate />
              <div style={{ backgroundColor: "pink", padding: "50px" }}>
                <div>accessToken</div>
                {accessToken}
              </div>
              <div style={{ backgroundColor: "blue", padding: "50px" }}>
                <div>refreshToken</div>
                {refreshToken}
              </div>
            </Provider>
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
