import {FaFacebookSquare} from "react-icons/fa";
import {FaInstagram} from "react-icons/fa";
import {RiTwitterLine} from "react-icons/ri";
import {FaPinterestSquare} from "react-icons/fa";
import {FaSnapchat} from "react-icons/fa6";
import {BsSunglasses} from "react-icons/bs";
import {BiCategoryAlt} from "react-icons/bi";
import {SiAzuredataexplorer} from "react-icons/si";
import {CgProfile} from "react-icons/cg";

const Footer = () => {
  return (
    <>
      <div className="bg-[#181818] text-white text-lg py-12 px-8 leading-10 hidden md:block">
        <div className="max-w-[1300px] w-full mx-auto my-0">
          <div className="flex justify-between flex-wrap">
            <div className="flex gap-10">
              <div>
                <h3 className="text-2xl">About Style Sphere</h3>
                <p className="cursor-pointer">Who are we?</p>
                <p className="cursor-pointer">We're Hiring</p>
                <p className="cursor-pointer">Terms & Conditions</p>
                <p className="cursor-pointer">Privacy Policy</p>
                <p className="cursor-pointer">Blog</p>
              </div>
              <div>
                <h3 className="text-2xl">Customer Service</h3>
                <p className="cursor-pointer">Contact us</p>
                <p className="cursor-pointer">Track Order</p>
                <p className="cursor-pointer">Return Order</p>
                <p className="cursor-pointer">Cancel Order</p>
              </div>
              <div>
                <h3 className="text-2xl">Quick Links</h3>
                <p className="cursor-pointer">Offers</p>
                <p className="cursor-pointer">Sitemap</p>
                <p className="cursor-pointer">Brand Stores</p>
                <p className="cursor-pointer">Fanbook</p>
              </div>
            </div>
            <div>
              <label className="text-2xl" htmlFor="email">
                Get updates on your inbox
              </label>
              <div className="flex gap-4 py-3">
                <input
                  type="text"
                  className="rounded px-2"
                  placeholder="Enter your email address"
                  name="email"
                />
                <button className="rounder cursor-pointer font-bold text-black bg-primary-600 px-4 py-2 rounded-md">
                  Subscribe
                </button>
              </div>
              <div className="flex items-center gap-2">
                <FaFacebookSquare />
                <p>4.7M People like this</p>
              </div>
              <div className="flex items-center gap-2">
                <FaInstagram />
                <p>1M Followers</p>
              </div>
              <div className="flex items-center pt-2 gap-2">
                <RiTwitterLine />
                <FaPinterestSquare />
                <FaSnapchat />
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="float-left"></div>
            <div className="float-right"></div>
          </div>
        </div>
      </div>
      <div className="md:hidden bg-white shadow-footer-sd fixed bottom-0 flex w-full p-4 justify-between items-center">
        <div className="cusor-pointer">
          <BsSunglasses className="my-0 mx-auto" />
          <p>Home</p>
        </div>
        <div className="cusor-pointer">
          <BiCategoryAlt className="my-0 mx-auto" />
          <p>Categories</p>
        </div>
        <div className="cusor-pointer">
          <SiAzuredataexplorer className="my-0 mx-auto" />
          <p>Explore</p>
        </div>
        <div className="cusor-pointer">
          <CgProfile className="my-0 mx-auto" />
          <p>Profile</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
