import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";

function Home() {
    return (
      <Container>
        <Jumbotron className="mt-3">
          <h1>Welcome to <i>The Shoppies</i>!</h1>
          <p>
            Shopify's new annual movie awards are under way and we need <b>YOUR</b> help to choose the best
            movies of all time. Select 5 movies of your choice to nominate for the awards and show your support!
          </p>
          <p>
            <Button variant="primary" href="/nominations">My Nominations</Button>
          </p>
        </Jumbotron>
      </Container>
    );
}

export default Home;