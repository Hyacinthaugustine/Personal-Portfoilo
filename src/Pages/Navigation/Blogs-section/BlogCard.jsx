import { ArrowUpRight } from "lucide-react";
import React from "react";

const BlogCard = ({ BlogImage, BlogTitle, BlogCategory, BlogReadingTime }) => {
  return (
    <div className="bg-green-200 p-7 rounded-2xl group">
      <div div className="overflow-hidden rounded-xl">
        <img
          src={BlogImage}
          alt=""
          className=" group-hover:scale-105 transition-all duration-300 object-fit"
        />
      </div>
      <div className="mt-3">
        <div className="flex justify-between items-center ">
          <h3 className="uppercase tracking-wider">{BlogCategory}</h3>
          <small> {BlogReadingTime}</small>
        </div>

        <h2 className="text-2xl first-letter:uppercase">
          {BlogTitle}
          <ArrowUpRight className=" h-8 hover:inline hidden  group-hover:block " />
        </h2>
      </div>
    </div>
  );
};

export default BlogCard;
