import React from "react";
import { MdHome } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { GiHamburgerMenu } from "react-icons/gi";

function Sidebar() {
  return (
    <div className="flex flex-col w-18 gap-8 mt-4">
      <div className="flex justify-center">
        <button className="hover:bg-neutral-500 p-2 rounded-3xl">
          <GiHamburgerMenu className="text-2xl" />
        </button>
      </div>
      <div className="flex flex-col items-center hover:bg-neutral-500 mx-2 p-2 rounded-lg">
        <MdHome className="text-2xl" />
        <p className="text-[12px]">Home</p>
      </div>
      <div className="flex flex-col items-center hover:bg-neutral-500 mx-2 p-2 rounded-lg">
        <SiYoutubeshorts className="text-2xl" />
        <p className="text-[12px]">Shorts</p>
      </div>
      <div className="flex flex-col items-center hover:bg-neutral-500 mx-2 p-2 rounded-lg">
        <MdSubscriptions className="text-2xl" />
        <p className="text-[9px]">Subscriptions</p>
      </div>
      <div className="flex flex-col items-center hover:bg-neutral-500 mx-2 p-2 rounded-lg">
        <CgProfile className="text-2xl" />
        <p className="text-[12px]">You</p>
      </div>
    </div>
  );
}

export default Sidebar;
