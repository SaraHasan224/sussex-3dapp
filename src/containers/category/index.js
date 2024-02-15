import React, { Fragment } from "react";
import Slider from "react-slick";
import { CATEGORY_DATA, CategorySlider } from "../../utils";
import { Media, Container, Col, Row } from "reactstrap";

const MasterCategory = ({ img, title, features, link }) => {
  return (
    <div>
      <div className="category-wrapper pt-0">
        <div>
          <div>
            <Media
              src={img}
              className="img-fluid blur-up lazyload bg-img"
              alt=""
            />
          </div>
          <h4>{title}</h4>
          <ul className="category-link">
            {features.map((data, i) => {
              return (
                <li key={i}>{data.title}</li>
              );
            })}
          </ul>
          <a href={link} className="btn btn-classic btn-outline">
            view more
          </a>
        </div>
      </div>
    </div>
  );
};

const Category = () => {
  return (
    <Fragment>
      <section className="pt-30 category-tools ratio3_2">
        <Container>
          <Row>
            <Col>
              <Slider {...CategorySlider} className="slide-4 category-m no-arrow">
                {CATEGORY_DATA.map((data, i) => {
                  return (
                    <MasterCategory
                      key={i}
                      img={data.img}
                      link={data.link}
                      title={data.title}
                      features={data.features}
                    />
                  );
                })}
              </Slider>
            </Col>
          </Row>
        </Container>
      </section>
    </Fragment>
  );
};

export default Category;
