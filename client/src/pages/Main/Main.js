import React from "react";
import "./Main.css";
import Search from "../../components/Search/Search.js";
import { Results, ListItem } from "../../components/Results";
import { AppContext } from "../../utils/AppContext";

class Main extends React.Component {
  static contextType = AppContext;

  render() {
    const context = this.context;
    return (
      <div className="main-page">
        <Search
          handleSubmit={context.handleSubmit}
          handleChange={context.handleInputChange}
          handleSelect={context.handleSelect}
        />
        <Results>
          {context.results.map((result, index) => {
            const name = result.name || result.title;
            return <ListItem key={name} resultIndex={index} name={name} />;
          })}
        </Results>
      </div>
    );
  }
}

export default Main;
