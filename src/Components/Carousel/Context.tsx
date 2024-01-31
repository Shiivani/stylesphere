import React from "react";

export type Page = {
  idx: number;
  direction: number;
};

type CarouselContextType = {
  slidesCount: number;
  setSlidesCount: (n: number) => void;
  page: Page;
  setPage: (page: Page) => void;
  navigate: (direction: number) => void;
  goto: (idx: number) => void;
};

export const CarouselContext = React.createContext({} as CarouselContextType);
