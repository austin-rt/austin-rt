import { createContext, useRef, ReactNode, RefObject } from "react";

interface RefContextType {
  home: RefObject<HTMLElement | null>;
  about: RefObject<HTMLElement | null>;
  portfolio: RefObject<HTMLElement | null>;
  experience: RefObject<HTMLElement | null>;
  contact: RefObject<HTMLElement | null>;
  scrollTo: (section: RefObject<HTMLElement | null>) => void;
}

export const RefContext = createContext<RefContextType | null>(null);

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

  const data: RefContextType = {
    home,
    about,
    portfolio,
    experience,
    contact,
    scrollTo,
  };

  return <RefContext.Provider value={data}>{children}</RefContext.Provider>;
};
