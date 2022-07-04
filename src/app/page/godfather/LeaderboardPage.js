import React, { useState, useEffect } from "react";
import * as actions from "../../datas/_redux/DashboardActions";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

import { Card } from "@mui/material";
import { BarChart } from "../../Charts/Apexchart/BarChart";

import { YearsCheckbox } from "../../components/YearsCheckbox";

import { DashboardAppBar } from "../../layout/components/appbar/DashboardAppBar";
export function LeaderboardPage() {
  const [selected, setSelected] = useState("all");

  const dispatch = useDispatch();

  const {
    sugar_daddy_ranking_month,
    checkboxOptions
  } = useSelector(
    (state) => ({
      sugar_daddy_ranking_month: state.dashboard.sugar_daddy_ranking_month,
      checkboxOptions: state.dashboard.checkboxOptions
    }),
    shallowEqual
  );

  useEffect(() => {
    dispatch(actions.get_sugar_daddy_ranking_month({chose_month:selected}));
    dispatch(actions.getCheckboxOptions());
  }, [selected]);

  return (
    <>
      <DashboardAppBar />
      <Container maxWidth="false">
        <Grid container spacing={1} sx={{ mt: "5.5vh" }}>
          <Grid item xs={10.5}>
            <Card raised={true} sx={{ height: "91vh" }}>
              <BarChart
                data={sugar_daddy_ranking_month?.father||[]}
                dataName={sugar_daddy_ranking_month?.name||[]}
                title={"乾爹排行榜"}
                titleColors={"#a0d1ff"}
                colors={["#57d9a3", "#00c7e6", "#ff8f73","#ffb1cf", "#998dd9", "#ffc400","#ffbdad","#79f2c0", "#a3bdc4", "#79e2f2"]}
                height={"96%"}
                stacked={false}
                distributed={true}
              />
            </Card>
          </Grid>
          <Grid item xs>
            <YearsCheckbox data={checkboxOptions?.month||[]} titleColors={"#a0d1ff"} selected={selected} setSelected={setSelected} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
