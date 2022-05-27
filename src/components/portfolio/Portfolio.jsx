import React from "react";
import DataPortfolio from "./dataPortfolio";
import "./portfolio.css";

function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container porfolio_container">
        <DataPortfolio/>
      </div>
    </section>
  );
}

export default Portfolio;
