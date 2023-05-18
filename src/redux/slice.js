import { createSlice } from "@reduxjs/toolkit";
import { fetchCard } from "./operations";

const userSclice = createSlice({
  name: "user",
  initialState: [],
  extraReducers: (builder) =>
    builder.addCase(fetchCard.fulfilled, (state, { payload }) => {
      console.log(payload);
      state.push(...payload);
    }),
});

export const userReduser = userSclice.reducer;

// {
//       user: 'user',
//       tweets: 1,
//       followers: 1,
//       avatar: '',
//       id: 1,
//     },
