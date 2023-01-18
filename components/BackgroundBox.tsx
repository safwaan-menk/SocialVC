import React from "react";

type Props = {};

function BackgroundBox({}: Props) {
  return (
    <div className="relative flex justify-center items-center">
      <div className="absolute border border-[rgb(142,177,217)] rounded w-[400px] h-[100px] mt-3 motion-reduce:animate-ping" />
      {/* <div className="absolute border border-[rgb(142,177,217)] rounded w-[100px] h-[100px] motion-reduce:animate-ping mr-52" /> */}
      {/* <div className="absolute border border-[rgb(142,177,217)] rounded w-[100px] h-[100px] motion-reduce:animate-ping ml-52 " /> */}
      {/* <div className="absolute border border-[rgb(142,177,217)] rounded w-[100px] h-[100px] motion-reduce:animate-ping mt-52" /> */}

      {/* <div className="absolute border rounded  border-[rgb(97,128,237)] rounded w-[200px] h-[200px] animate-ping mt-52" />
      <div className="absolute border rounded border-[rgb(97,128,237)] rounded w-[300px] h-[300px] animate-ping mt-52" />
      <div className="absolute border rounded border-[rgb(97,128,237)] rounded w-[500px] h-[500px] animate-ping mt-52" /> */}
      {/* <div className="absolute border mt-20 border-[rgb(142,177,217)] rounded w-[275px] h-[275px] motion-reduce:animate-pulse  opacity-20" /> */}
    </div>
  );
}

export default BackgroundBox;
