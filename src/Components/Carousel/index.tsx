import {useContext, useEffect, Children, ReactNode} from "react";
import classNames from "classnames";
import {useCarousel} from "Components/Carousel/useCarousel";
import {CarouselContext} from "Components/Carousel/Context";
import {AnimatePresence, HTMLMotionProps, motion} from "framer-motion";
import {Dots} from "Components/Carousel/Navigators";

export interface CarouselProviderProps extends React.PropsWithChildren {
  delay?: number;
}

export interface SlidesProps extends HTMLMotionProps<"div"> {
  onSlideChange?: (idx: number) => void;
}

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

export const Slides = ({children, ...restProps}: SlidesProps) => {
  const {page, setSlidesCount, navigate} = useContext(CarouselContext);
  useEffect(() => {
    setSlidesCount(Children.toArray(children as ReactNode).length);
  }, [children]);
  return (
    <AnimatePresence initial={false} custom={page.direction}>
      <motion.div
        key={page.idx}
        custom={page.direction}
        variants={variants}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{
          x: {type: "spring", stiffness: 300, damping: 30},
          opacity: {duration: 0.2},
        }}
        drag="x"
        dragConstraints={{left: 0, right: 0}}
        dragElastic={1}
        onDragStart={() => {
          document.body.style.pointerEvents = "none";
        }}
        onDragEnd={(e, {offset, velocity}) => {
          const swipe = swipePower(offset.x, velocity.x);

          if (swipe < -swipeConfidenceThreshold) {
            navigate(1);
          } else if (swipe > swipeConfidenceThreshold) {
            navigate(-1);
          }
          document.body.style.pointerEvents = "all";
        }}
        className={classNames(
          "absolute h-full flex justify-center items-center w-full",
          "before:absolute before:inset-0 before:z-50 px-5",
        )}
        {...restProps}
      >
        {Children.toArray(children as ReactNode)[page.idx]}
      </motion.div>
    </AnimatePresence>
  );
};

const Carousel = ({
  children,
  className,
  ...restProps
}: React.ComponentProps<"div">) => {
  return (
    <div
      className="relative w-full drop-shadow-lg my-5 h-44 md:h-[720px]"
      {...restProps}
    >
      {children}
    </div>
  );
};

export const CarouselProvider = ({delay, children}: CarouselProviderProps) => {
  const carouselState = useCarousel(delay || 3000);

  return (
    <CarouselContext.Provider value={carouselState}>
      {children}
    </CarouselContext.Provider>
  );
};

Carousel.Provider = CarouselProvider;
Carousel.Slides = Slides;
Carousel.Dots = Dots;
export default Carousel;
