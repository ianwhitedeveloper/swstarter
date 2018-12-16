import React from "react";
import { Link } from "react-router-dom";
import "./Details.css";
import { AppContext } from "../../utils/AppContext";
// import API from "../../utils/API";
import axios from 'axios'

class Details extends React.Component {
  static contextType = AppContext;

  state = {
    additionalInfo: [],
    loading: false
  }

  componentDidMount() {
    this.getName();
  }

  getName = query => {
    this.setState(state => ({loading: true}));
    const resultIndex = this.context.resultIndex;
    switch (this.context.searchQuery) {
      // case "people":
      //   return API.getPeople(this.state.resultSearchQuery)
      //   .then(response => this.setState({additionalInfo: response.data}));
      case "people":
        return axios.all(
          this.context.searchResults[resultIndex].films.map(film => axios.get(film))
        )
        .then(responses => {
          const movieTitles = responses.map(movie => movie.data.title);
          this.setState({ additionalInfo: movieTitles, loading: false })
        });
      // case "planets":
      //   return API.getPlanets(this.state.resultSearchQuery)
      //   .then(response => this.setState({additionalInfo: response.data}));
      // case "species":
      //   return API.getSpecies(this.state.resultSearchQuery)
      //   .then(response => this.setState({additionalInfo: response.data}));
      default:
        return true;
    }
    // if (query.includes("people")) {
    //   API.getPerson(query).then(res => console.log(res));
    //   // return query;
    // }
    // if (query.includes("films")) {
    //   API.getMovie(query).then(res => console.log(res));
    // return query;
    //}
    // API.getMovie(query).then(res => console.log(res));
  };

  createListEl = item => {
    return (
      <li key={item}>
        {item}
      </li>
    );
  };

  // render correct details for people, movies, planets, species
  renderInfo = () => {
    const context = this.context;
    const result = context.searchResults[context.resultIndex];

    if (context.searchQuery === "people") {
      return (
        <div className="people-info">
          <h2 id="title">{result.name}</h2>
          <div className="info">
            <div className="column-1">
              <h4>Details</h4>
              <hr />
              <ul>
                <li>Birth Year: {result.birth_year}</li>
                <li>Gender: {result.gender}</li>
                <li>Eye Color: {result.eye_color}</li>
                <li>Hair Color: {result.hair_color}</li>
                <li>Height: {result.height}</li>
                <li>Mass: {result.mass}</li>
              </ul>
            </div>

            {/* make this its own component so it can be shared to reduce duplication */}
            <div className="column-2">
              <h4>Movies</h4>
              <hr />
              {this.state.loading && 
                <div>{'...loading'}</div>
              }
              {!this.state.loading &&
                <ul>{this.state.additionalInfo.map(this.createListEl)}</ul>
              }
            </div>
          </div>
        </div>
      );
    } else if (context.searchQuery === "movies") {
      return (
        <div className="movie-info">
          <h2 id="title">{result.title}</h2>
          <div className="info">
            <div className="column-1">
              <h4>Opening Crawl</h4>
              <hr />
              <p>{result.opening_crawl}</p>
            </div>

            <div className="column-2">
              <h4>Characters</h4>
              <hr />
              <ul>{result.characters.map(this.createListEl)}</ul>
            </div>
          </div>
        </div>
      );
    } else if (context.searchQuery === "planets") {
      return (
        <div className="planet-info">
          <h2 id="title">{result.name}</h2>
          <div className="info">
            <div className="column-1">
              <h4>Details</h4>
              <hr />
              <ul>
                <li>Climate: {result.climate}</li>
                <li>Terrain: {result.terrain}</li>
                <li>Diameter: {result.diameter} km</li>
                <li>Orbital Period: {result.orbital_period} days</li>
                <li>Rotation Period: {result.rotation_period} hours</li>
                <li>Surface Water: {result.surface_water} %</li>
              </ul>
            </div>

            <div className="column-2">
              <h4>Population</h4>
              <hr />
              <ul>
                <li>Population:{result.population}</li>
                <li>Residents: </li>
                <ul>{result.residents.map(this.createListEl)}</ul>
              </ul>
            </div>
          </div>
        </div>
      );
    } else if (context.searchQuery === "species") {
      return (
        <div className="species-info">
          <h2 id="title">{result.name}</h2>
          <div className="info">
            <div className="column-1">
              <h4>Details</h4>
              <hr />
              <ul>
                <li>Classification: {result.classification}</li>
                <li>Designation: {result.designation}</li>
                <li>Average Lifespan: {result.average_lifespan} yrs</li>
                <li>Language: {result.language}</li>
                <li>Homeworld: {result.homeworld}</li>
              </ul>
            </div>

            <div className="column-2">
              <h4>Other Deets</h4>
              <hr />
              <ul>
                <li>People: </li>
                <ul>{result.people.map(this.createListEl)}</ul>
                <li>Films: </li>
                <ul>{result.films.map(this.createListEl)}</ul>
              </ul>
            </div>
          </div>
        </div>
      );
    }
  };

  render() {
    return (
      <div className="details-wrapper">
        {this.renderInfo()}
        <Link to={"./"}>
          <button id="back-btn" variant="raised">
            Back to Search
          </button>
        </Link>
      </div>
    );
  }
}

export default Details;
