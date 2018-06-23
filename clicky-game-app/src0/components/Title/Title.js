import React from "react";
import "./Title.css";

const Title = props => (
  <header>
    <h1 className="title">{props.children}</h1>
    <div className="score-container">
      <button type="button" className="btn btn-success" disabled>Top Score:
        <span className="badge badge-light" id="top-score">5</span>
      </button>
      <button type="button" className="btn btn-primary" disabled>Game Score:
        <span className="badge badge-light" id="current-score">5</span>
      </button>
    </div>
  </header>
);

export default Title;
