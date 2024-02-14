import React from "react";
import {
  IMAGE_SRCS,
} from "../../utils";
import { Container, Row, Col } from "reactstrap";
import MasterServiceContent from "./master";


const Data = [
  {
    link: IMAGE_SRCS.SVG_FREESHIPPING,
    title: "free shipping",
    service: "free shipping world wide",
  },
  {
    link: IMAGE_SRCS.SVG_SERVICE,
    title: "24 X 7 service",
    service: "online service for 24 x 7",
  },
  {
    link: IMAGE_SRCS.SVG_OFFER,
    title: "festival offer",
    service: "new online special festival offer",
  },
];

const Service = ({ sectionClass }) => {
  return (
    <Container>
      <section className={sectionClass}>
        <Row>
          {Data.map((data, index) => {
            return (
              <Col md="4" className="service-block" key={index}>
                <MasterServiceContent
                  link={data.link}
                  title={data.title}
                  service={data.service}
                />
              </Col>
            );
          })}
        </Row>
      </section>
    </Container>
  );
};

export default Service;