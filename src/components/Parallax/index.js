import React, { Fragment } from "react";
import { Container, Row, Col } from "reactstrap";
import MasterParallaxBanner from "./master";

const Parallax = () => {
  return (
    <Fragment>
      <MasterParallaxBanner
        bg="parallax-banner1"
        parallaxClass="text-center p-left"
        title="2024"
        subTitle1="Sustainability"
        subTitle2="Goals and Progress"
      />
    </Fragment>
  );
};

export default Parallax;