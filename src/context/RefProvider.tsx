import { useRef, ReactNode, RefObject } from "react";
import { RefContext } from "./RefContext";

interface RefProviderProps {
  children: ReactNode;
}

export const RefProvider = ({ children }: RefProviderProps) => {
  const home = useRef<HTMLElement | null>(null);
  const about = useRef<HTMLElement | null>(null);
  const portfolio = useRef<HTMLElement | null>(null);
  const experience = useRef<HTMLElement | null>(null);
  const contact = useRef<HTMLElement | null>(null);

  const scrollTo = (section: RefObject<HTMLElement | null>) => {
    if (section.current) {
      window.scrollTo({
        top: section.current.offsetTop,
        behavior: "smooth",
      });
    }
  };

  const data = {
    home,
    about,
    portfolio,
    experience,
    contact,
    scrollTo,
  };

  return <RefContext.Provider value={data}>{children}</RefContext.Provider>;
};
