import React, { useContext, useEffect, useState } from "react";
import Slider from "react-slick";
import { Row, Col, Container, Media } from "reactstrap";
import CartContext from "../../../providers/cart";
import {
  PostLoader,
  ProductBox
} from "../../../components";
import {
    PRODUCT_DATA
} from "../../../utils"
// import search from "../../../public/assets/images/empty-search.jpg";

const TopCollection = ({ type, title, subtitle, designClass, noSlider, cartClass, productSlider, titleClass, noTitle, innerClass, inner, backImage }) => {
  const context = useContext(CartContext);
  const quantity = context.quantity;
  const [delayProduct, setDelayProduct] = useState(true);
  const loading = false;
  // var { loading, data } = useQuery(GET_PRODUCTS, {
  //   variables: {
  //     type: type,
  //     indexFrom: 0,
  //     limit: 8,
  //   },
  // });

  useEffect(() => {
    if (PRODUCT_DATA === undefined) {
    // eslint-disable-next-line
      noSlider === false;
    } else {
    // eslint-disable-next-line
      noSlider === true;
    }
    setTimeout(() => {
      setDelayProduct(false);
    }, 1);
    // eslint-disable-next-line
  }, [delayProduct]);

  return (
    <>
      <section className={designClass}>
        {noSlider ? (
          <Container>
            <Row>
              <Col>
                {noTitle === "null" ? (
                  ""
                ) : (
                  <div className={innerClass}>
                    {subtitle ? <h4>{subtitle}</h4> : ""}
                    <h2 className={inner}>{title}</h2>
                    {titleClass ? (
                      <hr role="tournament6" />
                    ) : (
                      <div className="line">
                        <span></span>
                      </div>
                    )}
                  </div>
                )}

                {delayProduct ? (
                  <div className="row mx-0 margin-default">
                    <div className="col-xl-3 col-lg-4 col-6">
                      <PostLoader />
                    </div>
                    <div className="col-xl-3 col-lg-4 col-6">
                      <PostLoader />
                    </div>
                    <div className="col-xl-3 col-lg-4 col-6">
                      <PostLoader />
                    </div>
                    <div className="col-xl-3 col-lg-4 col-6">
                      <PostLoader />
                    </div>
                  </div>
                ) : (
                  <Slider {...productSlider} className="product-m no-arrow">
                    {PRODUCT_DATA &&
                      PRODUCT_DATA.map((product, i) => (
                        <div key={i}>
                          <ProductBox
                            product={product}
                            title={title}
                            addCart={() => context.addToCart(product, quantity)}
                            cartClass={cartClass} backImage={backImage}
                          />
                        </div>
                      ))}
                  </Slider>
                )}
              </Col>
            </Row>
          </Container>
        ) : (
          <>
            {title ? (
              <div className="title1 title-gradient  section-t-space">
                <h4>{subtitle}</h4>
                <h2 className="title-inner1">{title}</h2>
                <hr role="tournament6" />
              </div>
            ) : (
              ""
            )}
            <Container>
              <Row className="margin-default">
                {!PRODUCT_DATA || !PRODUCT_DATA.length === 0 || loading ? (
                  <div className="row margin-default">
                    <div className="col-xl-3 col-lg-4 col-6">
                      <PostLoader />
                    </div>
                    <div className="col-xl-3 col-lg-4 col-6">
                      <PostLoader />
                    </div>
                    <div className="col-xl-3 col-lg-4 col-6">
                      <PostLoader />
                    </div>
                    <div className="col-xl-3 col-lg-4 col-6">
                      <PostLoader />
                    </div>
                  </div>
                ) : (
                    PRODUCT_DATA &&
                    PRODUCT_DATA.slice(0, 8).map((product, index) => (
                    <Col xl="3" sm="6" key={index}>
                      <div>
                        <ProductBox
                          product={product}
                          backImage={backImage}
                          title={title}
                          cartClass={cartClass}
                          addCart={() => context.addToCart(product, quantity)} key={index}
                        />
                      </div>
                    </Col>
                  ))
                )}
              </Row>
            </Container>
          </>
        )}
      </section>
    </>
  );
};

export default TopCollection;