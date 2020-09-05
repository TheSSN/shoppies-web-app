import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SearchBar from "./SearchBar";
import MovieList from "./MovieList";
import NominationList from "./NominationList";

import data from "./TempDB";

function Home() {
  const searchEntries = data.Search;
  const nominationEntries = data.Search;

  return (
    <Container>
      <h2 className="mt-3">The Shoppies</h2>
      <SearchBar />
      <Row>
        <Col md={6}>
          <MovieList entries={searchEntries} />
        </Col>
        <Col md={6}>
          <NominationList entries={nominationEntries}/>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;