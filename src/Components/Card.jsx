import React from "react";

export default function Card({ image, heading, bodyText }) {
  return (
    <div className="flex flex-col rounded-2xl w-[400px] bg-[#f2f2f2] pt-3 shadow-xl pb-0 ">
      <figure className="flex justify-center mx-[20px] items-center rounded-2xl">
        <img
          src={image}
          alt="Card Preview"
          className="rounded-2xl w-[400px] h-[250px] object-cover ojbect-center"
        />
      </figure>
      <div className="flex flex-col p-8">
        <div className="text-4xl font-bold text-[#374151] pb-6">
          {heading}
        </div>
        <div className="text-xl text-[#374151] ">
          {bodyText}
        </div>
      </div>
    </div>
  );
}
