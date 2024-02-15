import React, { useState } from "react";
import {
  Col,
  Media,
  Row,
  Modal,
  ModalBody,
  Form,
  Button,
  Collapse,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Input,
  Label
} from "reactstrap";
import {
  IMAGE_SRCS
} from "../../utils";

const CustomModal = () => {
  const [modal, setModal] = useState(true);
  
  const [isNecCookEnabled, setisNecCookEnabled] = useState(true);
  const [isAdvCookEnabled, setisAdvCookEnabled] = useState(false);
  const [isAnaCookEnabled, setisAnaCookEnabled] = useState(false);
  const [isPerCookEnabled, setisPerCookEnabled] = useState(false);

  const [isNecessaryCookies, setIsNecessaryCookies] = useState(true);
  const [isAdvertising, setIsAdvertising] = useState(false);
  const [AnalyticsCookies, setIsAnalyticsCookies] = useState(false);
  const [isPersonalization, setIsPersonalization] = useState(false);

  const toggleAdvertising = () => setIsAdvertising(!isAdvertising);
  const toggleAnalyticsCookies = () => setIsAnalyticsCookies(!AnalyticsCookies);
  const togglePersonalization = () => setIsPersonalization(!isPersonalization);
  const toggleNecessaryCookies = () => setIsNecessaryCookies(!isNecessaryCookies);
  const toggle = () => setModal(!modal);

  return (
    <Modal
      isOpen={modal}
      toggle={toggle}
      className="theme-modal modal-lg"
      centered
    >
      <div>
        <ModalBody className="modal1">
          <Row className="compare-modal">
            <Col lg="12">
              <div className="modal-bg">
                <Button
                  type="button"
                  className="btn-close"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={toggle}
                >
                </Button>
                <div className="offer-content">
                  <Media
                    src={IMAGE_SRCS.OFFERBANNER.src}
                    className="img-fluid blur-up lazyload"
                    alt=""
                  />
                  <h2>Cookies & Privacy</h2>
                  <Form
                    action="#"
                    className="auth-form needs-validation"
                    method="post"
                    id="mc-embedded-subscribe-form"
                    name="mc-embedded-subscribe-form"
                    target="_blank"
                  >
                    <div className="form-group mx-sm-3">
                      <p>
                        We use cookies to operate our website to show you personalized content and manage our objectives as a business. To change your preferences click manage settings below.
                        <br />
                        <br />
                        For more detailed information about cookies <i><a href="#">click here</a></i>
                      </p>

                      <Row className="product-accordion">
                        <Col sm="12">
                          <div className="accordion theme-accordion" id="accordionExample">
                            <Card>
                              <CardHeader className="card-header" id="headingOne">
                                <h5 className="mb-0 d-flex">
                                  <button
                                    className="btn btn-link align-items-start flex-column"
                                    type="button"
                                    onClick={toggleNecessaryCookies}
                                    aria-expanded="true"
                                    aria-controls="collapseOne"
                                  >
                                    Necessary cookies
                                  </button>
                                  <FormGroup switch className="d-flex align-items-end flex-column">
                                    <Input
                                      type="switch"
                                      checked={isNecCookEnabled}
                                      onClick={() => {
                                        setisNecCookEnabled(!isNecCookEnabled);
                                      }}
                                    />
                                  </FormGroup>
                                </h5>
                              </CardHeader>
                              <Collapse
                                isOpen={isNecessaryCookies}
                                id="collapseOne"
                                className="collapse"
                                aria-labelledby="headingOne"
                                data-parent="#accordionExample"
                              >
                                <div className="card-body">
                                  <p>
                                    These cookies are needed for essential functions such as security network management and accessibility. Standard cookies can’t be switched off.
                                  </p>
                                </div>
                              </Collapse>
                            </Card>
                            <Card className="card">
                              <CardHeader className="card-header" id="headingTwo">
                                <h5 className="mb-0 d-flex">
                                  <button
                                    className="btn btn-link align-items-start flex-columncollapsed"
                                    type="button"
                                    aria-expanded="false"
                                    onClick={toggleAdvertising}
                                    aria-controls="collapseTwo"
                                  >
                                    Advertising
                                  </button>
                                  <FormGroup switch className="d-flex align-items-end flex-column">
                                    <Input
                                      type="switch"
                                      checked={isAdvCookEnabled}
                                      onClick={() => {
                                        setisAdvCookEnabled(!isAdvCookEnabled);
                                      }}
                                    />
                                  </FormGroup>
                                </h5>
                              </CardHeader>
                              <Collapse
                                isOpen={isAdvertising}
                                id="collapseTwo"
                                className="collapse"
                                aria-labelledby="headingTwo"
                                data-parent="#accordionExample"
                              >
                                <CardBody>
                                  <div>
                                    <p> These cookies are set by us and/or our partners and help us build a profile of your interests based on your browsing profile. If you accept these cookies, you will be shown Coca-Cola advertisements that match your interests as you browse other sites </p>
                                  </div>
                                </CardBody>
                              </Collapse>
                            </Card>
                            <Card className="card">
                              <CardHeader className="card-header" id="headingThree">
                                <h5 className="mb-0 d-flex">
                                  <button
                                    className="btn btn-link align-items-start flex-columncollapsed"
                                    type="button"
                                    aria-expanded="false"
                                    onClick={toggleAnalyticsCookies}
                                    aria-controls="collapseThree"
                                  >
                                    Analytics Cookies
                                  </button>
                                  <FormGroup switch className="d-flex align-items-end flex-column">
                                    <Input
                                      type="switch"
                                      checked={isAnaCookEnabled}
                                      onClick={() => {
                                        setisAnaCookEnabled(!isAnaCookEnabled);
                                      }}
                                    />
                                  </FormGroup>
                                </h5>
                              </CardHeader>
                              <Collapse
                                isOpen={AnalyticsCookies}
                                id="collapseThree"
                                className="collapse"
                                aria-labelledby="headingThree"
                                data-parent="#accordionExample"
                              >
                                <CardBody className="card-body">
                                  <p>These cookies gather information such as how many users are using our site or which pages are popular to help us improve user experience. Switching off these cookies means we can’t gather information to improve the experience.</p>
                                </CardBody>
                              </Collapse>
                            </Card>
                            <Card className="card">
                              <CardHeader className="card-header" id="headingFour">
                                <h5 className="mb-0 d-flex">
                                  <button
                                    className="btn btn-link align-items-start flex-columncollapsed"
                                    type="button"
                                    aria-expanded="false"
                                    onClick={togglePersonalization}
                                    aria-controls="collapseThree"
                                  >
                                    Personalization
                                  </button>
                                  <FormGroup switch className="d-flex align-items-end flex-column">
                                    <Input
                                      type="switch"
                                      checked={isPerCookEnabled}
                                      onClick={() => {
                                        setisPerCookEnabled(!isPerCookEnabled);
                                      }}
                                    />
                                  </FormGroup>
                                </h5>
                              </CardHeader>
                              <Collapse
                                isOpen={isPersonalization}
                                id="collapseThree"
                                className="collapse"
                                aria-labelledby="headingFour"
                                data-parent="#accordionExample"
                              >
                                <CardBody className="card-body">
                                  <p>These cookies help us personalize your experience on our site with features like relevant content (e.g. videos) or products you could be interested (e.g. based on what you previously viewed). These cookies will be set by us or by third party providers who add services/features to our sites (e.g. videos).</p>
                                </CardBody>
                              </Collapse>
                            </Card>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </Form>
                </div>
              </div>
            </Col>
          </Row>
        </ModalBody>
      </div>
    </Modal>
  );
};

export default CustomModal;