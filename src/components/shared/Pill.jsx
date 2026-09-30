import "./Pill.css";

// tone: "primary" (live / merged) | "light" (finished / open) | "alt" (fork)
const Pill = ({ tone = "primary", children }) => (
  <span className={`pill pill--${tone}`}>{children}</span>
);

export default Pill;
