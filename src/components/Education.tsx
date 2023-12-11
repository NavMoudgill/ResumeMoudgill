import styles from "../styles";
import { EDUCATION_LIST } from "../constants";

const Education = ({
  val,
}: {
  val: (node?: Element | null | undefined) => void;
}) => {
  return (
    <div
      id="education"
      className={` ${styles.navbarColor} text-white  justify-center flex flex-col items-start px-5 sm:px-9 lg:px-15 `}
    >
      <div className="my-20 lg:mx-5 w-full sm:w-[70%] lg:w-[60%]">
        <h1 className=" text-3xl mb-6 card" ref={val}>
          Istruzione e Formazione
        </h1>
        <div className=" border-s-2  border-white p-3 sm:p-5  text-xl font-serif ">
          {EDUCATION_LIST?.map((item, experienceIndex) => (
            <div key={experienceIndex} className={`flex justify-between my-3`}>
              <h1 className="font-bold text-xl pl-1 sm:p-2">{item.yr}</h1>
              <div className="flex flex-col justify-center items-start ml-1 sm:ml-0">
                <h1 className="font-bold text-xl">{item.companyName}</h1>
                <h1 className="font-bold  text-xl">{item.place}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
