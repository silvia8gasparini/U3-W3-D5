import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import NewReleases from "./NewReleases";
import ExploreSection from "./ExploreSection";
import FavoriteTracks from "./FavoriteTracks";

const MainSection = () => {
  return (
    <Container fluid className="bg-black overflow-auto text-white pt-4 pb-5">
      <h2 className="fw-bold fs-1 mb-4 text-start">Novità</h2>
      <Row className="mb-3 text-start">
        <Col xs={6} md={6}>
          <p className="text-uppercase text-secondary fw-bold small mb-1">
            Nuova stazione radio
          </p>
          <p className="fs-5">
            Rilassati, al resto pensiamo noi. Ascolta Apple Music Chill
          </p>
        </Col>
        <Col xs={6} md={6}>
          <p className="text-uppercase text-secondary fw-bold small mb-1">
            Nuova stazione radio
          </p>
          <p className="fs-5">Ecco la nuova casa della musica latina</p>
        </Col>
      </Row>

      <Row className="flex-nowrap overflow-auto mb-4 gap-3">
        <Col style={{ minWidth: "50%" }}>
          <Card className="bg-transparent border-0 shadow-none">
            <Card.Img
              src="/images/1a.png"
              alt="Chill Radio"
              className="rounded-3 w-100"
            />
          </Card>
        </Col>
        <Col style={{ minWidth: "50%" }}>
          <Card className="bg-transparent border-0 shadow-none">
            <Card.Img
              src="/images/1b.png"
              alt="Música Uno"
              className="rounded-3 w-100"
            />
          </Card>
        </Col>
        <Col style={{ minWidth: "50%" }}>
          <Card className="bg-transparent border-0 shadow-none">
            <Card.Img
              src="/images/1c.png"
              alt="Música Tre"
              className="rounded-3 w-100"
            />
          </Card>
        </Col>
      </Row>

      <h4 className="mb-3 text-start mb-4">Nuovi episodi radio</h4>
      <Row className="overflow-auto g-3">
        {[
          { img: "/images/2a.png", title: "Prólogo con Abuelo" },
          { img: "/images/2b.png", title: "The Wanderer" },
          { img: "/images/2c.png", title: "Michael Bublé & Carly Pearce" },
          {
            img: "/images/2d.png",
            title: "Stephan Moccio: The Zane Lowe Interview",
          },
          { img: "/images/2e.png", title: "Chart Spotlight: Julia Michaels" },
        ].map((card, i) => (
          <Col key={i} xs={6} sm={6} md={3} lg={2}>
            <Card className="bg-transparent border-0 text-white">
              <div className="mb-2">
                <Card.Img
                  src={card.img}
                  alt={card.title}
                  className="rounded"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <Card.Text className="text-start">{card.title}</Card.Text>
            </Card>
          </Col>
        ))}
      </Row>
      <NewReleases />
      <FavoriteTracks />
      <ExploreSection />
    </Container>
  );
};

export default MainSection;
