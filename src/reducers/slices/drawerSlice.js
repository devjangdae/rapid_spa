import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const asyncUpFetch = createAsyncThunk("drawerSlice/asyncUpFetch", async () => {
  const resp = await fetch(
    "https://api.countapi.xyz/hit/opesaljkdfslkjfsadf.com/visits"
  );
  const data = await resp.json();
  return data.value;
});

const drawerSlice = createSlice({
  name: "drawer",
  initialState: { isOpened: true, value: 0, status: "Welcome" },
  reducers: {
    openDrawer: (state, action) => {
      state.isOpened = true;
    },
    closeDrawer: (state, action) => {
      state.isOpened = false;
    },
    up: (state, action) => {
      state.value += action.payload;
    },
  },

  // 액션크리에아터를 자동으로 만들지 않음
  extraReducers: (builder) => {
    builder.addCase(asyncUpFetch.pending, (state, action) => {
      state.status = "loading";
    });
    builder.addCase(asyncUpFetch.fulfilled, (state, action) => {
      state.value = action.payload;
      state.status = "complete";
    });
    builder.addCase(asyncUpFetch.rejected, (state, action) => {
      state.status = "fail";
    });
  },
});

export default drawerSlice.reducer;
export const { up, openDrawer, closeDrawer } = drawerSlice.actions;
export { asyncUpFetch };
