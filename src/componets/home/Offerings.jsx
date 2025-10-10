import React from "react";
import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const Offerings = () => {
  return (
    <>
      <Container style={{ marginTop: "20px" }}>
        <div className="Title text-center ">WE OFFER</div>
        <Row className="g-4">
          {[
            "Primary",
            "Secondary",
            "Success",
            "Danger",
            "Warning",
            "Info",
            "Light",
            "Dark",
            "Primary",
          ].map((variant) => (
            <Col lg={4} md={6} xs={12}>
              <Card
                bg={variant.toLowerCase()}
                key={variant}
                text={variant.toLowerCase() === "light" ? "dark" : "white"}
                style={{ width: "18rem", justifyContent: "around" }}
                className="mb-2 "
              >
                <Card.Header>Header</Card.Header>
                <Card.Body>
                  <Card.Title>{variant} Card Title </Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Offerings;
