import {createContext, useContext} from "react";
import {AnimatePresence, motion} from "framer-motion";
import OutsideClickHandler from "Components/OutsideClickHandler";
import classNames from "classnames";

export interface DrawerProps
  extends React.ComponentProps<"div">,
    CloseBtnProps {
  active: boolean;
}

export interface CloseBtnProps {
  closeDrawer: () => void;
}

export interface DrawerBodyProps {
  onItemClick: (id: string) => void;
}

export interface DrawerBodyItemProps extends React.ComponentProps<"div"> {
  itemId: string;
}

const DrawerBodyContext = createContext({} as DrawerBodyProps);

const DrawerCloseButton = ({closeDrawer}: CloseBtnProps): JSX.Element => {
  return (
    <button
      onClick={closeDrawer}
      className="flex justify-center transform items-center max-w-full rounded cursor-pointer active:scale-95 border-primary-700 active:bg-gray-50 transition-all duration-300 relative border-0 overflow-hidden p-2 text-primary-700 hover:shadow-none"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        className="w-8 h-8"
      >
        <g
          fill="currentColor"
          transform="translate(0, 512) scale(0.1, -0.1)"
          stroke="0"
        >
          <path
            d="M2473 3107 c-685 -684 -693 -693 -693 -732 0 -39 8 -48 688 -728 
        378 -378 697 -690 710 -693 42 -11 76 8 158 88 89 86 110 122 100 
        165 -5 19 -191 212 -577 598 l-569 570 565 565 c310 310 570 577 576 
        592 19 47 2 78 -96 176 -147 146 -46 216 -862 -601z"
          ></path>
        </g>
      </svg>
    </button>
  );
};

const DrawerBody = ({
  children,
  onItemClick,
  ...restProps
}: DrawerBodyProps & React.ComponentProps<"div">) => {
  return (
    <DrawerBodyContext.Provider value={{onItemClick}}>
      <div {...restProps}>{children}</div>
    </DrawerBodyContext.Provider>
  );
};

const DrawerBodyItem = ({
  children,
  itemId,
  ...restProps
}: DrawerBodyItemProps): JSX.Element => {
  const {onItemClick} = useContext(DrawerBodyContext);

  return (
    <div
      {...restProps}
      onClick={() => onItemClick(itemId)}
      className={classNames(
        "flex gap-4 items-center px-4 py-2 transition-all duration-100 cursor-pointer",
        "text-primaryBlue-700 bg-white hover:drop-shadow-[0px_0px_2px_lightgrey]",
      )}
    >
      {children}
    </div>
  );
};

const Drawer = ({
  children,
  active,
  closeDrawer,
  ...restProps
}: DrawerProps): JSX.Element => {
  return (
    <>
      <AnimatePresence>
        {active && (
          <motion.div
            variants={{
              visible: {opacity: 1},
              hidden: {opacity: 0},
            }}
            animate="visible"
            initial="hidden"
            exit="hidden"
            transition={{duration: 0.3}}
            className="fixed inset-0 z-50 bg-black bg-opacity-40 backdrop-blur-md"
          />
        )}
      </AnimatePresence>
      <OutsideClickHandler
        className={classNames(
          "fixed top-0 bottom-0 left-0 w-9/12 bg-white overflow-y-auto overflow-x-hidden",
          "transition-transform duration-300 transform shadow-md sm:w-80 scroll-hidden z-50",
          {"-translate-x-full": !active},
        )}
        {...restProps}
        onOutsideClick={closeDrawer}
      >
        <DrawerCloseButton {...{closeDrawer}} />
        {children}
      </OutsideClickHandler>
    </>
  );
};

Drawer.Body = DrawerBody;
Drawer.BodyItem = DrawerBodyItem;

export default Drawer;
