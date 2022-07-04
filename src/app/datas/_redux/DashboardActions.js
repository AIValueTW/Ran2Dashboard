import * as dashboardAPI from "./DashboardCrud.js";
import { DashboardSlice } from "./DashboardSlice";

const { actions } = DashboardSlice;

export const getCheckboxOptions = () => (dispatch) => {
  return dashboardAPI
    .getCheckboxOptions()
    .then((res) => {
      const DashboardData = res.data.year_month_filter;
      dispatch(
        actions.setCheckboxOptions({
          checkboxOptions: DashboardData,
        })
      );
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getDefaultDate = () => (dispatch) => {
  return dashboardAPI
    .getDefaultDate()
    .then((res) => {
      const DashboardData = res.data.start_end_filter;
      dispatch(
        actions.setDefaultDate({
          defaultDate: DashboardData,
        })
      );
    })
    .catch((err) => {
      console.log(err);
    });
};

//new API
//會員中心
export const get_new_members = ({datetime}) => (dispatch) => {
  return dashboardAPI
    .get_new_members(datetime)
    .then((res) => {
      const DashboardData = res.data;
      dispatch(
        actions.set_new_members({
          new_members: DashboardData,
        })
      );
    })
    .catch((err) => {
      console.log(err);
    });
};

export const get_online_members = ({datetime}) => (dispatch) => {
  return dashboardAPI
    .get_online_members(datetime)
    .then((res) => {
      const DashboardData = res.data.online_count;
      dispatch(
        actions.set_online_members({
          online_members: DashboardData,
        })
      );
    })
    .catch((err) => {
      console.log(err);
    });
};

export const get_online_information = ({datetime}) => (dispatch) => {
  return dashboardAPI
    .get_online_information(datetime)
    .then((res) => {
      const DashboardData = res.data;
      dispatch(
        actions.set_online_information({
          online_information: DashboardData,
        })
      );
    })
    .catch((err) => {
      console.log(err);
    });
};

export const get_new_members_month = () => (dispatch) => {
  return dashboardAPI
    .get_new_members_month()
    .then((res) => {
      const DashboardData = res.data;
      dispatch(
        actions.set_new_members_month({
          new_members_month: DashboardData,
        })
      );
    })
    .catch((err) => {
      console.log(err);
    });
};

export const get_online_members_month = () => (dispatch) => {
  return dashboardAPI
    .get_online_members_month()
    .then((res) => {
      const DashboardData = res.data.online_count_month;
      dispatch(
        actions.set_online_members_month({
          online_members_month: DashboardData,
        })
      );
    })
    .catch((err) => {
      console.log(err);
    });
};

export const get_online_information_month = () => (dispatch) => {
  return dashboardAPI
    .get_online_information_month()
    .then((res) => {
      const DashboardData = res.data;
      dispatch(
        actions.set_online_information_month({
          online_information_month: DashboardData,
        })
      );
    })
    .catch((err) => {
      console.log(err);
    });
};
//儲值點數稽核
export const get_xvgo_information = ({datetime}) => (dispatch) => {
  return dashboardAPI
    .get_xvgo_information(datetime)
    .then((res) => {
      const DashboardData = res.data;
      dispatch(
        actions.set_xvgo_information({
          xvgo_information: DashboardData,
        })
      );
    })
    .catch((err) => {
      console.log(err);
    });
};

export const get_xvgo_information_month = () => (dispatch) => {
  return dashboardAPI
    .get_xvgo_information_month()
    .then((res) => {
      const DashboardData = res.data;
      dispatch(
        actions.set_xvgo_information_month({
          xvgo_information_month: DashboardData,
        })
      );
    })
    .catch((err) => {
      console.log(err);
    });
};

export const get_xvcard_vs_mycard_price = () => (dispatch) => {
  return dashboardAPI
    .get_xvcard_vs_mycard_price()
    .then((res) => {
      const DashboardData = res.data;
      dispatch(
        actions.set_xvcard_vs_mycard_price({
          xvcard_vs_mycard_price: DashboardData,
        })
      );
    })
    .catch((err) => {
      console.log(err);
    });
};

export const get_xvcard_vs_mycard_player_price = () => (dispatch) => {
  return dashboardAPI
    .get_xvcard_vs_mycard_player_price()
    .then((res) => {
      const DashboardData = res.data.price_vs_payfee;
      dispatch(
        actions.set_xvcard_vs_mycard_player_price({
          xvcard_vs_mycard_player_price: DashboardData,
        })
      );
    })
    .catch((err) => {
      console.log(err);
    });
};

export const get_xvcard_vs_mycard_price_month = () => (dispatch) => {
  return dashboardAPI
    .get_xvcard_vs_mycard_price_month()
    .then((res) => {
      const DashboardData = res.data.paykind_compare;
      dispatch(
        actions.set_xvcard_vs_mycard_price_month({
          xvcard_vs_mycard_price_month: DashboardData,
        })
      );
    })
    .catch((err) => {
      console.log(err);
    });
};
//乾爹抖內排行榜
export const get_donate_information = () => (dispatch) => {
  return dashboardAPI
    .get_donate_information()
    .then((res) => {
      const DashboardData = res.data;
      dispatch(
        actions.set_donate_information({
          donate_information: DashboardData,
        })
      );
    })
    .catch((err) => {
      console.log(err);
    });
};

export const get_sugar_daddy_ranking_month = ({chose_month}) => (dispatch) => {
  return dashboardAPI
    .get_sugar_daddy_ranking_month(chose_month)
    .then((res) => {
      const DashboardData = res.data.sugar_daddy_ranking_month;
      dispatch(
        actions.set_sugar_daddy_ranking_month({
          sugar_daddy_ranking_month: DashboardData,
        })
      );
    })
    .catch((err) => {
      console.log(err);
    });
};