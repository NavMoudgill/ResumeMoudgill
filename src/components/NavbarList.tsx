import { useEffect, useState } from "react";
import { SIDEBARLINKS, SidebarLinksType } from "../constants";
import styles from "../styles";

const NavbarList = () => {
  const [activeLink, setActiveLink] = useState("#"); // Initial active link state

  useEffect(() => {
    // Update active link when the hash changes
    const handleHashChange = () => {
      setActiveLink(window.location.hash);
    };

    // Attach event listener for hash changes
    window.addEventListener("hashchange", handleHashChange);

    // Initial check for active link on mount
    setActiveLink(window.location.hash);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);
  return (
    <div className="text-gray-200">
      <ul className="divide-y divide-slate-600 ...">
        {SIDEBARLINKS?.map((item: SidebarLinksType) => {
          const variab = "#" + item.link.slice(1, item.link.length);
          const isActive = activeLink === variab;
          return (
            <li
              key={item.id}
              className={` ${isActive ? "text-blue-300" : ""}
              } py-[1.3rem]   hover:text-blue-300 `}
            >
              <a
                className="mt-3 text-xl transition-all delay-300 "
                href={variab}
              >
                <div
                  className={`${styles.flexCenter} flex-col  py-[1rem] px-[1rem]`}
                >
                  {item.icon && <item.icon className="text-3xl" />}
                  <h3 className="text-center">{item.title}</h3>
                </div>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default NavbarList;
