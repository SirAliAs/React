import React from "react";
import { FaComment } from "react-icons/fa";
import { TiArrowForward } from "react-icons/ti";
import { AiFillInfoCircle } from "react-icons/ai";
import { MdCreateNewFolder } from "react-icons/md";
import { AiFillHeart } from "react-icons/ai";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

export default function Sidebar() {
  return (
    <div className="sticky">
      <div className="absolute top-0 right-0 mr-8 ">
        <img
          src="./ProjectPictures/userImg.jpg"
          alt="UserImg"
          className=" w-11 h-11 rounded-full mt-16 cursor-pointer"
        />
        <div className="relative ">
          <FaComment className=" border h-10 w-10 rounded-md mt-3 p-2 relative cursor-pointer" />
          <span className=" rounded-full border absolute -top-2 -right-2 h-5 w-5 text-center font-semibold text-xs text-gray-500 bg-white">
            20
          </span>
        </div>
        <TiArrowForward className=" cursor-pointer border h-10 w-10 rounded-md mt-3 p-2" />
        <AiFillInfoCircle className="border h-10 w-10 rounded-md mt-3 p-2 cursor-pointer" />
        <MdCreateNewFolder className="border h-10 w-10 rounded-md mt-3 p-2 cursor-pointer" />
        <AiFillHeart className="border h-10 w-10 rounded-md mt-3 p-2 cursor-pointer"></AiFillHeart>
      </div>
    </div>
  );
}
