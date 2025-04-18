import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Player = () => {
  return (
    <div className="bg-dark text-white p-3 fixed-bottom d-lg-none border-top border-secondary">
      <Container fluid>
        <Row className="align-items-center justify-content-between">
          <Col xs="auto" className="d-flex gap-3 align-items-center">
            <i className="bi bi-shuffle text-secondary fs-5"></i>
            <i className="bi bi-skip-start-fill text-white fs-4"></i>
            <i className="bi bi-play-fill text-white fs-2"></i>
            <i className="bi bi-skip-end-fill text-white fs-4"></i>
            <i className="bi bi-repeat text-secondary fs-5"></i>
          </Col>
          <Col className="text-end text-truncate">
            <small className="text-white-50"></small>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Player;
