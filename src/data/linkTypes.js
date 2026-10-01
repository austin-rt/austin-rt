import { BsGithub, BsGlobe, BsInfoCircle } from "react-icons/bs";
import { FaAppStoreIos, FaGooglePlay } from "react-icons/fa";
import { SiStorybook } from "react-icons/si";

// Link type -> icon + button label. A project lists only the links it has;
// the first link in its list is the card's primary action.
export const linkTypes = {
  info: { Icon: BsInfoCircle, label: "Info" },
  appstore: { Icon: FaAppStoreIos, label: "App Store" },
  playstore: { Icon: FaGooglePlay, label: "Google Play" },
  web: { Icon: BsGlobe, label: "Website" },
  webapp: { Icon: BsGlobe, label: "Web App" },
  storybook: { Icon: SiStorybook, label: "Storybook" },
  repo: { Icon: BsGithub, label: "GitHub" },
};
