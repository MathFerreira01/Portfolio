import React from "react";
import Project from "../../assets/project1.jpg";
import Project2 from "../../assets/Project2.jpg";
import Project3 from "../../assets/project3.jpg";

const data = [
  {
    id: 1,
    image: Project,
    title: "Clone do Twitter",
    github: "https://github.com/MathFerreira01/Clone-Twitter",
    demo: "https://mathferreira01.github.io/Clone-Twitter/",
  },
  {
    id: 2,
    image: Project2,
    title: "Clone do Netflix",
    github: "https://github.com/MathFerreira01/clone_netflix",
    demo: "https://mathferreira01.github.io/clone_netflix/",
  },
  {
    id: 3,
    image: Project,
    title: "Clone do YouTube",
    github: "https://github.com/MathFerreira01/clone-youtube",
    demo: "https://mathferreira01.github.io/clone-youtube/",
  },
  {
    id: 4,
    image: Project3,
    title: "Clone do Whatsapp",
    github: "https://github.com/MathFerreira01/clone-youtube",
    demo: "https://mathferreira01.github.io/clone_whatsapp/",
  },
  {
    id: 5,
    image: Project,
    title: "Smart Bank",
    github: "https://github.com/MathFerreira01/clone_whatsapp",
    demo: "https://mathferreira01.github.io/Conta-bancaria/",
  },
];

function DataPortfolio() {
  return (
    <>
      {data.map(({ id, image, title, github, demo }) => {
        return (
          <article key={id} className="portfolio_item">
            <div className="portfolio_item-image">
              <img src={image} alt="" />
            </div>

            <h3>{title}</h3>
            <div className="portfolio_item-cta">
              <a href={github} className="btn">GitHub</a>
              <a href={demo} className="btn btb-primary" target="_blank">Live Demo</a>
            </div>
          </article>
        );
      })}
    </>
  );
}

export default DataPortfolio;
