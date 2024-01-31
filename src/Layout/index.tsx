import Header from "Layout/Header";
import Footer from "Layout/Footer";
import {Outlet} from "react-router-dom";

const Layout = () => {
  return (
    <div className="mt-[115px]">
      <Header />
      <div className="h-auto">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
