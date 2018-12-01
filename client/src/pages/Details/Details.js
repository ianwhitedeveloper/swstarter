import React from "react";
import { Link } from "react-router-dom";
import "./Details.css";
import { AppContext } from "../../utils/AppContext";

class Details extends React.Component {
  static contextType = AppContext;
  renderInfo = () => {
    const context = this.context;
    // const result = context.results[context.resultIndex];
    if (context.searchQuery === "people") {
      return (
        <div className="people-info">
          <h3 id="title">Boba Fett</h3>
          <div className="info">
            <div className="details">
              <h4>Details</h4>
              <hr />
              <ul>
                <li>birthday</li>
                <li>gender</li>
                <li>eye</li>
                <li>hair</li>
                <li>heigh</li>
                <li>mass</li>
              </ul>
            </div>

            <div className="movies">
              <h4>Movies</h4>
              <hr />
              <ul>
                <li>
                  <a href="#">Return of the Jedi</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="movie-info">
          <h3 id="title">A New Hope</h3>
          <div className="info">
            <div className="details">
              <h4>Opening Crawl</h4>
              <hr />
              <p>A long time ago in a galaxy far away...</p>
            </div>

            <div className="movies">
              <h4>Characters</h4>
              <hr />
              <ul>
                <li>
                  <a href="#">Luke Skywalker</a>
                </li>
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
