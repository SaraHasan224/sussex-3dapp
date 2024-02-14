import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Media } from "reactstrap";
import {
  COLLECTION_BANNER
} from "../../../utils"


const MasterCollectionBanner = ({ img, about, offer, link, desc, classes }) => {
  return (
    <Col md="4">
      <Link to={link}>
        {/* <a> */}
          <div className={`collection-banner ${classes}`}>
            <Media src={img} className="img-fluid" alt="" />
            <div className="contain-banner">
              <div>
                <h4>{offer}</h4>
                <h3>{about}</h3>
                <p className="w-70" style={{fontSize: "12px"}}>{desc}</p>
              </div>
            </div>
          </div>
        {/* </a> */}
      </Link>
    </Col>
  );
};

const CollectionBanner = () => {
  return (
    <Fragment>
      {/*collection banner*/}
      <section className="pb-0">
        <Container>
          <Row className="partition2">
            {COLLECTION_BANNER.map((data, i) => {
              return (
                <MasterCollectionBanner
                  key={i}
                  img={data.img}
                  about={data.about}
                  link={data.link}
                  offer={data.offer}
                  desc={data.desc}
                  classes={data.class}
                />
              );
            })}
          </Row>
        </Container>
      </section>
      {/*collection banner end*/}
    </Fragment>
  );
};

export default CollectionBanner;