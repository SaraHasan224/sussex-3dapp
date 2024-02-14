import React, { Fragment } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import MasterBanner from "./master";

const Data = [
  {
    img: "home1",
    title: "Coca Cola Great Britain",
    tinydesc: "The Coca Cola Company is the world's leading manufacturer, marketer and distributor of non-alcoholic beverage concentrates and syrups, and produces nearly 400 brands.",
    desc: "Founded by Dr John S Pemberton",
    link: "/left-sidebar/collection",
  },
  {
    img: "home2",
    title: "Coca Cola Great Britain",
    tinydesc: "The Coca Cola Company is the world's leading manufacturer, marketer and distributor of non-alcoholic beverage concentrates and syrups, and produces nearly 400 brands.",
    desc: "Founded by Dr John S Pemberton",
    link: "/left-sidebar/collection",
  },
];

const Banner = () => {
  return (
    <Fragment>
      <section className="p-0">
        <Slider className="slide-1 home-slider">
          {Data.map((data, i) => {
            return (
              <MasterBanner
                key={i}
                img={data.img}
                desc={data.desc}
                text={data.tinydesc}
                title={data.title}
                link={data.link}
              />
            );
          })}
        </Slider>
      </section>
    </Fragment>
  );
};

export default Banner;
