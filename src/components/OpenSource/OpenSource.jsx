import "./OpenSource.css";
import { useContext, useEffect, useState } from "react";
import { FiExternalLink } from "react-icons/fi";
import { RefContext } from "../../context/RefContext";
import contributions from "../../data/openSource.json";
import {
  PR_STATE,
  cardsFrom,
  fetchPullRequests,
} from "../../data/contributionStatus";
import Pill from "../shared/Pill";

const STATE = {
  [PR_STATE.merged]: { label: "Merged", tone: "primary" },
  [PR_STATE.open]: { label: "Open PR", tone: "light" },
  [PR_STATE.draft]: { label: "Draft PR", tone: "alt" },
  [PR_STATE.closed]: { label: "Closed", tone: "alt" },
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
  const [cards, setCards] = useState(() => cardsFrom(contributions, null));

  useEffect(() => {
    let active = true;
    fetchPullRequests(contributions)
      .then((items) => active && setCards(cardsFrom(contributions, items)))
      .catch(() => {});
    return () => {
      active = false;
    };
  }, []);

  return (
    <section id="open-source" ref={sectionRef}>
      <h5>Giving Back</h5>
      <h2>Open Source</h2>

      <ul className="container open-source__list">
        {cards.map((item) => {
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
                  <h3 className="open-source__name">{item.name}</h3>
                  <span className="open-source__product">{item.product}</span>
                  <span className="open-source__repo">
                    {item.repo} · {item.language}
                  </span>
                </div>
                <p className="open-source__summary">{item.summary}</p>
                <div className="open-source__meta">
                  {state && <Pill tone={state.tone}>{state.label}</Pill>}
                  {item.date && (
                    <time dateTime={item.date}>{formatDate(item.date)}</time>
                  )}
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
