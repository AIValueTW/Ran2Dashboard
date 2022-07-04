import * as React from "react";

import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Zoom from "@mui/material/Zoom";

import Panghsuan from "./img/邦軒去背.png";
import Elegant from "./img/忠大去背.png";
import Jason from "./img/阿嗚去背.png";
import Wei from "./img/威男去背.png";
import Alan from "./img/憲文去背.png";
import BackgroundImage from "./img/background/background.jpg";
import BackgroundImage2 from "./img/background/background2.jpg";
import BackgroundImage3 from "./img/background/background3.jpg";
import BackgroundImage4 from "./img/background/background4.jpg";
import BackgroundImage5 from "./img/background/background5.jpg";
import BackgroundImage6 from "./img/background/background6.jpg";
import BackgroundImage7 from "./img/background/background7.jpg";
import BackgroundImage8 from "./img/background/background8.jpg";
import BackgroundImage9 from "./img/background/background9.jpg";
import BackgroundImage10 from "./img/background/background10.jpg";
import BackgroundImage11 from "./img/background/background11.jpg";
import BackgroundImage12 from "./img/background/background12.jpg";
import BackgroundImage13 from "./img/background/background13.jpg";
import BackgroundImage14 from "./img/background/background14.jpg";
import BackgroundImage15 from "./img/background/background15.jpg";

import { Container, Grid } from "@mui/material";

const icon = (
  <Paper sx={{ m: 1 }} elevation={4}>
    <Box component="svg" sx={{ width: 100, height: 100 }}>
      <Box
        component="polygon"
        sx={{
          fill: (theme) => theme.palette.common.white,
          stroke: (theme) => theme.palette.divider,
          strokeWidth: 1,
        }}
        points="0,100 50,00, 100,100"
      />
    </Box>
  </Paper>
);

const styles = {
  paperContainer: {
    backgroundImage: `url(${"./app/overview/img/background.jpg"})`,
  },
};

const BackgroundImageArray = [
  BackgroundImage,
  BackgroundImage2,
  BackgroundImage3,
  BackgroundImage4,
  BackgroundImage5,
  BackgroundImage6,
  BackgroundImage7,
  BackgroundImage8,
  BackgroundImage9,
  BackgroundImage10,
  BackgroundImage11,
  BackgroundImage12,
  BackgroundImage13,
  BackgroundImage14,
  BackgroundImage15,
];

export function OverviewPage() {
  return (
    <Container maxWidth="false">
      <Box
        class="BackgroundImape"
        style={{
          backgroundImage: `url(${BackgroundImageArray[Math.floor(Math.random() * BackgroundImageArray.length)]})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "100%",
          position: "fixed",
          width: "100%",
          top: 0,
          left: 0,
          bottom: 0,
          marginBottom:"5vh"
        }}
      >
        <Grid
          container
          justifyContent="space-between"
          alignItems="flex-end"
          sx={{ height: "80vh" }}
        >
          <Grid item irection="row" sx={{ width: "30vw", ml: "16vw" }}>
            <Zoom in={true}>
              <img src={Panghsuan} height={170} width={150} />
            </Zoom>
            <Zoom in={true} style={{ transitionDelay: "300ms" }}>
              <img src={Elegant} height={170} width={150} />
            </Zoom>
            <Zoom in={true} style={{ transitionDelay: "600ms" }}>
              <img src={Jason} height={180} width={150} />
            </Zoom>
          </Grid>
          <Grid item irection="row" sx={{ width: "29vw" }}>
            <Zoom in={true} style={{ transitionDelay: "900ms" }}>
              <img src={Wei} height={170} width={150} />
            </Zoom>
            <Zoom in={true} style={{ transitionDelay: "1200ms" }}>
              <img src={Alan} height={170} width={150} />
            </Zoom>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
