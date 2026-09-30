import "./Nav.css";
import { useState, useContext } from "react";
import { AiFillHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { AiFillMail } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { FaCodeBranch } from "react-icons/fa";
import { RefContext } from "../../context/RefContext";

const Nav = () => {
  const { home, about, projects, openSource, experience, contact, scrollTo } =
    useContext(RefContext);
  const [activeNav, setActiveNav] = useState("#");

  const items = [
    { hash: "#", label: "Home", ref: home, Icon: AiFillHome },
    { hash: "#about", label: "About", ref: about, Icon: AiOutlineUser },
    { hash: "#projects", label: "Projects", ref: projects, Icon: BsFillBriefcaseFill },
    { hash: "#open-source", label: "Open Source", ref: openSource, Icon: FaCodeBranch },
    { hash: "#experience", label: "Experience", ref: experience, Icon: BiBook },
    { hash: "#contact", label: "Contact", ref: contact, Icon: AiFillMail },
  ];

  return (
    <nav>
      {items.map(({ hash, label, ref, Icon }) => (
        <div
          key={hash}
          className="nav__container"
          onClick={() => {
            setActiveNav(hash);
            scrollTo(ref);
          }}
        >
          <div className={activeNav === hash ? "active nav__link" : "nav__link"}>
            <Icon className="nav__icon" title={label.toLowerCase()} />
          </div>
          <p className="nav__text">{label}</p>
        </div>
      ))}
    </nav>
  );
};

export default Nav;
