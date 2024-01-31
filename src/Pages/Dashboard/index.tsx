import Categories from "Pages/Dashboard/Categories";
import Banner from "Pages/Dashboard/Banner";
import BannerImg1 from "assets/banner-image-part1.webp";
import BannerImg2 from "assets/banner-image-part2.webp";

const Dashboard = () => {
  return (
    <div className="py-4 px-4 max-w-[1300px] mx-auto my-0">
      <Categories.Menu />
      <Banner />
      <Categories />
      <>
        <h2 className="text-center text-2xl font-bold m-8">
          DESIGN OF THE WEEK
        </h2>
        <div className="flex cursor-pointer">
          <img
            alt="design of the week"
            src={BannerImg1}
            className="w-2/4 rounded-l-xl"
          />
          <img
            alt="design of the week"
            src={BannerImg2}
            className="w-2/4 rounded-r-xl"
          />
        </div>
      </>
      <Categories.Trending />
    </div>
  );
};

export default Dashboard;
