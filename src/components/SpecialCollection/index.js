import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const SpecialCollection = ({ title, inner, line, hrClass }) => {
    return (
        <>
            <div className={title}>
                <h4>News</h4>
                <h2 className={inner}>A Purpose-Driven History</h2>
                {
                    line ?
                        <div className="line"></div> :
                        hrClass ?
                            <hr role="tournament6"></hr>
                            : ''
                }
            </div>
            <Container>
                <Row>
                    <Col lg="6" className="m-auto">
                        <div className="product-para">
                            <p className="text-center">
                                The Coca‑Cola Company’s purpose is to refresh the world and make a difference and we have remained true to that purpose for 137 years.
                                Our strategy is centered around people—our consumers and employees—and driving sustainable solutions that build resilience into our business to respond to current and future challenges, while creating positive change for the planet.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default SpecialCollection;