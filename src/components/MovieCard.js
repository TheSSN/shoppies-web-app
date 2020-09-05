import React from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function MovieCard(props) {
  return (
    <Col sm={12} md={6} lg={4}>
      <Card>
        <Card.Img variant="top" src={props.poster} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Subtitle className="text-muted">{props.year}</Card.Subtitle>
        </Card.Body>
        <Button variant="primary" className="align-self-center mb-3" style={{width: 100}}>Nominate</Button>
      </Card>
    </Col>
  );
}

export default MovieCard;