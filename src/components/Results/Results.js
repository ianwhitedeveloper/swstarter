import React from "react";
import "./Results.css";

export const Results = props => (
  <div className="results">
    <h2>Results</h2>
    <hr />
    <ul className="list-group">{props.children}</ul>
  </div>
);
