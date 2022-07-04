import React, { useEffect } from "react";
import * as actions from "../../datas/_redux/DashboardActions";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { Card } from "@mui/material";

import { AreaChart } from "../../Charts/Apexchart/AreaChart";
import { BarChart } from "../../Charts/Apexchart/BarChart";
import { PieChart } from "../../Charts/Nivo/PieChart";


import { MonthAppBar } from "../../layout/components/appbar/DashboardAppBar";
export function MyCardPointsPage() {


  const dispatch=useDispatch()

  const{
    xvcard_vs_mycard_price,xvcard_vs_mycard_player_price,xvcard_vs_mycard_price_month
  }=useSelector(
    (state)=>({
      xvcard_vs_mycard_price:state.dashboard.xvcard_vs_mycard_price,
      xvcard_vs_mycard_player_price:state.dashboard.xvcard_vs_mycard_player_price,
      xvcard_vs_mycard_price_month:state.dashboard.xvcard_vs_mycard_price_month,
    }),
    shallowEqual
  )

  useEffect(()=>{
    dispatch(actions.get_xvcard_vs_mycard_price())
    dispatch(actions.get_xvcard_vs_mycard_player_price())
    dispatch(actions.get_xvcard_vs_mycard_price_month())
  },[])

  return (
    <>
      <MonthAppBar />
      <Container maxWidth="false">
        <Grid container spacing={1} sx={{ mt: "5.5vh"  }}>
          <Grid item xs={6}>
            <Card raised={true} sx={{ height: "44vh" }}>
              <PieChart
                data={xvcard_vs_mycard_price?.card_mycard || []}
                title={"亂玩卡(xvcard)點數 vs MyCard點數"}
                titleColors={"#a0d1ff"}
                colors={["#118dff", "#e66c37"]}
                height={"93%"}
              />
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card raised={true} sx={{ height: "44vh" }}>
              <BarChart
                data={xvcard_vs_mycard_player_price?.rank||[]}
                dataName={xvcard_vs_mycard_player_price?.name||[]}
                title={"玩家累積點數"}
                titleColors={"#a0d1ff"}
                colors={["#118dff", "#e66c37"]}
                height={"91%"}
                stacked={true}
              />
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card raised={true} sx={{ height: "46.5vh" }}>
              <AreaChart
                data={xvcard_vs_mycard_price_month?.month || []}
                date={xvcard_vs_mycard_price_month?.year_month || []}
                title={"亂玩卡(xvcard)點數 vs MyCard點數"}
                titleColors={"#ffb4b4"}
                colors={["#118dff", "#e66c37"]}
                height={"91%"}
              />
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
