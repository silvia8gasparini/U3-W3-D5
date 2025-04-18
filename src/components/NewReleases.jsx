import React, { useEffect, useState } from "react";
import { Row, Col, Card, Spinner, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../redux/FavoritesSlice";

const NewReleases = () => {
  const [tracks, setTracks] = useState([]);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);

  const isFavorite = (track) => favorites.some((fav) => fav.id === track.id);

  const toggleFavorite = (track) => {
    isFavorite(track)
      ? dispatch(removeFavorite(track))
      : dispatch(addFavorite(track));
  };

  useEffect(() => {
    fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=ramones")
      .then((res) => {
        if (!res.ok) throw new Error("Errore nel caricamento dei dati");
        return res.json();
      })
      .then((data) => {
        setTracks(data.data.slice(0, 12));
        setLoading(false);
      })
      .catch((error) => {
        console.error("Errore:", error);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <h4 className="my-4 text-start">Nuove uscite</h4>
      {loading ? (
        <div className="text-center my-4">
          <Spinner animation="border" variant="light" />
        </div>
      ) : (
        <Row className="overflow-auto g-3">
          {tracks.map((track) => (
            <Col key={track.id} xs={6} sm={4} md={3} lg={2}>
              <Card className="bg-transparent border-0 text-white">
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
                    variant={isFavorite(track) ? "danger" : "outline-light"}
                    size="sm"
                    className="mt-2 d-flex align-items-center gap-2"
                    onClick={() => toggleFavorite(track)}
                  >
                    <i
                      className={`bi ${
                        isFavorite(track) ? "bi-heart-fill" : "bi-heart"
                      }`}
                    ></i>
                    Preferiti
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default NewReleases;
