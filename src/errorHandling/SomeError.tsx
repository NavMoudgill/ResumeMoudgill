import React, { Suspense } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import CircularProgress from "../components/sharedComponents/CircularProgress";
const SomeErrorPage: React.FC = () => {
  return (
    <Suspense fallback={<CircularProgress />}>
      <LazyLoadImage src="./500somethingWrong.avif" alt="500 PAGE" />
    </Suspense>
  );
};

export default SomeErrorPage;
