import React from "react";
import { Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const FooterComponent = () => {
  return (
    <>
      <div className="Footer">
        <Row>
          <Col sm={4}>
            <img
              className="d-block w-100"
              src={process.env.PUBLIC_URL + `/images/download1.jpeg`}
              alt="First slide"
            />
          </Col>
          <Col sm={8}>hello</Col>
        </Row>
      </div>
    </>
  );
};

export default FooterComponent;
