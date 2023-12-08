import { useState } from "react";
import { SlideProps, ExperienceListProps } from "../../constants";
import { LazyLoadImage } from "react-lazy-load-image-component";

interface SlideshowProps {
  EXPERIENCE_IMAGES: Array<SlideProps>;
  EXPERIENCE_LIST: Array<ExperienceListProps>;
  heading?: string;
  idDiv?: string;
  val: (node?: Element | null | undefined) => void;
}

const Slideshow = ({
  EXPERIENCE_IMAGES,
  EXPERIENCE_LIST,
  heading,
  idDiv,
  val,
}: SlideshowProps) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const length = EXPERIENCE_IMAGES.length;

  if (!Array.isArray(EXPERIENCE_IMAGES) || EXPERIENCE_IMAGES.length <= 0) {
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
    <div
      className="slideshow-container aspect-ratio-container aspectWithForSlideshow relative bg-gray-200"
      id={idDiv}
    >
      {EXPERIENCE_IMAGES?.map((slide, index) => (
        <div
          key={index}
          className={`mySlides ${slideIndex === index ? "active" : ""}`}
        >
          {slideIndex === index && (
            <LazyLoadImage src={slide.photo} alt={slide.caption} />
          )}

          <div className="p-2 absolute top-3 left-7 sm:top-20  lg:top-25 sm:left-[3.76rem] text-gray-600">
            <h1
              className="text-[#3a3535] text-2xl sm:text-3xl lg:text-4xl mb-2 sm:mb-5 card animate-spin"
              ref={val}
            >
              {heading}:
            </h1>
            {EXPERIENCE_LIST?.map((item, experienceIndex) => (
              <div
                key={experienceIndex}
                className={`flex flex-col sm:flex-row ${
                  experienceIndex === slideIndex ? "" : "hidden"
                }`}
              >
                <div className="sm:font-bold text-xl sm:text-2xl lg:text-3xl ">
                  {item.yr}
                </div>
                <div className="flex flex-col justify-start ml-5">
                  <div className="sm:font-bold text-xl sm:text-2xl lg:text-3xl ">
                    {item.companyName}
                  </div>
                  <div className="fsm:ont-bold  text-xl sm:text-2xl lg:text-3xl ">
                    {item.place}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      <a className="prev" onClick={prevoiusSlide}>
        &#10094;
      </a>
      <a className="next" onClick={newSlide}>
        &#10095;
      </a>
    </div>
  );
};

export default Slideshow;
