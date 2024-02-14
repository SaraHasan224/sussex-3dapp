import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";

const MasterBanner = ({ img, title, desc, text, link, classes, btn, btnClass }) => {
  return (
    <div>
      <div className={`home ${img} ${classes ? classes : "text-center"}`}>
        <Container>
          <Row>
            <Col>
              <div className="slider-contain">
                <div className="slider-parent">
                  <h1>{title}</h1>
                  <h4>{desc}</h4>
                  <h5>{text}</h5>
                  <Link
                    to={link}
                    className={`btn ${btnClass ? btnClass : "btn-solid"}`}>
                    {/* <a > */}
                    {btn ? btn : "Shop Now"} {/* </a> */}
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default MasterBanner;