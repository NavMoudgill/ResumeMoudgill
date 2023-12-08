import { useState } from "react";
import { ProjectsListProps, SlideProps } from "../../constants";
import { LazyLoadImage } from "react-lazy-load-image-component";

interface SlideshowProps {
  IMAGES_LIST: Array<SlideProps>;
  DIV_LIST: Array<ProjectsListProps>;
  heading?: string;
  idDiv?: string;
}

const SlidingWithDiv = ({
  IMAGES_LIST,
  DIV_LIST,
  heading,
  idDiv,
}: SlideshowProps) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const length = IMAGES_LIST.length;

  if (!Array.isArray(IMAGES_LIST) || IMAGES_LIST.length <= 0) {
    return null;
  }

  const newSlide = () => {
    setSlideIndex((prevIndex) =>
      prevIndex === length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevoiusSlide = () => {
    setSlideIndex((prevIndex) =>
      prevIndex === 0 ? length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative" id={idDiv}>
      <div className="p-6   flex flex-col justify-center items-center lg:flex-row lg:justify-around lg:items-center bg-black">
        <div className="hover:skew-y-6 mb-5 lg:mb-0 text-white shadow-lg shadow-white shadow-outer rounded-xl flex flex-col w-[80%] sm:w-[40%]  h-[45vh] items-center justify-center">
          <h1 className=" text-2xl sm:text-3xl lg:text-4xl mb-2 my-2 sm:my-5">
            {heading}:
          </h1>
          {DIV_LIST?.map((item, experienceIndex) => (
            <div
              key={experienceIndex}
              className={`text-gray-500 flex flex-col sm:flex-row  max-w-[100%] sm:justify-center sm:items-center p-3 py-2  ${
                experienceIndex === slideIndex ? "" : "hidden"
              }`}
            >
              <div className="font-bold text-xl sm:text-2xl lg:text-3xl m-2">
                {item.yr}
              </div>
              <div className="flex flex-col justify-start ml-5 overflow-hidden mb-5 sm:mb-0  whitespace-pre-line  break-words">
                <h1 className="font-bold  text-xl sm:text-2xl lg:text-3xl  ">
                  {item.place}
                </h1>
                <h1 className="font-bold text-xl sm:text-2xl lg:text-3xl whitespace-pre-line break-words">
                  <a href={`${item.link}`} target="_blank">
                    <u>{item.link}</u>
                  </a>
                </h1>
              </div>
            </div>
          ))}
        </div>

        <div className="slideshow-container aspect-ratio-container aspectWithForSlidingWithDiv ">
          {IMAGES_LIST?.map((slide, index) => (
            <div
              key={index}
              className={`mySlides ${
                slideIndex === index ? "activeSlidingDiv" : ""
              }`}
            >
              {slideIndex === index && (
                <LazyLoadImage src={slide.photo} alt={slide.caption} />
              )}
            </div>
          ))}
        </div>
      </div>
      <a className="prev" onClick={prevoiusSlide}>
        ❮
      </a>
      <a className="next" onClick={newSlide}>
        ❯
      </a>
    </div>
  );
};

export default SlidingWithDiv;
