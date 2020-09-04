import React from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function MovieCard(props) {
  return (
    <Col md={3}>
      <Card>
        <Card.Img variant="top" src={props.poster} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{props.year}</Card.Subtitle>
          <Button variant="primary">Nominate</Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default MovieCard;