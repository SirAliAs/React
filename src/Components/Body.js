import React from "react";
import { AiFillStar } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

export default function Body() {
  return (
    <>
      <div className="flex flex-col container place-items-center">
        <div>
          <div className=" container flex items-center">
            <div className="mt-16 flex">
              <img
                src="./ProjectPictures/userImg.jpg"
                alt="UserImg"
                className=" w-14 h-14 rounded-full mr-3"
              />
              <div className="flex-col">
                <div>
                  <span className=" font-semibold">
                    Dr+ -Emergency Ambulance Control Center
                  </span>
                </div>
                <span className="flex">
                  <span className=" cursor-pointer">Vicki P.</span>{" "}
                  <span className=" mx-[4px] text-gray-400"> for</span>
                  <span className=" cursor-pointer flex items-center">
                    RonDesignLab{" "}
                    <AiFillStar className=" text-yellow-400 cursor-pointer mr-2" />
                  </span>
                  <span className=" cursor-pointer">
                    • Follow •
                    <OverlayTrigger
                      placement="top"
                      overlay={<Tooltip>Send a message about a work apportunity</Tooltip>}
                    >
                      <span className="text-pink-500 hover:text-pink-400 ml-2">
                        Hire Us
                      </span>
                    </OverlayTrigger>
                  </span>
                </span>
              </div>
            </div>
            <div className="flex mt-16 ml-60">
              <button className=" bg-slate-200 hover:bg-slate-300 p-2 rounded-[10px] w-16 mr-3">
                Save
              </button>
              <button className="flex items-center justify-center p-2  bg-pink-500 hover:bg-pink-400 w-20 rounded-[10px] text-white">
                <AiFillHeart className="mr-1" />
                Like
              </button>
            </div>
          </div>
        </div>
        <div>
          <img
            src="./ProjectPictures/1.jpg"
            alt=""
            className="w-[1000px] h-[837px] rounded-lg mt-4"
          />
        </div>
      </div>
    </>
  );
}
