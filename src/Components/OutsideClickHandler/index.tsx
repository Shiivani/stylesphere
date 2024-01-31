import React, {useRef, useEffect, ComponentProps} from "react";

const useOutsideHandler = (
  ref: React.MutableRefObject<HTMLInputElement | null>,
  onOutsideClick: () => void,
) => {
  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      onOutsideClick();
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
};

interface OutsideClickProps extends ComponentProps<"div"> {
  onOutsideClick: () => void;
  children: React.ReactNode;
}

export default function OutsideClickHandler({
  children,
  onOutsideClick,
  ...restProps
}: OutsideClickProps) {
  const wrapperRef = useRef(null);
  useOutsideHandler(wrapperRef, onOutsideClick);

  return (
    <div ref={wrapperRef} {...restProps}>
      {children}
    </div>
  );
}

OutsideClickHandler.defaultProps = {
  onOutsideClick: () => null,
};
