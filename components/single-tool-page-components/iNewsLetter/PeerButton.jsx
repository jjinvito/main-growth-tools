import Image from "next/image";
import React from "react";

export default function () {
  return (
    <div className=" bg-gradient-to-r from-blueStart to-blueEnd to-99% inline-flex items-center  p-2 rounded-lg px-2 gap-2 sm:w-[141px] w-[120px] text-sm h-[34px]">
      {/* <PiMedalBold size={13} className=" text-white" /> */}
      <Image
        src="/peerReviewedWhite.png"
        width={20}
        height={20}
        alt="Peer reviewed logo"
      />
      <h1 className=" text-white sm:text-[13px] text-[9px]">Peer Reviewed</h1>
    </div>
  );
}
