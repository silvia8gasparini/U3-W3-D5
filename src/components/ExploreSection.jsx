import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const ExploreSection = () => {
  const links = [
    "Esplora per genere",
    "Decenni",
    "Attività e stati d’animo",
    "Worldwide",
    "Classifiche",
    "Audio spaziale",
    "Video musicali",
    "Nuovi artisti",
    "Hit del passato",
  ];

  return (
    <Container
      fluid
      className="bg-black text-white mt-5 pt-4 border-top border-secondary"
    >
      <h4 className="mb-4 text-start">Altro da esplorare</h4>
      <Row className="row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
        {links.map((text, index) => (
          <Col key={index}>
            <Button
              variant="dark"
              className="text-danger w-100 text-start fw-semibold border border-secondary"
            >
              {text}
            </Button>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ExploreSection;
