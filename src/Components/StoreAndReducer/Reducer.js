import { createSlice } from "@reduxjs/toolkit";
export const buttonReducer = createSlice({
  name: "ButtonReducer",
  initialState: {
    buttonTextContent: "default button",
    inputValue:1,
    totalNumberOfbuttons: 0,
    Icon: "bi bi-question-circle",
    bgColor: "btn btn-light rounded",
    toDisable: false,
    toActive: "",
    lastData: [],
  },
  reducers: {

    IncreaseElements: (state, action) => {
      return { ...state, totalNumberOfbuttons: action.payload };
    },
    IncreaseInputNumber: (state, action) => {
      return { ...state, inputValue: action.payload };
    },
    allinfo: (state, action) => {
      return { ...state, lastData: [...state.lastData,...Array(+state.inputValue).fill(action.payload)] };
    },
    ChangeValueof_buttonTextContent: (state, action) => {
      return { ...state, buttonTextContent: action.payload };
    },
    ChangeBgColorForbutton: (state, action) => {
      return { ...state, bgColor: action.payload };
    },
    ChangeIconForbutton: (state, action) => {
      return { ...state, Icon: action.payload };
    },
    ToDisableButton: (state) => {
      return { ...state, toDisable: state.toDisable ? false : true };
    },
    ToActiveButton: (state) => {
      return { ...state, toActive: state.toActive == "" ? "active" : "" };
    },
    
  },
});

export const {
  IncreaseElements,
  ChangeValueof_buttonTextContent,
  ChangeBgColorForbutton,
  ChangeIconForbutton,
  ToDisableButton,
  ToActiveButton,
  numberofElements,
  allinfo,
  IncreaseInputNumber
} = buttonReducer.actions;
export default buttonReducer.reducer;
