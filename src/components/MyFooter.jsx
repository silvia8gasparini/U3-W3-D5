import { Container, Row, Col } from "react-bootstrap";

const MyFooter = () => (
  <footer className=" bg-black text-secondary text-center pb-4 small">
    <Container>
      <Row>
        <Col>
          <div className="mb-2">Italia | English (UK)</div>
          <div className="mb-2">
            &copy; {new Date().getFullYear()} <strong>Apple Inc.</strong> Tutti
            i diritti riservati.
          </div>
          <div className="d-flex flex-wrap justify-content-center gap-3">
            <span>Condizioni dei servizi internet</span>
            <span>Apple Music e privacy</span>
            <span>Avviso sui cookie</span>
            <span>Supporto</span>
            <span>Feedback</span>
          </div>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default MyFooter;
