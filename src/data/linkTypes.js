import { BsGithub, BsGlobe } from "react-icons/bs";
import { FaAppStoreIos } from "react-icons/fa";
import { SiStorybook } from "react-icons/si";

// Link type -> icon + button label. A project lists only the links it has;
// the first link in its list is the card's primary action.
export const linkTypes = {
  appstore: { Icon: FaAppStoreIos, label: "App Store" },
  web: { Icon: BsGlobe, label: "Visit" },
  storybook: { Icon: SiStorybook, label: "Storybook" },
  repo: { Icon: BsGithub, label: "Repo" },
};
