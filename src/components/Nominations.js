import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NominationBanner from "./NominationBanner";
import SearchBar from "./SearchBar";
import MovieList from "./MovieList";
import NominationList from "./NominationList";

class Nominations extends React.Component {
  constructor() {
    super();
    this.state = {
      searchEntries: [],
      nominationEntries: [],
      didSearch: false,
      isLoading: false,
      isFull: false
    }
    this.handleNominate = this.handleNominate.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleNominate(imdbID) {
    this.setState(
      prevState => {
        const updatedNominationEntries = prevState.nominationEntries.slice();
        const updatedSearchEntries = prevState.searchEntries.map(entry => {
          if (entry.imdbID === imdbID) {
            const newEntry = {
              ...entry,
              nominated: true
            }
            updatedNominationEntries.push(newEntry);
            return newEntry;
          }
          return entry;
        });

        const newIsFull = updatedNominationEntries.length === 5 ? true : false;

        return {
          searchEntries: updatedSearchEntries,
          nominationEntries: updatedNominationEntries,
          isFull: newIsFull
        }
      },
      () => {
        localStorage.setItem("nominationsList", JSON.stringify(this.state.nominationEntries));
      }
    );
  }

  handleRemove(imdbID) {
    this.setState(
      prevState => {
        const updatedNominationEntries = prevState.nominationEntries.filter(entry => entry.imdbID !== imdbID);
        const updatedSearchEntries = prevState.searchEntries.map(entry => {
          if (entry.imdbID === imdbID) {
            const newEntry = {
              ...entry,
              nominated: false
            }
            return newEntry;
          }
          return entry;
        });

        return {
          searchEntries: updatedSearchEntries,
          nominationEntries: updatedNominationEntries,
          isFull: false
        }
      },
      () => {
        localStorage.setItem("nominationsList", JSON.stringify(this.state.nominationEntries));
      }
    );
  }

  handleSearch(searchTerm) {
    this.setState({
      didSearch: true,
      isLoading: true
    });

    fetch("https://www.omdbapi.com/?apikey=d06df189&type=movie&s=" + encodeURIComponent(searchTerm))
      .then(response => response.json())
      .then(data => {
        if (data.Response === "True") {
          this.setState(prevState => {
            const newSearchEntries = data.Search.map(entry => {
              return {
                ...entry,
                nominated: prevState.nominationEntries.some(nominationEntry => nominationEntry.imdbID === entry.imdbID)
              }
            });

            return {
              searchEntries: newSearchEntries
            }
          });
        } else {
          this.setState({
            searchEntries: []
          });
        }

        this.setState({isLoading: false});
      });
  }

  componentDidMount() {
    const prevNominationEntries = JSON.parse(localStorage.getItem("nominationsList"));
    const prevIsFull = (prevNominationEntries !== null && prevNominationEntries.length === 5);

    this.setState({
      nominationEntries: prevNominationEntries === null ? [] : prevNominationEntries,
      isFull: prevIsFull
    });
  }

  render() {
    return (
      <Container>
        <NominationBanner isFull={this.state.isFull}/>
        <h2 className="mt-3">The Shoppies</h2>
        <SearchBar handleSearch={this.handleSearch} />
        <Row>
          <Col md={6}>
            <MovieList
              entries={this.state.searchEntries}
              didSearch={this.state.didSearch}
              isLoading={this.state.isLoading}
              isFull={this.state.isFull}
              handleNominate={this.handleNominate}
            />
          </Col>
          <Col md={6}>
            <NominationList entries={this.state.nominationEntries} handleRemove={this.handleRemove} />
          </Col>
        </Row>
      </Container>
    );
  }
};

export default Nominations;