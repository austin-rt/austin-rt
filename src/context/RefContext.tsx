import { createContext, RefObject } from "react";

interface RefContextType {
  home: RefObject<HTMLElement | null>;
  about: RefObject<HTMLElement | null>;
  portfolio: RefObject<HTMLElement | null>;
  experience: RefObject<HTMLElement | null>;
  contact: RefObject<HTMLElement | null>;
  scrollTo: (section: RefObject<HTMLElement | null>) => void;
}

export const RefContext = createContext<RefContextType | null>(null);
