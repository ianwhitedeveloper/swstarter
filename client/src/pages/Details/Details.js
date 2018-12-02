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
          <h3 id="title">{result.name}</h3>
          <div className="info">
            <div className="details">
              <h4>Details</h4>
              <hr />
              <ul>
                <li>Birth Year: {result.birth_year}</li>
                <li>Gender: {result.gender}</li>
                <li>Eye Color: {result.eye_color}</li>
                <li>Hair Color:{result.hair_color}</li>
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
    } else {
      return (
        <div className="movie-info">
          <h3 id="title">{result.title}</h3>
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
