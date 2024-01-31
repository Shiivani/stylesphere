import Carousel from "Components/Carousel";
import CarouselImg from "assets/carousel-image.webp";
import CarouselImg1 from "assets/carousel-image1.webp";
import CarouselImg2 from "assets/carousel-image2.webp";

const banners = [
  {
    imageUrlWeb: CarouselImg,
    imageUrlMobile: CarouselImg,
  },
  {
    imageUrlWeb: CarouselImg1,
    imageUrlMobile: CarouselImg1,
  },
  {
    imageUrlWeb: CarouselImg2,
    imageUrlMobile: CarouselImg2,
  },
];

const BannerIndex = () => {
  return (
    <div className="overflow-hidden">
      <Carousel.Provider>
        <Carousel>
          <Carousel.Slides>
            {!!banners?.length &&
              banners.map((val, idx) => {
                return (
                  <img
                    srcSet={`${val.imageUrlMobile} 425w, ${val.imageUrlWeb}`}
                    className="rounded-2xl h-auto w-full object-cover"
                    key={idx}
                    alt="banner-img"
                  />
                );
              })}
          </Carousel.Slides>
        </Carousel>
        <Carousel.Dots />
      </Carousel.Provider>
    </div>
  );
};

export default BannerIndex;
