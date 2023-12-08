import React from "react";
import styles from "../styles";
import { SIDEBARLINKS, SidebarLinksType } from "../constants";
interface SidebarProps {
  toggleSidebar: () => void;
}
const Sidebar = ({ toggleSidebar }: SidebarProps) => {
  return (
    <ul className="divide-y divide-slate-200 ... w-full mt-[2rem] absolute top-[2.5rem] z-10 lg:hidden">
      {SIDEBARLINKS?.map((item: SidebarLinksType, index) => {
        const variab = "#" + item.link.slice(1, item.link.length);
        return (
          <a href={variab} key={index}>
            <li
              key={item.id}
              className={`${styles.sidebarColor} border-t border-gray-200`}
              onClick={toggleSidebar}
            >
              {item.title}
            </li>
          </a>
        );
      })}
    </ul>
  );
};

export default Sidebar;
