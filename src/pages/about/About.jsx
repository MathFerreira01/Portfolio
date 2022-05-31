import React from "react";
import "./about.css";
import ME from "../../assets/Hipster-Developer-Dice.jpg";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";

function About() {
  return (
    <section id="about">
      <h5>Conhecer</h5>
      <h2>sobre mim</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Experiência</h5>
              <small>1+ Desenvolvedor Frontend</small>
            </article>

            <article className="about_card">
              <VscFolderLibrary className="about_icon" />
              <h5>Projetos</h5>
              <small>26+ completos</small>
            </article>
          </div>
          <p>
            Procuro por oportunidades no mercado de trabalho para atuar no
            desenvolvimento Frontend com Javascript, ReactJs, Typescript e
            NextJs.
            <br />
            Estudo programação há 2 anos e continuo buscando aprimorar meus
            conhecimentos através de cursos online e realizando projetos para
            aperfeiçoar minhas habilidades como desenvolvedor, visando a área de
            desenvolvimento Frontend e Mobile.
          </p>

          <a href="#contact" className="btn btn-primary">
            Vamos conversar
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
