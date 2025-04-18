import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import Button from "react-bootstrap/Button";

function MyNavbar() {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => setShowSidebar(!showSidebar);

  return (
    <>
      <Navbar expand="lg" className="bg-dark" variant="dark">
        <Container
          fluid
          className="d-flex justify-content-between align-items-center"
        >
          <Navbar.Toggle
            aria-controls="offcanvasNavbar"
            className="border-0 d-lg-none order-1"
            onClick={toggleSidebar}
          />

          <Navbar.Brand
            className="mx-auto d-lg-none order-2"
            onClick={toggleSidebar}
            role="button"
          >
            <img
              src="/logos/music.svg"
              alt="logo"
              width="100"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>

          <div className="ms-auto d-lg-none order-3">
            <Button
              variant="danger"
              className="d-flex align-items-center gap-2"
            >
              <i className="bi bi-person-fill"></i> Accedi
              {/* Ho avuto problemi con l'import delle icone di bootstrap. Non sono riuscita a capire il motivo, quindi le ho inserite così. I'm so sorry :( */}
            </Button>
          </div>

          <div className="d-none d-lg-flex align-items-center w-100 justify-content-between">
            <Navbar.Brand onClick={toggleSidebar} role="button">
              <img
                src="/logos/music.svg"
                alt="logo"
                width="100"
                className="d-inline-block align-top"
              />
            </Navbar.Brand>

            <div className="d-flex gap-3 align-items-center">
              <i className="bi bi-shuffle text-secondary fs-5"></i>
              <i className="bi bi-skip-start-fill text-secondary fs-4"></i>
              <i className="bi bi-play-fill text-secondary fs-3"></i>
              <i className="bi bi-skip-end-fill text-secondary fs-4"></i>
              <i className="bi bi-arrow-repeat text-secondary fs-5"></i>

              <div
                className="bg-secondary d-flex justify-content-center align-items-center rounded mx-5"
                style={{ width: "400px", height: "50px" }}
              >
                <img src="/public/logos/apple.svg" alt="apple" width="24" />
              </div>

              <i className="bi bi-volume-down text-secondary"></i>
              <input
                type="range"
                className="form-range w-25"
                min="0"
                max="100"
                defaultValue="50"
              />
            </div>

            <Button
              variant="danger"
              className="d-flex align-items-center gap-2"
            >
              <i className="bi bi-person-fill"></i> Accedi
            </Button>
          </div>
        </Container>
      </Navbar>

      <Offcanvas
        show={showSidebar}
        onHide={toggleSidebar}
        placement="start"
        className="bg-black text-white"
      >
        <Offcanvas.Header closeButton closeVariant="white">
          <Offcanvas.Title>
            <img
              src="/logos/music.svg"
              alt="logo"
              width="100"
              className="d-inline-block align-top"
            />
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="input-group mb-4">
            <span className="input-group-text bg-dark border-secondary text-danger">
              <i className="bi bi-search"></i>
            </span>
            <input
              type="text"
              className="form-control bg-dark border-secondary text-white"
              placeholder="Cerca"
            />
          </div>
          <Nav className="flex-column gap-3">
            <Nav.Link className="text-danger" href="#home">
              <i className="bi bi-house-door me-2"></i> Home
            </Nav.Link>
            <Nav.Link className="text-danger" href="#novita">
              <i className="bi bi-grid me-2"></i> Novità
            </Nav.Link>
            <Nav.Link className="text-danger" href="#radio">
              <i className="bi bi-broadcast me-2"></i> Radio
            </Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default MyNavbar;
