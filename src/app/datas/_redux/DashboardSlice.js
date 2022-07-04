import { createSlice } from "@reduxjs/toolkit";

const initialDashboardState = {
  checkboxOptions: undefined,
  start_end_filter: undefined,
  //new API
  //會員中心
  new_members: undefined,
  online_members: undefined,//*
  online_information: undefined,
  new_members_month: undefined, //month
  online_members_month: undefined, //month
  online_information_month: undefined, //month
  //儲值點數稽核
  xvgo_information: undefined,
  xvgo_information_month:undefined, //month
  xvcard_vs_mycard_price:undefined,
  xvcard_vs_mycard_player_price:undefined,
  xvcard_vs_mycard_price_month:undefined,
  //乾爹抖內排行榜
  donate_information: undefined,
  sugar_daddy_ranking_month: undefined,
};
export const callTypes = {
  action: "action",
};

export const DashboardSlice = createSlice({
  name: "dashborad",
  initialState: initialDashboardState,
  reducers: {
    setCheckboxOptions: (state, action) => {
      state.checkboxOptions = action.payload.checkboxOptions;
    },
    setDefaultDate: (state, action) => {
      state.defaultDate = action.payload.defaultDate;
    },
    //new API
    //會員中心
    set_new_members: (state, action) => {
      state.new_members = action.payload.new_members;
    },
    set_online_members: (state, action) => {
      state.online_members = action.payload.online_members;
    },
    set_online_information: (state, action) => {
      state.online_information = action.payload.online_information;
    },
    set_new_members_month: (state, action) => {
      state.new_members_month = action.payload.new_members_month;
    },
    set_online_members_month: (state, action) => {
      state.online_members_month = action.payload.online_members_month;
    },
    set_online_information_month: (state, action) => {
      state.online_information_month = action.payload.online_information_month;
    },
    //儲值點數稽核
    set_xvgo_information: (state, action) => {
      state.xvgo_information = action.payload.xvgo_information;
    },
    set_xvgo_information_month: (state, action) => {
      state.xvgo_information_month = action.payload.xvgo_information_month;
    },
    set_xvcard_vs_mycard_price: (state, action) => {
      state.xvcard_vs_mycard_price = action.payload.xvcard_vs_mycard_price;
    },
    set_xvcard_vs_mycard_player_price: (state, action) => {
      state.xvcard_vs_mycard_player_price = action.payload.xvcard_vs_mycard_player_price;
    },
    set_xvcard_vs_mycard_price_month: (state, action) => {
      state.xvcard_vs_mycard_price_month = action.payload.xvcard_vs_mycard_price_month;
    },
    //乾爹抖內排行榜
    set_donate_information: (state, action) => {
      state.donate_information = action.payload.donate_information;
    },
    set_sugar_daddy_ranking_month: (state, action) => {
      state.sugar_daddy_ranking_month =
        action.payload.sugar_daddy_ranking_month;
    },
  },
});
