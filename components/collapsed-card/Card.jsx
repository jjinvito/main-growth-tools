import React from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function Card({
  data,
  classNames,
  descriptionWidth,
  singleToolpage,
}) {
  return (
    <Link
      href={"/tool/" + data.id}
      className="hover:opacity-90 transition col-span-12 md:col-span-6 lg:col-span-4 "
    >
      <div
        className={cn(
          "inline-flex gap-[15px] border border-[#EAEAEA] rounded-2xl p-2 shadow-lg h-[155px] clash-display",
          singleToolpage
            ? " w-[620px]"
            : "w-[360px] xl:w-[360px] 2xl:w-[710px] xl:max-[1410px]:w-[495px] max-[1175px]:w-[495px] max-[1061px]:w-[400px] max-[872px]:w-[360px] max-[791px]:w-[515px] max-[555px]:w-[360px]",
          singleToolpage && !data?.deals?.length && "h-[90px]",
          classNames
        )}
      >
        <div className=" w-[48px] h-[48px] p-2 border border-[#F1F1F1] rounded-lg shadow-md">
          <Image
            src={data?.logoUrl}
            width={32}
            height={32}
            alt="growth tools logo"
          />
        </div>
        <div className="flex flex-col gap-1 justify-between">
          <div>
            <h1 className="font-semibold text-base">{data?.name}</h1>
            <p
              className={cn(
                " text-blance w-[273px] text-[14px] text-[#494949] satoshi-variable font-medium",
                descriptionWidth
              )}
            >
              {data?.shortDescription}
            </p>
          </div>
          {data?.deals?.length > 0 && (
            <div className={cn("inline-flex gap-3 items-center py-2")}>
              <div className=" w-[38px] h-[34px] flex justify-center items-center  border border-[#F1F1F1] rounded-lg">
                <Image src="/trendingIcon.png" width={17} height={13} />
              </div>
              <Image src="/deal.png" width={35} height={20} />
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}
