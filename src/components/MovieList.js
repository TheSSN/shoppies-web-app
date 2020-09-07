import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Spinner from "react-bootstrap/Spinner";
import MovieCard from "./MovieCard";

function MovieList(props) {
  const movieCards = props.entries.map(entry => {
    return (
      <MovieCard 
        key={entry.imdbID}
        title={entry.Title}
        year={entry.Year}
        imdbID={entry.imdbID}
        poster={entry.Poster}
        nominated={entry.nominated}
        isFull={props.isFull}
        handleNominate={props.handleNominate}
      />
    )
  });

  let content;

  if (!props.didSearch) {
    content = <p className="ml-3">Search for a movie!</p>
  } else if (props.isLoading) {
    content = <Spinner animation="border" className="mb-3" style={{texAlign: "center"}}/>
  } else if (movieCards.length === 0) {
    content = <p className="ml-3">No results</p>
  } else {
    content = movieCards;
  }

  return (
    <Container className="border shadow-sm pt-2 bg-white">
      <h4 className="mb-3">Search results:</h4>
      <Row className={props.isLoading ? "justify-content-md-center" : ""}>
        {content}
      </Row>
    </Container>
  );
}

export default MovieList;