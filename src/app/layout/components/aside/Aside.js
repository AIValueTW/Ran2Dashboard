import React from "react";

import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import { MemberListItem } from "./member/MemberListItem";
import { AddValueListItem } from "./add-value/AddValueListItem";
import { GodfatherListItem } from "./godfather/GodfatherListItem";
import { OverviewListItem } from "./overview/OverviewListItem";

export function Aside() {
  return (
    <>
    {/* <Divider /> */}
      <List>
        <OverviewListItem/>
      </List>
      <Divider />
      <List>
        <MemberListItem/>
      </List>
      <Divider />
      <List>
        <AddValueListItem/>
      </List>
      <Divider />
      <List>
        <GodfatherListItem/>
      </List>
      <Divider />
    </>
  );
}
