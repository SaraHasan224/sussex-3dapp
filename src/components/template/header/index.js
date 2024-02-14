import React, { useState, useEffect } from "react";

import { Media, Container, Row, Col } from "reactstrap";

import NavBar from "../common/navbar";
import SideBar from "../common/sidebar";
import {
  Cart
} from "../../../containers";
// import CartContainer from "../containers/CartContainer";
import TopBarDark from "../common/topbar-dark";
import LogoImage from "../common/logo";
import {
  IMAGE_SRCS
} from "../../../utils"
import SearchOverlay from "../common/search-overlay";

const Header = ({
  logoName,
  headerClass,
  topClass,
  noTopBar,
  direction,
}) => {

  /*=====================
     Pre loader
     ==========================*/
  useEffect(() => {
    setTimeout(function () {
      document.querySelectorAll(".loader-wrapper").style = "display:none";
    }, 2000);

    // if (router.asPath !== "/layouts/Christmas")
    //   window.addEventListener("scroll", handleScroll);

    // return () => {
    //   window.removeEventListener("scroll", handleScroll);
    // };
  }, []);

  /*
  const handleScroll = () => {
    let number =
      window.pageXOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    if (number >= 300) {
      if (window.innerWidth < 581)
        document.getElementById("sticky").classList.remove("fixed");
      else document.getElementById("sticky").classList.add("fixed");
    }
    else document.getElementById("sticky").classList.remove("fixed");
  };*/

  const openNav = () => {
    var openmyslide = document.getElementById("mySidenav");
    if (openmyslide) {
      openmyslide.classList.add("open-side");
    }
  };
  const openSearch = () => {
    document.getElementById("search-overlay").style.display = "block";
  };

  return (
    <div>
      <header id="sticky" className={`sticky ${headerClass}`}>
        <div className="mobile-fix-option"></div>
        {/*Top Header Component*/}
        <TopBarDark topClass={topClass} />

        <Container>
          <Row>
            <Col>
              <div className="main-menu">
                <div className="menu-left">
                  <div className="navbar">
                    <a href={null} onClick={openNav}>
                      <div className="bar-style">
                        <i
                          className="fa fa-bars sidebar-bar"
                          aria-hidden="true"
                        ></i>
                      </div>
                    </a>
                    {/*SideBar Navigation Component*/}
                    <SideBar />
                  </div>
                  <div className="brand-logo">
                    <LogoImage />
                  </div>
                </div>
                <div className="menu-right pull-right">
                  {/*Top Navigation Bar Component*/}
                   <NavBar />

                  <div>
                    <div className="icon-nav">
                      <ul>
                        <li className="onhover-div mobile-search">
                          <div>
                            <Media
                              src={IMAGE_SRCS.SEARCH.src}
                              onClick={openSearch}
                              className="img-fluid"
                              alt=""
                            />
                            <i
                              className="fa fa-search"
                              onClick={openSearch}
                            ></i>
                          </div>
                        </li>
                        {/*Header Cart Component */}
                         {/* {direction === undefined ? (
                          // <></>
                          <CartContainer layout={direction} icon={IMAGE_SRCS.CART.src} />
                        ) : (  */}
                          {/* <Cart layout={"ltr"} icon={IMAGE_SRCS.CART.src} /> */}
                        {/* )} */}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </header>

      <SearchOverlay />
    </div>
  );
};

export default Header;
