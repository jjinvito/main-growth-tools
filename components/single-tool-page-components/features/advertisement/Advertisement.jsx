import React from "react";
import Image from "next/image";
export default function Advertisement() {
  return (
    <div className=" sm:max-w-[365px] w-full  ">
      {/* <h1 className=" font-semibold text-lg">Added by:</h1> */}
      {/* <div className=" flex justify-between items-center w-full">
        <div className=" inline-flex gap-3 items-center">
          <Image
            src="/avatar.png"
            className=" w-10 h-10 rounded-3xl"
            width={26.67}
            height={21.33}
            alt="profile photo place holder"
          />
          <h2 className=" font-medium lg:text-[12px]">John Def</h2>
        </div>
        <h1 className=" font-medium text-DBlue lg:text-[12px]">View Profile</h1>
      </div> */}
      {/* <div className=" flex  flex-col gap-2 border-2 rounded-xl w-full p-3  shadow-xl">
        <div className="flex flex-row items-center gap-1 ">
          <Image
            src="/addLogo.png"
            className=" w-10 h-10 p-2 rounded-xl"
            width={50}
            height={50}
            alt="advertisement logo"
          />
          <h1 className=" font-extrabold lg:text-[12px]">Advertisement</h1>
        </div>
        <p className=" pl-2 text-greyColorMuted">
          Lorem, ipsum dolor sit amet ctetur adipisicing elit.
        </p>
        <div className="inline-flex gap-4 items-center p-2 px-5 bg-[black] rounded-3xl cursor-pointer w-fit">
          <h3 className=" font-medium text-white">Fill out the form</h3>
        </div>
      </div> */}
      {/* <!-- <ad space  --> */}
      <div className="flex justify-center items-center w-full">
        <div className="w-full h-[150px] bg-light-100 dark:bg-dark-500 rounded-xl">
          <div className="flex justify-center items-center h-full">
            <div className="flex flex-col justify-center items-center">
              <div className="text-black dark:text-white font-medium text-[14px]">
                Ad space
              </div>
              <div className="text-light-500 font-medium text-[12px]">
                Ad space
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
