import React from "react";
import HeadingText from "../../../components/HeadingText";
import BlogCard from "./BlogCard";

const BlogsSection = () => {
  return (
    <section
      id="blogs"
      className="   md:px-8 px-4 md:py-22  border-t-2 border-gray-100 py-8"
    >
      <div className="flex flex-col justify-center items-center mb-8 ">
        <p className="uppercase text-md mb-4 tracking-widest">
          Visit my blog and keep your feedback
        </p>
        <HeadingText textForHeading="My Blog" />
      </div>

      <div className="flex gap-7 justify-between items-center">
        <BlogCard
          BlogImage="/assets/project.jpg"
          BlogTitle="title"
          BlogCategory="Category"
          BlogReadingTime={`2:50 ms`}
        />
        <BlogCard
          BlogImage="/assets/project.jpg"
          BlogTitle="title"
          BlogCategory="Category"
          BlogReadingTime={`2:50 ms`}
        />
        <BlogCard
          BlogImage="/assets/project.jpg"
          BlogTitle="title"
          BlogCategory="Category"
          BlogReadingTime={`2:50 ms`}
        />
      </div>
    </section>
  );
};

export default BlogsSection;
