import React from "react";
import Container from "react-bootstrap/Container";
import MovieMedia from "./MovieMedia";

function NominationList(props) {
  const movies = props.entries.map(entry => {
    return (
      <MovieMedia
        key={entry.imdbID}
        title={entry.Title}
        year={entry.Year}
        imdbID={entry.imdbID}
        poster={entry.Poster}
        handleRemove={props.handleRemove}
      />
    )
  });

  return (
    <Container as="ul" className="list-unstyled border shadow-sm pt-2 bg-white">
      <h4 className="mb-3">Nominations: ({movies.length}/5)</h4>
      {movies.length === 0 ? <p>Choose your nominations!</p> : movies}
    </Container>
  );
}

export default NominationList;