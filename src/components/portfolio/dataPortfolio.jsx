import React from "react";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Clone do Twitter",
    github: "https://github.com/MathFerreira01/Clone-Twitter",
    demo: "https://mathferreira01.github.io/Clone-Twitter/",
  },
  {
    id: 2,
    image: IMG2,
    title: "Clone do Netflix",
    github: "https://github.com/MathFerreira01/clone_netflix",
    demo: "https://mathferreira01.github.io/clone_netflix/",
  },
  {
    id: 3,
    image: IMG3,
    title: "Clone do YouTube",
    github: "https://github.com/MathFerreira01/clone-youtube",
    demo: "https://mathferreira01.github.io/clone-youtube/",
  },
  {
    id: 4,
    image: IMG4,
    title: "Clone do Whatsapp",
    github: "https://github.com/MathFerreira01/clone-youtube",
    demo: "https://mathferreira01.github.io/clone_whatsapp/",
  },
  {
    id: 5,
    image: IMG5,
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
