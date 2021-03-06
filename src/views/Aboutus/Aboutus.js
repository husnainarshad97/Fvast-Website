import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
// import Button from "components/CustomButtons/Button.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/material-kit-react/views/landingPage.js";

// Sections for this page
// import ProductSection from "../LandingPage/Sections/ProductSection";
// import TeamSection from "../LandingPage/Sections/TeamSection.js";
import Columns3 from "./Columns3";
// import WorkSection from "../LandingPage/Sections/WorkSection.js";
// import Expage from "../LandingPage/Sections/exPage";
import AboutusX from "views/Aboutus/AboutusX";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="FVAST"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white",
        }}
        {...rest}
      />
      <Parallax filter image={require("assets/img/taxi4.jpg").default}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>About Us</h1>
              <h4>We ignite opportunity by setting the world in motion</h4>
              <br />
              {/* <Button
                color="danger"
                size="lg"
                to="https://www.youtube.com/watch?v=DS-raAyMxl4"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-play" />
                Watch video
              </Button> */}
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          {/* <ProductSection /> */}
          {/* <Expage /> */}
          <AboutusX />
          <Columns3 />

          {/* <SectionCarousel />
          <WorkSection /> */}
        </div>
      </div>
      <Footer />
    </div>
  );
}
