import * as React from "react";
import {CarouselContext} from "Components/Carousel/Context";
import classNames from "classnames";

const Dot = ({
  active,
  ...restProps
}: {active?: boolean} & React.ComponentProps<"div">) => {
  return (
    <div
      className={classNames(
        "w-2 h-2 rounded-full transition-colors cursor-pointer",
        {
          "bg-primary-600": active,
          "border border-gray-300 bg-gray-50": !active,
        },
      )}
      {...restProps}
    />
  );
};

export const Dots = () => {
  const {slidesCount, goto, page} = React.useContext(CarouselContext);

  return (
    <div className="flex justify-center space-x-2">
      {Array(slidesCount)
        .fill(1)
        .map((_, i) => (
          <Dot key={i} onClick={() => goto(i)} active={page.idx === i} />
        ))}
    </div>
  );
};
