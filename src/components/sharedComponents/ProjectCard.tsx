import React from "react";
interface ProjectCardProps {
  description: String | undefined;
  name: String;
  link: String;
  photo: String;
  hashtags: String[];
}
import { gradientClassNames } from "../../constants";
import { FaGithub } from "react-icons/fa6";
import { LazyLoadImage } from "react-lazy-load-image-component";
const ProjectCard = ({
  description,
  name,
  link,
  photo,
  hashtags,
}: ProjectCardProps): React.ReactElement => {
  return (
    <div className=" shadow-lg shadow-indigo-300/50 hover:shadow-blue-300 min-h-[420px] p-5   rounded-2xl w-full sm:w-[360px] bg-[#0a1725]">
      <div className="h-[230px] w-full relative group overflow-hidden">
        <LazyLoadImage
          src={`${photo}`}
          alt={`${name}`}
          className="group-hover:rotate-1 h-full w-full object-contain rounded-2xl group-hover:scale-110 trasnform transition-all duration-1000 ease-in-out "
        />
        <div className=" absolute inset-0 flex justify-end m-3 ">
          <div
            className="w-10 h-10 bg-black rounded-full flex justify-center items-center cursor-pointer"
            onClick={() => window.open(`${link}`, "_blank")}
          >
            <FaGithub className="w-1/2 h-1/2 object-contain z-10 text-white" />
          </div>
        </div>
      </div>
      <div className="mt-5 ">
        <h3 className="font-bold text-[24px] text-white">{name}</h3>
        <p className="text-[14px] mt-2 text-gray-400">{description}</p>
      </div>
      <div>
        {hashtags.map((hashtag, index) => {
          const number = Math.floor(Math.random() * 10);
          return (
            <span
              key={index}
              className={`text-[14px] mt-2  inline-block mr-2 text-transparent bg-clip-text ${gradientClassNames[number]}`}
            >
              #{hashtag}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectCard;
