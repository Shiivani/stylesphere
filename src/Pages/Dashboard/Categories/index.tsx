import {
  menucategories,
  categories,
  trendingCat,
  trendingCat1,
  trendingCat2,
} from "./dummyData";

const Categories = () => {
  return (
    <div className="flex gap-4 cursor-pointer overflow-auto py-4 scroll-hidden">
      {categories.map(({img, title}) => (
        <div
          className="bg-teal-50 px-6 py-4 rounded w-48 md:w-72 shadow"
          key={title}
        >
          <img
            className="rounded-md h-72 md:h-96 w-full object-cover mx-auto my-0"
            src={img}
            alt={title}
          />
          <p className="text-center pt-2 w-[inherit]">{title}</p>
        </div>
      ))}
    </div>
  );
};

const MenuCategory = () => {
  return (
    <div className="flex gap-4 cursor-pointer overflow-auto py-4 scroll-hidden">
      {menucategories.map(({img, title}) => (
        <div
          className="bg-white py-3 rounded w-36 md:w-[150px] shadow"
          key={title}
        >
          <img
            className="rounded-md h-[150px] w-auto object-cover mx-auto my-0"
            src={img}
            alt={title}
          />
          <p className="text-center pt-2 w-[inherit]">{title}</p>
        </div>
      ))}
    </div>
  );
};

const TrendingCategory = () => {
  return (
    <div className="mt-10 mb-12">
      <h2 className="text-center font-bold text-2xl py-4 md:pt-6">
        TRENDING CATEGORIES 🔥
      </h2>
      <p className="text-center pb-6 text-xl">
        Stay ahead of the fashion game with these hot trends to try
      </p>
      <div className="flex flex-row gap-8">
        <div className="flex flex-col gap-4">
          {trendingCat.map(({img, title}) => (
            <div className="cusor-pointer" key={title}>
              <img
                src={img}
                alt={title}
                className="w-full h-full rounded-xl object-cover"
              />
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-4">
          {trendingCat1.map(({img, title}) => (
            <div className="cusor-pointer" key={title}>
              <img
                src={img}
                alt={title}
                className="w-full h-full rounded-xl object-cover"
              />
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-4">
          {trendingCat2.map(({img, title}) => (
            <div className="cusor-pointer" key={title}>
              <img
                src={img}
                alt={title}
                className="w-full h-full rounded-xl object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

Categories.Menu = MenuCategory;
Categories.Trending = TrendingCategory;

export default Categories;
