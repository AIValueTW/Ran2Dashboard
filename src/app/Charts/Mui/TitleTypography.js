import React from "react";
import {Box, Typography } from "@mui/material";
import { styled } from "@mui/system";

export function TitleTypography({title, titleColors }) {
  const Title = styled(Typography)`
  font-size: 1vw;
  font-weight: 600;
  color: #000;
`;
  return (
    <>
      <Box
          style={{
            background: titleColors,
            textAlign:"center",
            padding:2
          }}
        >
          <Title>{title}</Title>
        </Box>
    </>
  );
}
