import { PROJECTS_LIST } from "../constants";
import ProjectCard from "./sharedComponents/ProjectCard";
import styles from "../styles";

const Projects = ({
  val,
}: {
  val: (node?: Element | null | undefined) => void;
}): React.ReactElement => {
  return (
    <section
      id="projects"
      className={`flex flex-col justify-center px-10  py-5  ${styles.navbarColor}  `}
    >
      <h3 className="text-gray-300  mt-2 text-start px-5">My Work</h3>
      <h1
        className="text-white text-2xl sm:text-3xl lg:text-4xl  mt-3 mb-5 px-5 card"
        ref={val}
      >
        Progetti
      </h1>

      <div className=" flex flex-wrap gap-7 justify-center items-center mb-3">
        {PROJECTS_LIST?.map((project, index) => (
          <ProjectCard
            key={index}
            description={project.description}
            name={project.name}
            link={project.link}
            photo={project?.photo}
            video={project?.video}
            hashtags={project.hashtags}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
{
  /*       <SlidingWithDiv
        DIV_LIST={PROJECTS_LIST}
        IMAGES_LIST={PROJECTS_IMAGES}
        heading="Projetto"
        idDiv="projects"
      />
 */
}
