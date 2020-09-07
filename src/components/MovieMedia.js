import React from "react";
import Media from "react-bootstrap/Media";
import Button from "react-bootstrap/Button"

function MovieMedia(props) {
  return (
    <React.Fragment>
      <Media as="li">
        <img width={64} height={100} className="align-self-center mr-3" src={props.poster} alt="" />
        <Media.Body className="mr-2">
          <h5>{props.title}</h5>
          <p>{props.year}</p>
        </Media.Body>
        <Button variant="danger"
          onClick={() => props.handleRemove(props.imdbID)}
          size="sm"
          className="align-self-center"
        >
          Remove
        </Button>
      </Media>
      <hr />
    </React.Fragment>
  );
}

export default MovieMedia;