import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Row, Col, Card, Button } from "react-bootstrap";
import { removeFavorite } from "../redux/FavoritesSlice";

const FavoriteTracks = () => {
  const favorites = useSelector((state) => state.favorites);
  const dispatch = useDispatch();

  if (favorites.length === 0) {
    return (
      <div className="text-center text-secondary mt-5">
        <h5>Nessun brano aggiunto ai preferiti</h5>
      </div>
    );
  }

  return (
    <>
      <h4 className="my-4 text-start">Brani preferiti</h4>
      <Row className="overflow-auto g-3">
        {favorites.map((track) => (
          <Col key={track.id} xs={6} sm={4} md={3} lg={2}>
            <Card className="bg-transparent border-0 text-white position-relative">
              <div className="ratio ratio-1x1 mb-2">
                <Card.Img
                  src={track.album.cover_medium}
                  alt={track.title}
                  className="rounded"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <Card.Body className="p-0">
                <Card.Title className="fs-6 text-start mb-1">
                  {track.title}
                </Card.Title>
                <Card.Text className="text-muted text-start small">
                  {track.artist.name}
                </Card.Text>
                <Button
                  variant="danger"
                  size="sm"
                  className="mt-2"
                  onClick={() => dispatch(removeFavorite(track))}
                >
                  Rimuovi
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default FavoriteTracks;
