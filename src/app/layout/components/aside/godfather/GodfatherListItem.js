import React, { useState } from "react";

import {useNavigate} from 'react-router-dom';

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import FaceIcon from '@mui/icons-material/Face';
import ShowChartIcon from "@mui/icons-material/ShowChart";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

export function GodfatherListItem() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <ListItem
        button
        onClick={() => {
          handleClick();
        }}
      >
        <ListItemIcon>
          <FaceIcon style={{ color: "#fff" }}/>
        </ListItemIcon>
        <ListItemText primary={"乾爹抖內排行榜"} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List disablePadding>
          <ListItem
            button
            sx={{ pl: 4 }}
            onClick={() => {
              navigate("/godfather/insider");
            }}
          >
            <ListItemIcon>
              <ShowChartIcon style={{ color: "#fff" }}/>
            </ListItemIcon>
            <ListItemText primary={"抖內內幕"} />
          </ListItem>
          <ListItem
            button
            sx={{ pl: 4 }}
            onClick={() => {
              navigate("/godfather/leaderboard");
              
            }}
          >
            <ListItemIcon>
              <ShowChartIcon style={{ color: "#fff" }}/>
            </ListItemIcon>
            <ListItemText primary={"每月乾爹排行榜"} />
          </ListItem>
        </List>
      </Collapse>
    </>
  );
}
