import React from "react";
import { BiSearch } from "react-icons/bi";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

export default function Header() {
  return (
    <div>
      <div className="flex justify-between mt-2 border-b p-3 ">
        <div className="top-right flex">
          <a href="https://dribbble.com/shots/20042841-Dr-Emergency-Ambulance-Control-Center">
            <img
              src="ProjectPictures/logo.png"
              alt="logo"
              className=" h-8 w-20 relative top-2 mr-2 cursor-pointer"
            />
          </a>
          <OverlayTrigger
          placement="bottom"
          overlay={<Tooltip>Hello World</Tooltip>}>
            <div className=" mr-2 p-2 text-slate-500 font-semibold cursor-pointer hover:text-black">
              Inspiration
            </div>
          </OverlayTrigger>
          <div className=" mr-2 p-2 text-slate-500 font-semibold cursor-pointer hover:text-black">
            Find Work
          </div>
          <div className=" mr-2 p-2 text-slate-500 font-semibold cursor-pointer hover:text-black">
            Learn Design
          </div>
          <div className=" mr-2 p-2 text-slate-500 font-semibold cursor-pointer hover:text-black">
            Go Pro
          </div>
          <div className=" mr-2 p-2 text-slate-500 font-semibold cursor-pointer hover:text-black">
            Hire Designers
          </div>
        </div>
        <div className="top-left flex items-center">
          <BiSearch className="text-slate-500 w-6 h-6 font mr-2 top-[2px] relative cursor-pointer" />
          <button className=" mr-2 p-2 text-slate-500 font-semibold">
            Sign in
          </button>
          <button className=" mr-2 p-2 font-semibold bg-pink-500 hover:bg-pink-400 rounded-[10px] text-white">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}
