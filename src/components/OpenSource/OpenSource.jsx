import "./OpenSource.css";
import { useContext } from "react";
import { FiExternalLink } from "react-icons/fi";
import { RefContext } from "../../context/RefContext";
import { contributions } from "../../data/openSource";
import Pill from "../shared/Pill";

const STATE = {
  merged: { label: "Merged", tone: "primary" },
  open: { label: "Open PR", tone: "light" },
  fork: { label: "Fork", tone: "alt" },
};

const MONTHS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

const formatDate = (yyyyMm) => {
  const [year, month] = yyyyMm.split("-");
  return `${MONTHS[Number(month) - 1]} ${year}`;
};

const OpenSource = () => {
  const { openSource: sectionRef } = useContext(RefContext);

  return (
    <section id="open-source" ref={sectionRef}>
      <h5>Giving Back</h5>
      <h2>Open Source</h2>

      <ul className="container open-source__list">
        {contributions.map((item) => {
          const state = STATE[item.state];
          return (
            <li className="open-source__item" key={item.href}>
              <a
                className="open-source__link"
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="open-source__project">
                  <span className="open-source__org">{item.org}/</span>
                  <span className="open-source__name">{item.project}</span>
                  <span className="open-source__language">{item.language}</span>
                </div>
                <p className="open-source__summary">{item.summary}</p>
                <div className="open-source__meta">
                  <Pill tone={state.tone}>{state.label}</Pill>
                  <time dateTime={item.date}>{formatDate(item.date)}</time>
                  <FiExternalLink
                    className="open-source__external"
                    aria-hidden="true"
                    focusable="false"
                  />
                </div>
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default OpenSource;
