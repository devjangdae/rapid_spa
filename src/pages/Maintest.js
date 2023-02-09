import { Provider, useSelector, useDispatch } from "react-redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";

import axios from "axios";
import { useEffect } from "react";
import * as md5 from 'md5'

const counterslice = createSlice({
  //작은 스토어임!
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    up: (state, action) => {
      //... 안써도 됨
      state.value = state.value + action.payload;
    },
  },
});

const store = configureStore({
  reducer: {
    counter123: counterslice.reducer,
  },
});

function Counter() {
  const dispatch = useDispatch();
  const count = useSelector((state) => {
    return state.counter123.value;
  });
  return (
    <div>
      <button
        onClick={() => {
          //dispatch({type:'counter/up', step:2});
          dispatch(counterslice.actions.up(2)); //액션크리에이터를 이용하면 payload로!!
        }}
      >
        +
      </button>
      {count}
    </div>
  );
}

const userId = '20220464';
const userPw = '20220464';

const Maintest = () => {
  console.log(1);
  useEffect(() => {
    const loadData = async () => {
      try {
        //const response = await axios.get("http://localhost:8080/todos");
        const response = await axios.get(
          `/rss/api/auths/login?username=${userId}&password=${md5(userPw)}`
        );

        console.log("response : ");
        console.log(response);

        console.log("response.data.data");
        console.log(response.data);

        //setTodos(response.data.data);

      } catch (e) {
        console.log(e);
      }
    };

    loadData();
  }, []);

  return (
    <>
      <div>메인test페이지</div>
      <div>
        <Provider store={store}>
          <Counter />
        </Provider>
      </div>
    </>
  );
};

export default Maintest;
