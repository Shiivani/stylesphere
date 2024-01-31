import {useEffect, useState} from "react";
import {Page} from "Components/Carousel/Context";

export const useCarousel = (autoPaginateMillis: number) => {
  const [slidesCount, setSlidesCount] = useState<number>(0);
  const [page, setPage] = useState<Page>({idx: 0, direction: 0});

  useEffect(() => {
    if (!autoPaginateMillis) return;
    const timeoutId = setTimeout(() => navigate(1), autoPaginateMillis);
    return () => clearTimeout(timeoutId);
  }, [page]);

  const applyPage = (page: Page) => {
    if (page.idx < 0) return setPage({idx: slidesCount - 1, direction: -1});
    if (page.idx >= slidesCount) return setPage({idx: 0, direction: 1});
    setPage(page);
  };

  const navigate = (direction: number) => {
    const idx = page.idx + direction;
    applyPage({idx, direction});
  };

  const goto = (idx: number) => {
    const direction = idx > page.idx ? 1 : -1;
    applyPage({idx, direction});
  };

  return {slidesCount, setSlidesCount, page, setPage, navigate, goto};
};
