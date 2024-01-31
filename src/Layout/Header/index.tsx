import StyleSphere from "assets/style-sphere.png";
import {useState} from "react";
import {CiSearch} from "react-icons/ci";
import {VscAccount} from "react-icons/vsc";
import {FaRegHeart} from "react-icons/fa";
import {FaShoppingCart} from "react-icons/fa";
import Drawer from "Components/Drawer";
import DrawerIcon from "./DrawerIcon";
import man from "assets/man.png";
import woman from "assets/human.png";
import accessory from "assets/wedding-rings.png";

const drawerItems = [
  {
    label: "Men",
    url: man,
  },
  {
    label: "Women",
    url: woman,
  },
  {
    label: "Accessories",
    url: accessory,
  },
];

const Header = () => {
  const [drawerActive, setDrawerActive] = useState(false);

  const handleItemClick = (item: string) => {
    console.log(item);
  };

  return (
    <div className="bg-white shadow-lg fixed z-20 top-0 w-full">
      <div className="bg-primary-600 py-1">
        <p className="text-center">Flat 10% off on your first order</p>
      </div>
      <div className="max-w-[1300px] w-full flex items-center gap-2 my-0 mx-auto pr-4">
        <div className="md:hidden">
          <DrawerIcon handleClick={() => setDrawerActive(true)} />
          <Drawer
            closeDrawer={() => setDrawerActive(false)}
            active={drawerActive}
          >
            <Drawer.Body
              onItemClick={(value: string) => handleItemClick(value)}
            >
              {drawerItems.map((item) => (
                <Drawer.BodyItem
                  className="font-medium text-black"
                  key={item.label}
                  itemId={item.label}
                >
                  <img
                    className="w-10 aspect-square"
                    src={item.url}
                    alt={item.label}
                  />
                  <span>{item.label}</span>
                </Drawer.BodyItem>
              ))}
            </Drawer.Body>
          </Drawer>
        </div>
        <div className="logo">
          <img src={StyleSphere} alt="style sphere" className="w-20 h-20" />
        </div>
        <div className="gap-4 cursor-pointer hidden md:flex">
          <div>Men</div>
          <div>Women</div>
          <div>Accessories</div>
        </div>
        <div className="flex-1">
          <div className="float-right flex items-center px-2 md:border-slate-400 rounded md:border-2 cursor-pointer">
            <CiSearch />
            <input
              type="text"
              placeholder="Search by products"
              className="px-2 focus:outline-none hidden md:block"
            />
          </div>
        </div>
        <div className="flex gap-8 cursor-pointer">
          <div className="items-center gap-2 hidden md:flex">
            <VscAccount />
            <p>Account</p>
          </div>
          <div className="flex items-center gap-2">
            <FaRegHeart />
            <p className="hidden md:block">Wishlist</p>
          </div>
          <div className="flex items-center gap-2">
            <FaShoppingCart />
            <p className="hidden md:block">Cart</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
