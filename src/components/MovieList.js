import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import MovieCard from "./MovieCard";

function MovieList(props) {
  const movieCards = props.entries.map(movie => {
    return <MovieCard key={movie.imdbID} title={movie.Title} year={movie.Year} poster={movie.Poster} />
  });

  return (
    <Container className="border shadow-sm pt-2 pb-3 bg-white">
      <h4 className="mb-3">Search results:</h4>
      <Row>
        {movieCards}
      </Row>
    </Container>
  );
}

export default MovieList;