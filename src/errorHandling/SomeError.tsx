import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
const SomeErrorPage: React.FC = () => {
  return (
    <>
      <LazyLoadImage src="./500somethingWrong.avif" alt="500 PAGE" />
    </>
  );
};

export default SomeErrorPage;
