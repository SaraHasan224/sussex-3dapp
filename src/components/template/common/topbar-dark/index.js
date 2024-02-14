import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

const TopBarDark = ({ topClass, fluid }) => {
  const Logout = () => {
    localStorage.setItem("user", false);
    // router.push("/page/account/login-auth");
  };
  return (
    <div className={topClass}>
      <Container fluid={fluid}>
        <Row>
          <Col lg="6">
            <div className="header-contact">
              <ul>
                <li>Welcome to The Coca-Cola Company</li>
                <li>
                  <i className="fa fa-phone text-white" aria-hidden="true"></i>
                  Call Us: 1-888-348-2404.
                </li>
              </ul>
            </div>
          </Col>
          <Col lg="6" className="text-end d-none">
            <ul className="header-dropdown">
              <li className="mobile-wishlist">
                <Link to="/page/account/wishlist">
                  {/* <a> */}
                  <i className="fa fa-heart" aria-hidden="true"></i> wishlist
                  {/* </a> */}
                </Link>
              </li>
              <li className="onhover-dropdown mobile-account">
                <i className="fa fa-user" aria-hidden="true"></i> My Account
                <ul className="onhover-show-div">
                  <li>
                    <Link to={`/page/account/login`}>
                      {/* <a> */}
                      Login
                      {/* </a> */}
                    </Link>
                  </li>
                  <li>
                    <Link to={`/page/account/register`}>
                      {/* <a> */}
                      Register
                      {/* </a> */}
                    </Link>
                  </li>
                  <li onClick={() => Logout()}>
                    <a>Logout</a>
                  </li>
                </ul>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TopBarDark;