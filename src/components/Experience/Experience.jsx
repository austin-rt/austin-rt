import "./Experience.css";
import { useContext } from "react";
import { RefContext } from "../../context/RefContext";
import { skillGroups } from "../../data/skills";
import { stackIcons } from "../../data/stackIcons";

const Experience = () => {
  const { experience } = useContext(RefContext);
  return (
    <section id="experience" ref={experience}>
      <h5>Skills</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        {skillGroups.map((group) => (
          <div className="experience__group" key={group.title}>
            <h3>{group.title}</h3>
            <ul className="experience__list">
              {group.items.map((slug) => {
                const { Icon, label } = stackIcons[slug];
                return (
                  <li className="experience__skill" key={slug}>
                    <Icon
                      className="experience__skill-icon"
                      aria-hidden="true"
                      focusable="false"
                    />
                    <span>{label}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
