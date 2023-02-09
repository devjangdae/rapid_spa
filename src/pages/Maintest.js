import { Provider, useSelector, useDispatch } from "react-redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";

const counterslice = createSlice({ //작은 스토어임!
  name:'counter',
  initialState:{value:0},
  reducers:{
    up:(state, action)=>{
      //... 안써도 됨
      state.value = state.value + action.payload;
    }
  }
});

const store = configureStore({
  reducer:{
    counter123:counterslice.reducer
  }
})

function Counter() {
  const dispatch = useDispatch();
  const count = useSelector(state => {
    return state.counter123.value;
  });
  return (
    <div>
      <button onClick={()=>{
        //dispatch({type:'counter/up', step:2});
        dispatch(counterslice.actions.up(2));//액션크리에이터를 이용하면 payload로!!
      }}>+</button>{count}
    </div>
  );
}

const Maintest = () => {
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
