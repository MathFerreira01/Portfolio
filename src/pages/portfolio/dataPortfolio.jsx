import React from "react";
import Twitter from "../../assets/Twitter.jpeg";
import Netflix from "../../assets/netflix.jpeg";
import YouTube from "../../assets/Youtube.jpeg";
import WhatsApp from "../../assets/whatsapp.jpeg"; 
import SmartBank from "../../assets/SmartBank.jpeg"; 
import Discord from "../../assets/Discord.jpeg"; 

const data = [
  {
    id: 1,
    image: Twitter,
    title: "Clone do Twitter",
    github: "https://github.com/MathFerreira01/Clone-Twitter",
    demo: "https://mathferreira01.github.io/Clone-Twitter/",
  },
  {
    id: 2,
    image: Netflix,
    title: "Clone do Netflix",
    github: "https://github.com/MathFerreira01/clone_netflix",
    demo: "https://mathferreira01.github.io/clone_netflix/",
  },
  {
    id: 3,
    image: YouTube,
    title: "Clone do YouTube",
    github: "https://github.com/MathFerreira01/clone-youtube",
    demo: "https://mathferreira01.github.io/clone-youtube/",
  },
  {
    id: 4,
    image: WhatsApp,
    title: "Clone do Whatsapp",
    github: "https://github.com/MathFerreira01/clone-youtube",
    demo: "https://mathferreira01.github.io/clone_whatsapp/",
  },
  {
    id: 5,
    image: SmartBank,
    title: "Smart Bank",
    github: "https://github.com/MathFerreira01/clone_whatsapp",
    demo: "https://mathferreira01.github.io/Conta-bancaria/",
  },
  {
    id: 6,
    image: Discord,
    title: "Interface do Discord",
    github: "https://github.com/MathFerreira01/Interface-do-Discord",
    demo: "https://mathferreira01.github.io/Interface-do-Discord/",
  }
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
