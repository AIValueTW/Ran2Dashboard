import axios from "axios";

const ip = "http://ran-dashboard.aiv.com.tw/api"
const loginIp = process.env.REACT_APP_SERVER;// 閱讀最外層檔案.env &&development 為本地端啟動 production 為伺服器設定


export const getCheckboxOptions = () => { 
  let data = axios.get(ip + "/year-month-filter/");
  return data;
};

export const getDefaultDate = () => {
  let data = axios.get(ip + "/start-end-filter/");
  return data;
};

//new API
//會員中心
export const get_new_members= (datetime) => {
  let data = axios.get(ip + "/new-members/?start="+datetime[0]+"&end="+datetime[1]);
  return data;
};

export const get_online_members = (datetime) => {
  let data = axios.get(ip + "/online-members/?start="+datetime[0]+"&end="+datetime[1]);
  return data;
};

export const get_online_information= (datetime) => {
  let data = axios.get(ip + "/online-information/?start="+datetime[0]+"&end="+datetime[1]);
  return data;
};
export const get_new_members_month= () => {
  let data = axios.get(ip + "/new-members-month/");
  return data;
};

export const get_online_members_month = () => {
  let data = axios.get(ip + "/online-members-month/");
  return data;
};

export const get_online_information_month= () => {
  let data = axios.get(ip + "/online-information-month/");
  return data;
};
//儲值點數稽核
export const get_xvgo_information = (datetime) => {
  let data = axios.get(ip + "/xvgo-information/?start="+datetime[0]+"&end="+datetime[1]);
  return data;
};

export const get_xvgo_information_month = () => {
  let data = axios.get(ip + "/xvgo-information-month/");
  return data;
};

export const get_xvcard_vs_mycard_price = () => {
  let data = axios.get(ip + "/xvcard-vs-mycard-price/");
  return data;
};

export const get_xvcard_vs_mycard_player_price = () => {
  let data = axios.get(ip + "/xvcard-vs-mycard-player-price/");
  return data;
};

export const get_xvcard_vs_mycard_price_month = () => {
  let data = axios.get(ip + "/xvcard-vs-mycard-price-month/");
  return data;
};
//乾爹抖內排行榜
export const get_donate_information= () => {
  let data = axios.get(ip + "/donate-information/");
  return data;
};

export const get_sugar_daddy_ranking_month = (chose_month) => {
  let data = axios.get(ip + "/sugar-daddy-ranking-month/?chose_month="+chose_month);
  return data;
};