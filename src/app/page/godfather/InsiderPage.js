import React, {  useEffect } from "react";
import * as actions from "../../datas/_redux/DashboardActions";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

import { Card, Stack } from "@mui/material";
import { AreaChart } from "../../Charts/Apexchart/AreaChart";
import { BarChart } from "../../Charts/Apexchart/BarChart";
import { CompareTable } from "./components/CompareTable";
import { PayfeeTable } from "./components/PayfeeTable";

import { DashboardAppBar } from "../../layout/components/appbar/DashboardAppBar";

export function InsiderPage() {
  
  const dispatch = useDispatch();

  const {
    donate_information
  } = useSelector(
    (state) => ({
      donate_information: state.dashboard.donate_information
    }),
    shallowEqual
  );

  useEffect(() => {
    dispatch(actions.get_donate_information());
  }, []);

  return (
    <>
      <DashboardAppBar />
      <Container maxWidth="false">
        <Grid container spacing={1} sx={{ mt: "5.5vh"  }}>
          <Grid item xs={12}>
            <Card raised={true} sx={{ height: "35vh" }}>
              <AreaChart
                data={donate_information&&donate_information.total_consumption_price_month?.month||[]}
                date={donate_information&&donate_information.total_consumption_price_month?.year_month||[]}
                title={"每個月總金額"}
                titleColors={"#a0d1ff"}
                colors={["#6f92b2", "#545454", "#557592"]}
                height={"88%"}
              />
            </Card>
          </Grid>
          <Grid item xs={8}>
            <Card raised={true} sx={{ height: "56vh" }}>
              <BarChart
                data={donate_information&&donate_information.sugar_daddy_total_consumption_price?.accumulation||[]}
                dataName={donate_information&&donate_information.sugar_daddy_total_consumption_price?.name||[]}
                title={"乾爹累積金額"}
                titleColors={"#a0d1ff"}
                colors={["#6f86b2", "#545454", "#557592"]}
                height={"93%"}
                stacked={false}
              />
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Stack spacing={1}>
              <Card raised={true} sx={{ height: "31vh" }}>
                <CompareTable data={donate_information&&donate_information.price_vs_payfee?.details || []} titleColors={"#a0d1ff"}/>
              </Card>
              <Card raised={true} sx={{ height: "24.1vh" }}>
                <PayfeeTable data={donate_information&&donate_information.paykind_compare?.commission || []} titleColors={"#a0d1ff"}/>
              </Card>
            </Stack>
          </Grid>
          {/* <Grid item>
            <CompareDataGrid/>
          </Grid> */}
        </Grid>
      </Container>
    </>
  );
}
