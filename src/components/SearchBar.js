import React from "react";
import Form from "react-bootstrap/Form"
import InputGroup from "react-bootstrap/InputGroup"
import Button from "react-bootstrap/Button"
import SearchIcon from "../assets/SearchIcon.png"

class SearchBar extends React.Component {
  constructor() {
    super();
    this.state = {
      searchTerm: ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const {name, value} = event.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.searchTerm.length > 0) {
      this.props.handleSearch(this.state.searchTerm);
    }
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit} className="mt-3 shadow-sm">
        <Form.Group>
          <InputGroup>
              <InputGroup.Prepend>
                  <InputGroup.Text>
                    <img alt="" src={SearchIcon} width="15" height="15" />
                  </InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control
                type="text"
                name="searchTerm"
                value={this.state.searchTerm}
                placeholder="Search for a movie..."
                onChange={this.handleChange}
              />
              <InputGroup.Append>
                <Button variant="primary" type="submit">Search</Button>
              </InputGroup.Append>
          </InputGroup>
        </Form.Group>
      </Form>
    );
  }
};

export default SearchBar;