import React from "react";
import { Provider } from "react-redux";
import { Redirect, Switch, Route, Routes } from "react-router-dom";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { OverviewPage } from "../../page/overview/OverviewPage";
import { NewMemberPage } from "../../page/member/NewMemberPage";
import { Button, Grid } from "@mui/material";
import { OnlineLoginPage } from "../../page/member/OnlineLoginPage";
import { PelicanPointsPage } from "../../page/add-value/PelicanPointsPage";
import { OnlinePeoplePage } from "../../page/member/OnlinePeoplePage";
import { MyCardPointsPage } from "../../page/add-value/MyCardPointsPage";
import { InsiderPage } from "../../page/godfather/InsiderPage";
import { LeaderboardPage } from "../../page/godfather/LeaderboardPage";
import { Aside } from "./aside/Aside";

import { MaterialThemeProvider } from "../_core/MaterialThemeProvider";

const drawerWidth = 260;

export default function SimpleTabs({ store }) {
  return (
    <Provider store={store}>
      <MaterialThemeProvider>
        <Box sx={{ display: "flex" }}>
          <Drawer
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              "& .MuiDrawer-paper": {
                width: drawerWidth,
                boxSizing: "border-box",
              },
            }}
            variant="permanent"
            anchor="left"
          >
            <Toolbar sx={{backgroundColor:"#022251",color:"#fff",textAlign:"center"}}>
              {/* <Box sx={{ display: "flex" }}>
                <Typography variant="h5"sx={{ fontWeight:600}}>亂2</Typography>
                <Typography variant="h5"sx={{ fontWeight:600}}>分析平台</Typography>
              </Box> */}
              <Grid 
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              >
                <Grid sx={{ fontSize:"28px",fontWeight:600}}>亂2</Grid>
                <Grid sx={{ fontSize:"28px",fontWeight:600}}>分析平台</Grid>
              </Grid>
            </Toolbar>
            {/* <Divider /> */}
            <CssBaseline />
            <Aside />
          </Drawer>

          <Routes>
            <Route exact path="" element={<OverviewPage />} />
            <Route
              exact
              path="/member/new_member"
              element={<NewMemberPage />}
            />
            <Route
              exact
              path="/member/online_people"
              element={<OnlinePeoplePage />}
            />
            <Route
              exact
              path="/member/online_login"
              element={<OnlineLoginPage />}
            />
            <Route
              exact
              path="/addvalue/mycard_points"
              element={<PelicanPointsPage />}
            />
            <Route
              exact
              path="/addvalue/pelican_points"
              element={<MyCardPointsPage />}
            />
            <Route exact path="/godfather/insider" element={<InsiderPage />} />
            <Route
              exact
              path="/godfather/leaderboard"
              element={<LeaderboardPage />}
            />
          </Routes>
        </Box>
      </MaterialThemeProvider>
    </Provider>
  );
}
