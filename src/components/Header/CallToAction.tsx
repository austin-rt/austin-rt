import { useContext } from "react";
import { RefContext } from "../../context/RefContext";
import { API } from "../../utils/constants";

const CallToAction = () => {
  const { contact, scrollTo } = useContext(RefContext);
  return (
    <div className="call-to-action">
      <a href={API.resumeExport} download className="btn" role="button">
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
