import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import MovieCard from "./MovieCard";

import data from "./TempDB";

function MovieList(props) {
  const movies = data.Search.map(movie => {
    return <MovieCard key={movie.imdbID} title={movie.Title} year={movie.Year} poster={movie.Poster} />
  });

  return (
    <Container>
      <Row>
        {movies}
      </Row>
    </Container>
  );
}

export default MovieList;