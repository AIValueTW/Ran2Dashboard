import React, { useState } from "react";

import {useNavigate} from 'react-router-dom';

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import ShowChartIcon from "@mui/icons-material/ShowChart";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

export function AddValueListItem() {
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
          <LocalAtmIcon style={{ color: "#fff" }}/>
        </ListItemIcon>
        <ListItemText primary={"儲值點數稽核"} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List disablePadding>
          <ListItem
            button
            sx={{ pl: 4 }}
            onClick={() => {
              navigate("/addvalue/mycard_points");
            }}
          >
            <ListItemIcon>
              <ShowChartIcon style={{ color: "#fff" }}/>
            </ListItemIcon>
            <ListItemText primary={"宅配通點數"} />
          </ListItem>
          <ListItem
            button
            sx={{ pl: 4 }}
            onClick={() => {
              navigate("/addvalue/pelican_points");
              
            }}
          >
            <ListItemIcon>
              <ShowChartIcon style={{ color: "#fff" }}/>
            </ListItemIcon>
            <ListItemText primary={"亂玩卡 / MyCard點數"} />
          </ListItem>
        </List>
      </Collapse>
    </>
  );
}
