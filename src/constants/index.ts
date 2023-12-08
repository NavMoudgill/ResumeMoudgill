import { SvgIconProps } from "@mui/material";
import { MdHistoryEdu } from "react-icons/md";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import NearMeIcon from "@mui/icons-material/NearMe";
import { BsFillMotherboardFill } from "react-icons/bs";
import { MdPerson2 } from "react-icons/md";
import { PiDevicesLight } from "react-icons/pi";
import { FaLightbulb } from "react-icons/fa";
import { MdAddRoad } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";
import { BsMotherboard } from "react-icons/bs";
import { FaHtml5 } from "react-icons/fa6";
import { IoLogoCss3 } from "react-icons/io";
import { FaBootstrap } from "react-icons/fa6";
import { IoLogoReact } from "react-icons/io5";
import { SiTailwindcss } from "react-icons/si";
import { SiReacthookform } from "react-icons/si";
import { RiJavascriptFill } from "react-icons/ri";
import { FaNode } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { BiLogoGmail } from "react-icons/bi";
import { MdOutgoingMail } from "react-icons/md";
import { BsBrowserChrome } from "react-icons/bs";
import { MdConnectWithoutContact } from "react-icons/md";
export interface SidebarLinksType {
  id: number;
  title: string;
  link: string;
  icon?: React.ComponentType<SvgIconProps>;
}
export const SIDEBARLINKS: Array<SidebarLinksType> = [
  {
    id: 1,
    title: "About",
    link: "/about",
    icon: MdPerson2,
  },
  {
    id: 2,
    title: "Istruzione e Informazione",
    link: "/education",
    icon: MdHistoryEdu,
  },
  {
    id: 3,
    title: "Esperienza",
    link: "/experience",
    icon: MdAddRoad,
  },
  {
    id: 4,
    title: "Skills",
    link: "/skills",
    icon: PiDevicesLight,
  },
  {
    id: 5,
    title: "Progetti",
    link: "/projects",
    icon: FaLightbulb,
  },
  {
    id: 6,
    title: "Altro",
    link: "/other",
    icon: BsMotherboard,
  },
  {
    id: 7,
    title: "Contatti",
    link: "/contact",
    icon: RiContactsFill,
  },
];
export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "features",
    title: "Features",
  },
  {
    id: "product",
    title: "Product",
  },
  {
    id: "clients",
    title: "Clients",
  },
];
export interface SlideProps {
  photo: string;
  caption: string;
}
export const SLIDES_FOR_SHOW: Array<SlideProps> = [
  { photo: "newYr.jpg", caption: "hello1" },
  { photo: "christmas.jpg", caption: "hello2" },
  { photo: "about.jpg", caption: "hello3" },
];
export const EXPERIENCE_IMAGES: Array<SlideProps> = [
  { photo: "scuola.jpg", caption: "hello1" },
  { photo: "procura.jpg", caption: "hello2" },
  { photo: "astrolabio.jpg", caption: "hello3" },
];
export interface ExperienceListProps {
  yr: String;
  place: String;
  companyName: String;
}
export const EXPERIENCE_LIST: Array<ExperienceListProps> = [
  {
    yr: "2022 – 2023",
    place: "Pronto Intervento Sociale Lt1-Lt2",
    companyName: "Mediatrice di lingua Punjabi,Inglese-Italiano",
  },
  {
    yr: "2021 – 2022",
    place: "Latina, Italia",
    companyName: "Traduttrice in Procura di Latina",
  },
  {
    yr: "2020 – 2019",
    place: "Latina, Italia",
    companyName: "L'insegnante in Astrolabio",
  },
  {
    yr: "2018 – 2022",
    place: "G.Marconi,Latina",
    companyName: "Programmatrice Front-End e Back-end",
  },
];
export const PROJECTS_IMAGES: Array<SlideProps> = [
  { photo: "scuola.jpg", caption: "scuola" },
  { photo: "procura.jpg", caption: "procura" },
  { photo: "astrolabio.jpg", caption: "astrolabio" },
];
export interface ProjectsListProps {
  yr: String;
  name: String;
  link: String;
  photo: String;
  description?: String;
  hashtags: String[];
}
export const PROJECTS_LIST: Array<ProjectsListProps> = [
  {
    yr: " 11/2023",
    name: "HooBank",
    link: "https://github.com/NavMoudgill/facebookPageProject",
    photo: "hooBank.png",
    description: "One Page Facebook Clone",
    hashtags: ["React", "JS", "HTML", "CSS"],
  },
  {
    yr: "12/2023",
    name: "Portfoglio",
    link: "https://www.big-enterprise.online/",
    photo: "portfoglio.png",
    description: "Portfoglio",
    hashtags: ["React", "JS", "HTML", "CSS"],
  },
  {
    yr: "10/2023",
    name: "Learn Italian",
    link: "https://www.big-enterprise.online/",
    photo: "learnI.png",
    description: "Learn Italian",
    hashtags: [
      "React",
      "JS",
      "HTML",
      "CSS",
      "tailwind",
      "nodejs",
      "express",
      "mysql",
    ],
  },
];
export const EDUCATION_LIST: Array<ExperienceListProps> = [
  {
    yr: "2020 - 2021",
    place: "Accademia Life Srl, Cori",
    companyName: "Corso di Bioedilizia",
  },
  {
    yr: "2018 - 2019",
    place: "G.Marconi, Latina",
    companyName: "Diploma in Informatica",
  },
];
interface IconProps {
  icon: React.ComponentType<SvgIconProps>;
}
export const ICONS: IconProps[] = [
  { icon: MdOutgoingMail },
  { icon: BsBrowserChrome },
  { icon: MdConnectWithoutContact },
  { icon: BiLogoGmail },
  { icon: IoLogoReact },
  { icon: SiReacthookform },
  { icon: FaHtml5 },
  { icon: IoLogoCss3 },
  { icon: FaBootstrap },
  { icon: SiTailwindcss },
  { icon: RiJavascriptFill },
  { icon: FaNode },
  { icon: SiExpress },
];
export const gradientClassNames: String[] = [
  "bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500",
  "bg-gradient-to-r from-green-400 via-yellow-500 to-yellow-300",
  "bg-gradient-to-r from-teal-500 via-indigo-500 to-purple-500",
  "bg-gradient-to-r from-orange-500 via-pink-500 to-red-500",
  "bg-gradient-to-r from-gray-400 via-gray-600 to-blue-600",
  "bg-gradient-to-r from-yellow-300 via-orange-500 to-red-500",
  "bg-gradient-to-r from-blue-500 via-cyan-400 to-teal-500",
  "bg-gradient-to-r from-purple-500 via-pink-500 to-red-500",
  "bg-gradient-to-r from-green-500 via-lime-400 to-yellow-300",
  "bg-gradient-to-r from-blue-300 via-indigo-300 to-purple-300",
];

export const SKILLS_LIST: String[] = [
  "Posta elettronica",
  "Utilizzo del browser",
  "Social Network",
  "Gestione autonoma della posta e-mail",
  "Bootstrap",
  "React",
  "React Hooks",
  "HTML",
  "CSS",
  "Framework CSS - Tailwind",
  "JS",
  "NodeJS",
  "Express",
];
