import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: "user",
    initialState {
        name: "Oscar",
        email: "oscarbol98@gmail.com"
    } ,
    reducers: {
        update: (state,action) => {
            
        }
      },
      decrement: (state) => {
        state.value -= 1;
      },
      incrementByAmount: (state, action) => {
        state.value += action.payload;
      },
    },
  });
  