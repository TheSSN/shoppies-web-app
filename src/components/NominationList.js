import React from "react";
import Container from "react-bootstrap/Container";
import MovieMedia from "./MovieMedia";

function NominationList(props) {
  const movies = props.entries.map(movie => {
    return <MovieMedia key={movie.imdbID} title={movie.Title} year={movie.Year} poster={movie.Poster} />
  });

  return (
    <Container as="ul" className="list-unstyled border shadow-sm pt-2 pb-3 bg-white">
      <h4 className="mb-3">Nominations:</h4>
      {movies}
    </Container>
  );
}

export default NominationList;