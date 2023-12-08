import styles from "../styles";
import { SKILLS_LIST } from "../constants";
import IconSkill from "./IconSkill";

const Skills = ({
  val,
}: {
  val: (node?: Element | null | undefined) => void;
}): JSX.Element => {
  return (
    <div
      id="skills"
      className={` text-white    justify-center flex flex-col items-start px-10 ${styles.navbarColor}`}
    >
      <div className="my-10 lg:mx-5 flex flex-col sm:flex-row">
        <div className="flex flex-col">
          <h3 className="text-gray-300  mt-2 text-start ">My Skills</h3>
          <h1 className="text-3xl mb-5 card mt-3" ref={val}>
            Competenze
          </h1>
          <div className="border-s-2  border-white p-5  text-xl font-serif ">
            <ul className={styles.skillsList}>
              {SKILLS_LIST?.map((skill, index) => (
                <li
                  key={index}
                  className={`${styles.skillItem} hover:translate-x-5 duration-500 ease-in-out transition-all`}
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className=" flex justify-center items-center flex-wrap sm:w-[50%] p-5 py-10">
          <IconSkill />
        </div>
      </div>
    </div>
  );
};

export default Skills;
