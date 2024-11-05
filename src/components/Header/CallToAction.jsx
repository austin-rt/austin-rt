import { useContext } from "react";
import { RefContext } from "../../context/RefContext";
import Resume from "../../assets/Austin_Taylor-ATS_Resume-2024_11_05.pdf";

const CallToAction = () => {
  const { contact, scrollTo } = useContext(RefContext);
  return (
    <div className="call-to-action">
      <a
        href="https://docs.google.com/document/d/1-zDNzVHm6cU_RbuZKNaCGMaCCzErdtVP5BcP9RhUuWA/preview"
        target="_blank"
        className="btn btn-primary"
        role="button"
        rel="noreferrer"
      >
        View Resume
      </a>
      <a href={Resume} download className="btn" role="button">
        Download Resume
      </a>
      <div
        onClick={() => {
          scrollTo(contact);
        }}
        className="btn btn-primary"
        role="button"
      >
        Let's Chat
      </div>
    </div>
  );
};

export default CallToAction;
