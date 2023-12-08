import { useState } from "react";
import styles from "../styles";
import MenuIcon from "@mui/icons-material/Menu";
import Sidebar from "./Sidebar";
import BadgeIcon from "@mui/icons-material/Badge";
import CloseIcon from "@mui/icons-material/Close";
const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };
  return (
    <div
      className={` ${styles.navbarColor} text-gray-200 py-3 flex justify-around  items-center    `}
    >
      <div className="flex flex-col ">
        <a href="/">
          <div className={`${styles.flexCenter} `}>
            <BadgeIcon fontSize="large" />
            <h1 className="text-xl lg:mt-2 ml-5">
              Navbharti <br /> Moudgill
            </h1>
          </div>
        </a>
      </div>
      <div className="block lg:hidden" onClick={toggleSidebar}>
        {showSidebar ? <CloseIcon /> : <MenuIcon />}
      </div>
      {showSidebar && <Sidebar toggleSidebar={toggleSidebar} />}
    </div>
  );
};

export default Navbar;
