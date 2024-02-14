import React, { Fragment } from "react";
import { Row, Col, Media } from "reactstrap";
import {
  IMAGE_SRCS
} from "../../../../utils"

const SideBar = () => {
  const closeNav = () => {
    var closemyslide = document.getElementById("mySidenav");
    if (closemyslide) closemyslide.classList.remove("open-side");
  };

  const handleSubmenu = (event) => {
    if (event.target.classList.contains("sub-arrow")) {
      return;
    }

    if (event.target.nextElementSibling.classList.contains("opensub1"))
      event.target.nextElementSibling.classList.remove("opensub1");
    else {
      document.querySelectorAll(".opensub1").forEach(function (value) {
        value.classList.remove("opensub1");
      });
      event.target.nextElementSibling.classList.add("opensub1");
    }
  };

  const handleSubTwoMenu = (event) => {
    if (event.target.classList.contains("sub-arrow")) return;

    if (event.target.nextElementSibling.classList.contains("opensub2"))
      event.target.nextElementSibling.classList.remove("opensub2");
    else {
      document.querySelectorAll(".opensub2").forEach(function (value) {
        value.classList.remove("opensub2");
      });
      event.target.nextElementSibling.classList.add("opensub2");
    }
  };
  const handleSubThreeMenu = (event) => {
    if (event.target.classList.contains("sub-arrow")) return;

    if (event.target.nextElementSibling.classList.contains("opensub3"))
      event.target.nextElementSibling.classList.remove("opensub3");
    else {
      document.querySelectorAll(".opensub3").forEach(function (value) {
        value.classList.remove("opensub3");
      });
      event.target.nextElementSibling.classList.add("opensub3");
    }
  };

  const handleSubFourMenu = (event) => {
    if (event.target.classList.contains("sub-arrow")) return;

    if (event.target.nextElementSibling.classList.contains("opensub4"))
      event.target.nextElementSibling.classList.remove("opensub4");
    else {
      document.querySelectorAll(".opensub4").forEach(function (value) {
        value.classList.remove("opensub4");
      });
      event.target.nextElementSibling.classList.add("opensub4");
    }
  };

  const handleMegaSubmenu = (event) => {
    if (event.target.classList.contains("sub-arrow")) return;

    if (event.target.nextElementSibling.classList.contains("opensidesubmenu"))
      event.target.nextElementSibling.classList.remove("opensidesubmenu");
    else {
      event.target.nextElementSibling.classList.add("opensidesubmenu");
    }
  };

  return (
    <Fragment>
      <div id="mySidenav" className="sidenav">
        <a href={null} className="sidebar-overlay" onClick={closeNav}></a>
        <nav>
          <a href={null} onClick={closeNav}>
            <div className="sidebar-back text-start">
              <i className="fa fa-angle-left pe-2" aria-hidden="true"></i> Back
            </div>
          </a>
          <ul id="sub-menu" className="sidebar-menu">
            <li>
              <a href="#" onClick={(e) => handleMegaSubmenu(e)}>
                Our Company
                <span className="sub-arrow"></span>
              </a>
              <ul className="mega-menu clothing-menu">
                <li>
                  <Row m="0">
                    <Col xl="4">
                      <div className="link-section">
                        <ul>
                          <li>
                            <a href="#">Purpose & Company Vision</a>
                          </li>
                          <li>
                            <a href="#">The CocaCola System</a>
                          </li>
                          <li>
                            <a href="#">Leadership</a>
                          </li>
                          <li>
                            <a href="#">Our Board of Directors</a>
                          </li>
                        </ul>
                        <h5>Coca Cola History</h5>
                        <ul>
                          <li>
                            <a href="#">Our Origins</a>
                          </li>
                          <li>
                            <a href="#">Our First Bottle</a>
                          </li>
                          <li>
                            <a href="#">Sustainablity History</a>
                          </li>
                          <li>
                            <a href="#">Advertising History</a>
                          </li>
                        </ul>
                      </div>
                    </Col>
                  </Row>
                </li>
              </ul>
            </li>
            <li>
              <a href="#" onClick={(e) => handleSubmenu(e)}>
                Brands
                <span className="sub-arrow"></span>
              </a>
              <ul>
                <li>
                  <a href="#" onClick={(e) => handleSubTwoMenu(e)}>
                    Sparkling
                    <span className="sub-arrow"></span>
                  </a>
                  <ul>
                    <li>
                      <a href="#">Coca-Cola</a>
                    </li>
                    <li>
                      <a href="#">Diet Coke</a>
                    </li>
                    <li>
                      <a href="#">Fanta</a>
                    </li>
                    <li>
                      <a href="#">Sprite</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#" onClick={(e) => handleSubTwoMenu(e)}>
                  Hydration
                    <span className="sub-arrow"></span>
                  </a>
                  <ul>
                    <li>
                      <a href="#">AHA</a>
                    </li>
                    <li>
                      <a href="#">BODYARMOR</a>
                    </li>
                    <li>
                      <a href="#">Dasani</a>
                    </li>
                    <li>
                      <a href="#">Powerade</a>
                    </li>
                    <li>
                      <a href="#">smartwater</a>
                    </li>
                    <li>
                      <a href="#">Topo Chico</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#" onClick={(e) => handleSubTwoMenu(e)}>
                  Coffee & Tea
                    <span className="sub-arrow"></span>
                  </a>
                  <ul>
                    <li>
                      <a href="#">Costa Coffee</a>
                    </li>
                    <li>
                      <a href="#">FuzeTea</a>
                    </li>
                    <li>
                      <a href="#">Gold Peak Tea</a>
                    </li>
                    <li>
                      <a href="#">Peace Tea</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#" onClick={(e) => handleSubTwoMenu(e)}>
                  Juices & Dairy
                    <span className="sub-arrow"></span>
                  </a>
                  <ul>
                    <li>
                      <a href="#">fairlife</a>
                    </li>
                    <li>
                      <a href="#">innocent</a>
                    </li>
                    <li>
                      <a href="#">Minute Maid</a>
                    </li>
                    <li>
                      <a href="#">Simply</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">
                Sustainability
              </a>
            </li>
            <li>
              <a href="#" onClick={(e) => handleSubmenu(e)}>
                Social
                <span className="sub-arrow"></span>
              </a>
              <ul>
                <li>
                  <a href="#">
                    Diversity, equity and inclusion
                    <span className="sub-arrow"></span>
                  </a>
                  <ul>
                    <li>
                      <a href="#">Leadership Council</a>
                    </li>
                    <li>
                      <a href="#">Employee Groups</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">
                    People & Communities
                    <span className="sub-arrow"></span>
                  </a>
                  <ul>
                    <li>
                      <a href="#">Women Empowerment</a>
                    </li>
                    <li>
                      <a href="#">Project Last Mile</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">
                    Human Rights
                    <span className="sub-arrow"></span>
                  </a>
                  <ul>
                    <li>
                      <a href="#">Human Right Governance</a>
                    </li>
                    <li>
                      <a href="#">Stories of Impact</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <a href="#" onClick={(e) => handleSubmenu(e)}>
                Careers
                <span className="sub-arrow"></span>
              </a>
              <ul>
                <li>
                  <a href="#">
                    Life at Coca-Cola
                    <span className="sub-arrow"></span>
                  </a>
                  <ul>
                    <li>
                      <a href="#">Culture</a>
                    </li>
                    <li>
                      <a href="#">Benefits</a>
                    </li>
                    <li>
                      <a href="#">Career Development</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">
                    Career Areas
                    <span className="sub-arrow"></span>
                  </a>
                  <ul>
                    <li>
                      <a href="#">Early Career</a>
                    </li>
                    <li>
                      <a href="#">Experienced Professionals</a>
                    </li>
                    <li>
                      <a href="#">Military</a>
                    </li>
                    <li>
                      <a href="#">Accessible Workplace</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">
                    Hiring Process
                    <span className="sub-arrow"></span>
                  </a>
                  <ul>
                    <li>
                      <a href="#">Application process</a>
                    </li>
                    <li>
                      <a href="#">Interview</a>
                    </li>
                    <li>
                      <a href="#">Offers</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">Media Center</a>
            </li>
          </ul>
        </nav>
      </div>
    </Fragment>
  );
};

export default SideBar;
