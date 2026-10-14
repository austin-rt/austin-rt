import "./OpenSource.css";
import { useContext, useEffect, useState } from "react";
import { FiExternalLink } from "react-icons/fi";
import { RefContext } from "../../context/RefContext";
import contributions from "../../data/openSource.json";
import {
  PR_LABEL,
  PR_STATE,
  cardsFrom,
  fetchPullRequests,
  formatMonth,
} from "../../data/contributionStatus";
import { sections } from "../../data/profile";
import Pill from "../shared/Pill";

const TONE = {
  [PR_STATE.merged]: "primary",
  [PR_STATE.open]: "light",
  [PR_STATE.draft]: "alt",
  [PR_STATE.closed]: "alt",
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
      <h5>{sections.openSource.kicker}</h5>
      <h2>{sections.openSource.title}</h2>

      <ul className="container open-source__list">
        {cards.map((item) => (
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
                  {item.state && (
                    <Pill tone={TONE[item.state]}>{PR_LABEL[item.state]}</Pill>
                  )}
                  {item.date && (
                    <time dateTime={item.date}>{formatMonth(item.date)}</time>
                  )}
                  <FiExternalLink
                    className="open-source__external"
                    aria-hidden="true"
                    focusable="false"
                  />
                </div>
              </a>
            </li>
          )
        )}
      </ul>
    </section>
  );
};

export default OpenSource;
