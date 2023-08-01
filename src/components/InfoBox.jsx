import React, { useState } from "react";
import {FcInfo} from "react-icons/fc"

const InfoBox = ({ text, info }) => {
  const [showInfo, setShowInfo] = useState(false);

  const handleHover = () => {
    setShowInfo(true);
  };

  const handleLeave = () => {
    setShowInfo(false);
  };

  return (
    <div className="relative">
      <span className=" flex items-center gap-x-1 text-gray-500 text-[14px] font-semibold" >
        {text}{" "}
        <span
          className=" cursor-pointer w-[10px] h-[10px] rounded-full  text-white"
          
        >
          {info &&
          
        <FcInfo onMouseEnter={handleHover} onMouseLeave={handleLeave}/>
          }
        </span>
      </span>
      {showInfo && (
        <div className="absolute bottom-10 left-0 w-[250px] bg-[#222] border  p-2 rounded-md shadow text-[13px] text-white">
          {info}
        </div>
      )}
    </div>
  );
};

export default InfoBox;