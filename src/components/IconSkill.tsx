import React from "react";
import { ICONS } from "../constants";
const IconSkill = () => {
  return ICONS?.map((item, index) => (
    <div
      key={index}
      className=" translate-on-hover cursor-pointer rotation-parent hover:animate-spin hover:duration-200"
    >
      {item.icon && (
        <item.icon
          key={index}
          className="shine-with-rotation p-2 rounded-2xl m-[10px] text-6xl sm:3xl"
        />
      )}
    </div>
  ));
};

export default IconSkill;
