import React, { useState } from "react";

import {useNavigate} from 'react-router-dom';

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";

import InsertChartIcon from "@mui/icons-material/InsertChart";


export function OverviewListItem() {
  const navigate = useNavigate();

  return (
    <>
      <ListItem
        button
        onClick={() => {
          navigate("");
        }}
      >
        <ListItemIcon >
          <InsertChartIcon style={{ color: "#fff" }}/>
        </ListItemIcon>
        <ListItemText primary={"總覽"} />
      </ListItem>
     
    </>
  );
}
