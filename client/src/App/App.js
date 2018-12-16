import React from "react";
import { Route, Switch } from "react-router-dom";
import Main from "../pages/Main/Main.js";
import Details from "../pages/Details/Details.js";
import "./App.css";
import { AppContext } from "../utils/AppContext";
import axios from 'axios';

class App extends React.Component {
  handleSelect = event => {
    this.setState({
      searchQuery: event.target.value
    });
    console.log(event.target.value);
  };

  handleDetails = event => {
    this.setState({ resultIndex: Number(event.target.dataset.index) });
  };

  selectQuery = () => {
    const params = { search: this.state.resultSearchQuery };

    switch (this.state.searchQuery) {
      case "people":
        return axios.get("https://swapi.co/api/people", {params})
      case "movies":
        return axios.get("https://swapi.co/api/films/?search=", {params});
      case "planets":
        return axios.get("https://swapi.co/api/planets/?search=", {params});
      case "species":
        return axios.get("https://swapi.co/api/species/?search=", {params});
      default:
        alert("Please select a search option!");
    }
  };

  handleInputChange = event => {
    this.setState({
      resultSearchQuery: event.target.value
    });
  };

  handleSubmit = async event => {
    event.preventDefault();
    this.setState(state => ({loading: true}));
    const response = await this.selectQuery();
    this.setState({searchResults: response.data.results, loading: false});
  };

  state = {
    loading: false,
    searchResults: [],
    resultSearchQuery: "",
    resultIndex: null,
    searchQuery: "people",
    handleSelect: this.handleSelect,
    selectQuery: this.selectQuery,
    handleInputChange: this.handleInputChange,
    handleSubmit: this.handleSubmit,
    handleDetails: this.handleDetails
  };

  render() {
    return (
      <div className="App">
        <header className="header">
          <h2>Star Wars Search</h2>
        </header>
        <div className="container">
          <AppContext.Provider value={this.state}>
            <Switch>
              <Route exact path="/" component={Main} />
              <Route path="/details" component={Details} />
            </Switch>
          </AppContext.Provider>
        </div>
      </div>
    );
  }
}

export default App;
