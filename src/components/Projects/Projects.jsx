import "./Projects.css";
import { useContext, useEffect, useRef, useState } from "react";
import { RefContext } from "../../context/RefContext";
import { projects } from "../../data/projects";
import { stackIcons } from "../../data/stackIcons";
import { linkTypes } from "../../data/linkTypes";

const Projects = () => {
  const { projects: sectionRef } = useContext(RefContext);

  // Hover shows a tech's name through CSS. Touch has no hover, so a tap opens
  // the same tooltip for a moment.
  const [openTip, setOpenTip] = useState(null);
  const tipTimer = useRef(null);
  useEffect(() => () => clearTimeout(tipTimer.current), []);
  const showTip = (key) => {
    setOpenTip(key);
    clearTimeout(tipTimer.current);
    tipTimer.current = setTimeout(() => setOpenTip(null), 1800);
  };

  return (
    <section id="projects" ref={sectionRef}>
      <h5>Things I've Shipped</h5>
      <h2>Projects</h2>

      <div className="container projects__container">
        {projects.map((project) => {
          const primary = project.links[0];
          const primaryType = linkTypes[primary.type];
          const itemClass = project.featured
            ? "projects__item projects__item--featured"
            : "projects__item";

          return (
            <article className={itemClass} key={project.slug}>
              <a
                className="projects__image"
                href={primary.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.name}: ${primaryType.label}`}
              >
                {project.image ? (
                  <img
                    src={project.image}
                    alt={`${project.name} screenshot`}
                    loading={project.featured ? "eager" : "lazy"}
                  />
                ) : (
                  <div className="projects__image-fallback" aria-hidden="true">
                    {project.stack.slice(0, 3).map((slug) => {
                      const { Icon } = stackIcons[slug];
                      return <Icon key={slug} />;
                    })}
                  </div>
                )}
              </a>

              <div className="projects__body">
                <h3 className="projects__name">{project.name}</h3>
                <p className="projects__tagline">{project.tagline}</p>
                <p className="projects__description">{project.description}</p>

                <ul className="projects__stack" aria-label="Built with">
                  {project.stack.map((slug) => {
                    const { Icon, label } = stackIcons[slug];
                    const tipKey = `${project.slug}:${slug}`;
                    return (
                      <li
                        key={slug}
                        className={
                          openTip === tipKey
                            ? "projects__stack-icon is-open"
                            : "projects__stack-icon"
                        }
                        onTouchStart={() => showTip(tipKey)}
                      >
                        <Icon aria-hidden="true" focusable="false" />
                        <span className="projects__stack-tip">{label}</span>
                      </li>
                    );
                  })}
                </ul>

                <div className="projects__links">
                  {project.links.map(({ type, href }, index) => {
                    const { Icon, label } = linkTypes[type];
                    return (
                      <a
                        key={href}
                        href={href}
                        className={index === 0 ? "btn btn-primary" : "btn"}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Icon aria-hidden="true" focusable="false" />
                        {label}
                      </a>
                    );
                  })}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
