import { EXPERIENCE_IMAGES, EXPERIENCE_LIST } from "../constants";
import Slideshow from "./sharedComponents/Slideshow";
const Experience = ({
  val,
}: {
  val: (node?: Element | null | undefined) => void;
}) => {
  return (
    <Slideshow
      idDiv="experience"
      EXPERIENCE_IMAGES={EXPERIENCE_IMAGES}
      EXPERIENCE_LIST={EXPERIENCE_LIST}
      heading="Esperienza"
      val={val}
    />
  );
};

export default Experience;
