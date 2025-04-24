import "./Portfolio.css";
import { useContext } from "react";
import { RefContext } from "../../context/RefContext";
import { portfolioItems } from "./portfolioItems";

const Portfolio = () => {
  const context = useContext(RefContext);
  if (!context) return null;
  const { portfolio } = context;
  return (
    <section id="portfolio" ref={portfolio}>
      <h5>Recent Projects</h5>
      <h2>My Portoflio</h2>
      <div className="portfolio__container container">
        {portfolioItems.map(({ image, title, github, demo, stack }) => (
          <article className="portfolio__item" key={title}>
            <div className="portfolio__item-image">
              <a href={demo} target="_blank" rel="noopener noreferrer">
                <img src={image} alt={title} />
              </a>
            </div>
            <div className="portfolio__item-title">
              <a href={demo} target="_blank" rel="noopener noreferrer">
                <h3>{title}</h3>
              </a>
            </div>
            <div className="portfolio__item__stack-icon__container">
              {stack.map((icon, index) => (
                <h5 key={index} className="icon stack-icon">
                  {icon}
                </h5>
              ))}
            </div>
            <div className="portfolio__item-call-to-action">
              <a
                href={github}
                className="btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                Repo
              </a>
              <a
                href={demo}
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
