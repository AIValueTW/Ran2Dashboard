import React, { useState, useEffect } from "react";
import * as actions from "../../datas/_redux/DashboardActions";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import Container from "@mui/material/Container";

import { Card, Stack } from "@mui/material";

import { AreaChart } from "../../Charts/Apexchart/AreaChart";
import { RangeSlider } from "../../components/RangeSlider";

import { GoMonthAppBar } from "../../layout/components/appbar/DashboardAppBar";

export function OnlinePeoplePage() {
  const [value, setValue] = useState("date");
  const [rangeDate, setRangeDate] = useState([null, null]);

  const dispatch = useDispatch();

  const {online_members,online_members_month} = useSelector(
    (state) => ({
      online_members: state.dashboard.online_members,
      online_members_month: state.dashboard.online_members_month,
    }),
    shallowEqual
  );

  useEffect(() => {
    if (rangeDate[0] && rangeDate[1]) {
      dispatch(actions.get_online_members({datetime:rangeDate}));
    }
  }, [rangeDate]);
  useEffect(() => {
    dispatch(actions.get_online_members_month());
  }, []);

  return (
    <>
      <GoMonthAppBar value={value} setValue={setValue} />
      <Container maxWidth="false">
        <Stack spacing={1} sx={{ mt: "6.5vh"  }}>
          {value === "date" ? (
            <>
            
            <RangeSlider
                titleColors={"#faea9f"}
                setRangeDate={setRangeDate}
              />
              <Card raised={true} sx={{ height: "76vh" }}>
                <AreaChart
                  data={online_members?.online || []}
                  date={online_members?.date || []}
                  titleColors={"#faea9f"}
                  title={"上線人數(每小時)"}
                  colors={["#40a1fb"]}
                  height={"95%"}
                  pageValue={value}
                />
              </Card>

            </>
          ) : (
            <Card raised={true} sx={{ height: "92vh" }}>
              <AreaChart
                data={online_members_month?.online_month || []}
                date={online_members_month?.year_month || []}
                titleColors={"#ffbcb2"}
                title={"上線人數(每小時)"}
                colors={["#12b383"]}
                height={"95%"}
                pageValue={value}
              />
            </Card>
          )}
        </Stack>
      </Container>
    </>
  );
}
