import React, { useState } from "react";

import {useNavigate} from 'react-router-dom';

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShowChartIcon from "@mui/icons-material/ShowChart";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

export function MemberListItem() {
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
          <AccountCircleIcon style={{ color: "#fff" }}/>
        </ListItemIcon>
        <ListItemText primary={"會員中心"} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List disablePadding>
          <ListItem
            button
            sx={{ pl: 4 }}
            onClick={() => {
              navigate("/member/new_member");
            }}
          >
            <ListItemIcon>
              <ShowChartIcon style={{ color: "#fff" }}/>
            </ListItemIcon>
            <ListItemText primary={"新會員"} />
          </ListItem>
          <ListItem
            button
            sx={{ pl: 4 }}
            onClick={() => {
              navigate("/member/online_people");
              
            }}
          >
            <ListItemIcon>
              <ShowChartIcon style={{ color: "#fff" }}/>
            </ListItemIcon>
            <ListItemText primary={"Online - 人數"} />
          </ListItem>
          <ListItem
            button
            sx={{ pl: 4 }}
            onClick={() => {
              navigate("/member/online_login");
            }}
          >
            <ListItemIcon>
              <ShowChartIcon style={{ color: "#fff" }}/>
            </ListItemIcon>
            <ListItemText primary={"Online - 登入&消費"} />
          </ListItem>
          
        </List>
      </Collapse>
    </>
  );
}
