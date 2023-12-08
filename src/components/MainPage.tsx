import { Suspense, useEffect } from "react";
import Footer from "./Footer";
import { CircularProgress } from "@mui/material";
import Navbar from "./Navbar";
import styles from "../styles";
import NavbarList from "./NavbarList";
import Home from "./Home";
import About from "./About";
import Experience from "./Experience";
import Education from "./Education";
import Skills from "./Skills";
import OtherDetails from "./OtherDetails";
import Contact from "./Contact";
import Projects from "./Projects";
import { useInView, InViewHookResponse } from "react-intersection-observer";

const MainPage: React.FC = () => {
  // Define refs and inView states for each section
  const sections: Record<string, InViewHookResponse> = {
    about: useInView({ threshold: 0 }),
    education: useInView({ threshold: 0 }),
    experience: useInView({ threshold: 0 }),
    skills: useInView({ threshold: 0 }),
    projects: useInView({ threshold: 0 }),
    otherDetails: useInView({ threshold: 0 }),
    contact: useInView({ threshold: 0 }),
  };

  useEffect(
    () => {
      // Add logic for each section
      Object.keys(sections).forEach((sectionKey) => {
        const { inView, entry } = sections[sectionKey];

        if (inView) {
          entry?.target.classList.add("show");
        } else {
          entry?.target.classList.remove("show");
        }
      });
    },
    Object.values(sections).map((section) => section.inView)
  );

  return (
    <div className={`${styles.navbarColor}`}>
      <div
        className={` left-navbar lg:fixed lg:top-0 lg:overflow-auto lg:min-w-[20%] lg:w-[20%] ${styles.navbarColor} h-full `}
      >
        <Navbar />
        <div className="hidden lg:block">
          <NavbarList />
        </div>
      </div>
      <div className="lg:absolute lg:right-0 lg:top-0 lg:w-[80%]">
        <Suspense fallback={<CircularProgress sx={{ marginTop: "10rem" }} />}>
          <Home />
          <About val={sections.about.ref} />
          <Education val={sections.education.ref} />
          <Experience val={sections.experience.ref} />
          <Skills val={sections.skills.ref} />
          <Projects val={sections.projects.ref} />
          <OtherDetails val={sections.otherDetails.ref} />
          <Contact val={sections.contact.ref} />
        </Suspense>
        <Footer />
      </div>
    </div>
  );
};

export default MainPage;
