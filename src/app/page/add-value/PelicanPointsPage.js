import React, { useState, useEffect } from "react";
import * as actions from "../../datas/_redux/DashboardActions";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import Container from "@mui/material/Container";

import { Card, Stack } from "@mui/material";
import { LineChart } from "../../Charts/Apexchart/LineChart";
import { AreaChart } from "../../Charts/Apexchart/AreaChart";
import { RangeSlider } from "../../components/RangeSlider";

import { GoMonthAppBar } from "../../layout/components/appbar/DashboardAppBar";

export function PelicanPointsPage() {
  const [value, setValue] = useState("date");
  const [rangeDate, setRangeDate] = useState([null, null]);


  const dispatch=useDispatch()

  const{
    xvgo_information,
    xvgo_information_month
  }=useSelector(
    (state)=>({
      xvgo_information:state.dashboard.xvgo_information,
      xvgo_information_month:state.dashboard.xvgo_information_month,
    }),
    shallowEqual
  )

  useEffect(()=>{
    if (rangeDate[0] && rangeDate[1]) {
    dispatch(actions.get_xvgo_information({datetime:rangeDate}))
    }
  },[rangeDate])
  useEffect(()=>{

    dispatch(actions.get_xvgo_information_month())
  },[])

  return (
    <>
      <GoMonthAppBar value={value} setValue={setValue} />
      <Container maxWidth="false">
        <Stack spacing={1} sx={{ mt: "6.5vh"  }}>
          {value==="date"?(
            <>
<RangeSlider titleColors={"#faea9f"} setRangeDate={setRangeDate}/>
            <Card raised={true} sx={{ height: "35vh" }}>
            <AreaChart
              data={xvgo_information&&xvgo_information.xvgo_charge_price?.points || []}
              date={xvgo_information&&xvgo_information.xvgo_charge_price?.date || []}
              title={"宅配通儲值點數"}
              titleColors={"#faea9f"}
              colors={["#db6871", "#01b552"]}
              height={"89%"}
              pageValue={value}
            />
          </Card>
          <Card raised={true} sx={{ height: "20vh" }}>
            <LineChart
              data={xvgo_information&&xvgo_information.account_maintance_fee_price?.keep || []}
              date={xvgo_information&&xvgo_information.account_maintance_fee_price?.date || []}
              title={"帳號維持費"}
              titleColors={"#faea9f"}
              colors={["#118cfe"]}
              height={"82%"}
              pageValue={value}
            />
          </Card>
          <Card raised={true} sx={{ height: "20vh" }}>
            <LineChart
              data={xvgo_information&&xvgo_information.not_ranshop_deduct_point?.other || []}
              date={xvgo_information&&xvgo_information.not_ranshop_deduct_point?.date || []}
              title={"非商城扣點"}
              titleColors={"#faea9f"}
              colors={["#118cfe"]}
              height={"82%"}
              pageValue={value}
            />
          </Card>

          
            </>
          ):(
            <>
                 <Card raised={true} sx={{ height: "40vh" }}>
            <AreaChart
              data={xvgo_information_month&&xvgo_information_month.xvgo_charge_price_month?.points_month || []}
              date={xvgo_information_month&&xvgo_information_month.xvgo_charge_price_month?.year_month || []}
              title={"宅配通儲值點數"}
              titleColors={"#ffbcb2"}
              colors={["#db6871", "#01b552"]}
              height={"90%"}
              pageValue={value}
            />
          </Card>
          <Card raised={true} sx={{ height: "25vh" }}>
            <LineChart
              data={xvgo_information_month&&xvgo_information_month.account_maintance_fee_price_month?.keep_month || []}
              date={xvgo_information_month&&xvgo_information_month.account_maintance_fee_price_month?.year_month || []}
              title={"帳號維持費"}
              titleColors={"#ffbcb2"}
              colors={["#118cfe"]}
              height={"85%"}
              pageValue={value}
            />
          </Card>
          <Card raised={true} sx={{ height: "25vh" }}>
            <LineChart
              data={xvgo_information_month&&xvgo_information_month.not_ranshop_deduct_point_month?.other_month || []}
              date={xvgo_information_month&&xvgo_information_month.not_ranshop_deduct_point_month?.year_month || []}
              title={"非商城扣點"}
              titleColors={"#ffbcb2"}
              colors={["#118cfe"]}
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
