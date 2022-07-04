import React, { useState, useEffect } from "react";
import * as actions from "../../datas/_redux/DashboardActions";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import Container from "@mui/material/Container";

import { Card, Stack } from "@mui/material";
import { AreaChart } from "../../Charts/Apexchart/AreaChart";
import { RangeSlider } from "../../components/RangeSlider";

import { GoMonthAppBar } from "../../layout/components/appbar/DashboardAppBar";

export function OnlineLoginPage() {
  const [value, setValue] = useState("date");
  const [rangeDate, setRangeDate] = useState([null, null]);

  const dispatch = useDispatch();

  const {
    online_information,
    online_information_month
  } = useSelector(
    (state) => ({
      online_information: state.dashboard.online_information,
      online_information_month: state.dashboard.online_information_month,
    }),
    shallowEqual
  );

  useEffect(() => {
    if (rangeDate[0] && rangeDate[1]) {
      dispatch(actions.get_online_information({datetime:rangeDate}));
    }
  }, [rangeDate]);
  useEffect(() => {
    dispatch(actions.get_online_information_month());
  }, []);

  return (
    <>
      <GoMonthAppBar value={value} setValue={setValue} />
      <Container maxWidth="false">
        <Stack spacing={1} sx={{ mt: "6.5vh" }}>
          {value === "date" ? (
            <>
            <RangeSlider
                titleColors={"#faea9f"}
                setRangeDate={setRangeDate}
              />
              <Card raised={true} sx={{ height: "18.5vh" }}>
                <AreaChart
                  data={online_information&&online_information.unique_login_count?.login || []}
                  date={online_information&&online_information.unique_login_count?.date || []}
                  title={"不重複Login人數"}
                  titleColors={"#faea9f"}
                  colors={["#118cfe"]}
                  height={"80%"}
                  pageValue={value}
                />
              </Card>
              <Card raised={true} sx={{ height: "18.5vh" }}>
                <AreaChart
                  data={online_information&&online_information.unique_login_ip_count?.ip || []}
                  date={online_information&&online_information.unique_login_ip_count?.date || []}
                  title={"不重複登入IP數量"}
                  titleColors={"#faea9f"}
                  colors={["#118cfe"]}
                  height={"80%"}
                  pageValue={value}
                />
              </Card>
              <Card raised={true} sx={{ height: "18.5vh" }}>
                <AreaChart
                  data={online_information&&online_information.itemshop_consumption_price?.Consumption || []}
                  date={online_information&&online_information.itemshop_consumption_price?.date || []}
                  title={"itemshop消費總點"}
                  titleColors={"#faea9f"}
                  colors={["#118cfe"]}
                  height={"80%"}
                  pageValue={value}
                />
              </Card>
              <Card raised={true} sx={{ height: "18.5vh" }}>
                <AreaChart
                  data={online_information&&online_information.itemshop_consumption_count?.people || []}
                  date={online_information&&online_information.itemshop_consumption_count?.date || []}
                  title={"itemshop消費人數"}
                  titleColors={"#faea9f"}
                  colors={["#118cfe"]}
                  height={"80%"}
                  pageValue={value}
                />
              </Card>

              
            </>
          ) : (
            <>
              <Card raised={true} sx={{ height: "22.5vh" }}>
                <AreaChart
                  data={online_information_month&&online_information_month.unique_login_count_month?.login_month || []}
                  date={online_information_month&&online_information_month.unique_login_count_month?.year_month || []}
                  title={"不重複Login人數"}
                  titleColors={"#ffbcb2"}
                  colors={["#e29197"]}
                  height={"85%"}
                  pageValue={value}
                />
              </Card>
              <Card raised={true} sx={{ height: "22.5vh" }}>
                <AreaChart
                  data={online_information_month&&online_information_month.unique_loginip_count_month?.ip_month || []}
                  date={online_information_month&&online_information_month.unique_loginip_count_month?.year_month || []}
                  title={"不重複登入IP數量"}
                  titleColors={"#ffbcb2"}
                  colors={["#e29197"]}
                  height={"85%"}
                  pageValue={value}
                />
              </Card>
              <Card raised={true} sx={{ height: "22.5vh" }}>
                <AreaChart
                  data={online_information_month&&online_information_month.itemshop_consumption_price_month?.Consumption_month || []}
                  date={online_information_month&&online_information_month.itemshop_consumption_price_month?.year_month || []}
                  title={"itemshop消費總點"}
                  titleColors={"#ffbcb2"}
                  colors={["#e29197"]}
                  height={"85%"}
                  pageValue={value}
                />
              </Card>
              <Card raised={true} sx={{ height: "22.5vh" }}>
                <AreaChart
                  data={online_information_month&&online_information_month.itemshop_consumption_count_month?.people_month || []}
                  date={online_information_month&&online_information_month.itemshop_consumption_count_month?.year_month || []}
                  title={"itemshop消費人數"}
                  titleColors={"#ffbcb2"}
                  colors={["#e29197"]}
                  height={"85%"}
                  pageValue={value}
                />
              </Card>
            </>
          )}
        </Stack>
      </Container>
    </>
  );
}
