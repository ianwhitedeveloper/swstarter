import React from "react";
import { Link } from "react-router-dom";
import "./Details.css";
import { AppContext } from "../../utils/AppContext";

class Details extends React.Component {
  static contextType = AppContext;

  // render correct details for either people or movies
  renderInfo = () => {
    const context = this.context;
    const result = context.results[context.resultIndex];
    if (context.searchQuery === "people") {
      return (
        <div className="people-info">
          <h2 id="title">{result.name}</h2>
          <div className="info">
            <div className="details">
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

            <div className="movies">
              <h4>Movies</h4>
              <hr />
              <ul>
                {result.films.map(film => {
                  return (
                    <li key={film}>
                      <a href={film} target="_blank">
                        {film}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      );
    } else if (context.searchQuery === "movies") {
      return (
        <div className="movie-info">
          <h2 id="title">{result.title}</h2>
          <div className="info">
            <div className="opening-crawl">
              <h4>Opening Crawl</h4>
              <hr />
              <p>{result.opening_crawl}</p>
            </div>

            <div className="characters">
              <h4>Characters</h4>
              <hr />
              <ul>
                {result.characters.map(char => {
                  return (
                    <li key={char}>
                      <a href={char} target="_blank">
                        {char}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      );
    } else if (context.searchQuery === "planets") {
      return (
        <div className="planet-info">
          <h2 id="title">{result.name}</h2>
          <div className="info">
            <div className="details">
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

            <div className="population">
              <h4>Population</h4>
              <hr />
              <ul>
                <li>Population:{result.population}</li>
                <li>Residents: </li>
                <ul>
                  {result.residents.map(resident => {
                    return (
                      <li key={resident}>
                        <a href={resident} target="_blank">
                          {resident}
                        </a>
                      </li>
                    );
                  })}
                </ul>
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
