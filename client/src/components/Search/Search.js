import React from "react";
import "./Search.css";
import { AppContext } from "../../utils/AppContext";

// Search form
class Search extends React.Component {
  static contextType = AppContext;

  render() {
    const context = this.context;
    return (
      <div className="search-form">
        <h2>What are you searching for?</h2>
        <form onSubmit={context.handleSubmit}>
          <ul className="flex">
            <div className="radio-btns">
              <li>
                <input
                  type="radio"
                  id="people"
                  name="searchQuery"
                  value="people"
                  onChange={context.handleSelect}
                />
                <label htmlFor="people">People</label>
              </li>
              <li>
                <input
                  type="radio"
                  id="movies"
                  name="searchQuery"
                  value="movies"
                  onChange={context.handleSelect}
                />
                <label htmlFor="movies">Movies</label>
              </li>
              <li>
                <input
                  type="radio"
                  id="planets"
                  name="searchQuery"
                  value="planets"
                  onChange={context.handleSelect}
                />
                <label htmlFor="planets">Planets</label>
              </li>
            </div>

            <li>
              <input
                type="text"
                name="input"
                id="input"
                value={context.resultSearch}
                onChange={context.handleInputChange}
                placeholder="e.g. Chewbacca, Yoda, Boba Fett"
              />
            </li>
            <li>
              <input
                type="button"
                name="search"
                id="search"
                value="Search"
                onClick={context.handleSubmit}
              />
            </li>
          </ul>
        </form>
      </div>
    );
  }
}

export default Search;
