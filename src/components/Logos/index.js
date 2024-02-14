import React from "react";
import Slider from "react-slick";
import { Container, Row, Media, Col } from "reactstrap";

const Slider6 = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 6,
    responsive: [
      {
        breakpoint: 1367,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

const LogoBlock = ({ designClass }) => {
  const imgData = [
    "/assets/images/logos/1.png",
    "/assets/images/logos/2.png",
    "/assets/images/logos/3.png",
    "/assets/images/logos/4.png",
    "/assets/images/logos/5.png",
    "/assets/images/logos/6.png",
    "/assets/images/logos/7.png",
    "/assets/images/logos/8.png",
  ];
  return (
    <section className={designClass}>
      <Container>
        <Row>
          <Col md="12">
            <Slider {...Slider6} className="slide-6 no-arrow">
              {imgData.map((imgSrc, i) => {
                return (
                  <div key={i}>
                    <div className="logo-block">
                      <a href={null}>
                        <Media src={imgSrc} alt="" />
                      </a>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default LogoBlock;