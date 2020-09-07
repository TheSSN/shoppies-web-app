import React from "react";
import Alert from "react-bootstrap/Alert";

function NominationBanner(props) {
  return (
    <Alert variant="success" show={props.isFull} transition={false}>
      <Alert.Heading>Thank you for your nominations!</Alert.Heading>
      <p>
        You've reached the nomination limit. If you want to nominate another
        movie, remove one from your nominations list first.
      </p>
    </Alert>
  );
}

export default NominationBanner;