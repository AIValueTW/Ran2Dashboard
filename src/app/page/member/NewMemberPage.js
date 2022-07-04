import React, { useState, useEffect } from "react";
import * as actions from "../../datas/_redux/DashboardActions";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import Container from "@mui/material/Container";

import { Card, Stack } from "@mui/material";
import { LineChart } from "../../Charts/Apexchart/LineChart";
import { AreaChart } from "../../Charts/Apexchart/AreaChart";
import { RangeSlider } from "../../components/RangeSlider";

import { GoMonthAppBar } from "../../layout/components/appbar/DashboardAppBar";

export function NewMemberPage() {
  const [value, setValue] = useState("date");
  const [rangeDate, setRangeDate] = useState([null, null]);


  const dispatch = useDispatch();

  const {
    new_members,
    new_members_month,
  } = useSelector(
    (state) => ({
      new_members: state.dashboard.new_members,
      new_members_month: state.dashboard.new_members_month,
    }),
    shallowEqual
  );
  useEffect(() => {
    if (rangeDate[0] && rangeDate[1]) {
      dispatch(actions.get_new_members({ datetime: rangeDate }));
    }
  }, [rangeDate]);
  useEffect(() => {
    dispatch(actions.get_new_members_month());
  }, []);

  return (
    <>
      <GoMonthAppBar value={value} setValue={setValue} />
      <Container maxWidth="false">
        <Stack spacing={1} sx={{ mt:"6.5vh"}}>
          {value === "date" ? (
            <>
            <RangeSlider
                titleColors={"#faea9f"}
                setRangeDate={setRangeDate}
              />
              <Card raised={true} sx={{ height: "38vh" }}>
                <AreaChart
                  data={new_members&&new_members.member_count?.members || []}
                  date={new_members&&new_members.member_count?.date || []}
                  title={"加入會員數(含體驗帳號)"}
                  titleColors={"#faea9f"}
                  colors={["#1965ae", "#681e71"]}
                  height={"90%"}
                  pageValue={value}
                />
              </Card>
              <Card raised={true} sx={{ height: "38vh" }}>
                <LineChart
                  data={new_members&&new_members.mycard_charge_count?.mycard || []}
                  date={new_members&&new_members.mycard_charge_count?.date || []}
                  title={"MyCard儲值人數"}
                  titleColors={"#faea9f"}
                  colors={["#a05231"]}
                  height={"90%"}
                  pageValue={value}
                />
              </Card>
              
            </>
          ) : (
            <>
              <Card raised={true} sx={{ height: "45.5vh" }}>
                <AreaChart
                  data={new_members_month&&new_members_month.member_count_month?.member_month || []}
                  date={new_members_month&&new_members_month.member_count_month?.year_month || []}
                  title={"加入會員數(含體驗帳號)"}
                  titleColors={"#ffbcb2"}
                  colors={["#118bfb", "#12229c"]}
                  height={"90%"}
                  pageValue={value}
                />
              </Card>
              <Card raised={true} sx={{ height: "45.5vh" }}>
                <AreaChart
                  data={new_members_month&&new_members_month.mycard_charge_count_month?.mycard_month || []}
                  date={new_members_month&&new_members_month.mycard_charge_count_month?.year_month || []}
                  title={"MyCard儲值人數"}
                  titleColors={"#ffbcb2"}
                  colors={["#e26d3b"]}
                  height={"90%"}
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
