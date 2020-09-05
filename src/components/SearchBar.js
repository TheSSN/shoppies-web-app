import React from "react";
import Form from "react-bootstrap/Form"
import InputGroup from "react-bootstrap/InputGroup"
import Button from "react-bootstrap/Button"

function SearchBar() {
  const handleSubmit = (event) => {
    event.preventDefault();
  }

  return (
    <Form onSubmit={handleSubmit} className="mt-3 shadow-sm">
      <Form.Group>
        <InputGroup>
            <InputGroup.Prepend>
                <InputGroup.Text>
                  <img alt="" src="https://www.freeiconspng.com/uploads/search-icon-png-21.png" width="15" height="15" />
                </InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control type="text" placeholder="Search for a movie..." />
            <InputGroup.Append>
              <Button variant="primary" type="submit">Search</Button>
            </InputGroup.Append>
        </InputGroup>
      </Form.Group>
    </Form>
  );
}

export default SearchBar;