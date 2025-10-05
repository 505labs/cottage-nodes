import React from "react";
import BlogCard from "../cards/BlogCard";
import blogImg from "@/assets/img/blog/bp-1.webp";
import blogImg2 from "@/assets/img/blog/bp-2.webp";
import blogImg3 from "@/assets/img/blog/bp-3.webp";
import blogImg4 from "@/assets/img/blog/bp-4.webp";
import FilterSide from "./FilterSide";

function BlogsCom() {
  return (
    <section className="aai-blog-posts pb-120">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 col-xl-8">
            <BlogCard
              img={blogImg}
              title="Balancing Innovation and Responsibility With AI."
              desc="Artificial Intelligence (AI) is a groundbreaking field of computer science that aims to create intelligent machines capable of performing tasks that typically require human intelligence. By simulating human cognitive processes,…"
              authorCategory="Admin"
              date="13 July, 2023"
              name="AI Revolution"
            />
            <BlogCard
              img={blogImg2}
              title="Shaping the Future of Work and Society."
              desc="Artificial Intelligence (AI) is a groundbreaking field of computer science that aims to create intelligent machines capable of performing tasks that typically require human intelligence. By simulating human cognitive processes,…"
              authorCategory="Admin"
              date="13 July, 2023"
              name="AI Revolution"
            />
            <BlogCard
              img={blogImg3}
              title="Exploring Trends, Challenges, and Opportunities."
              desc="Artificial Intelligence (AI) is a groundbreaking field of computer science that aims to create intelligent machines capable of performing tasks that typically require human intelligence. By simulating human cognitive processes,…"
              authorCategory="Admin"
              date="13 July, 2023"
              name="AI Revolution"
            />
            <BlogCard
              img={blogImg4}
              title="The Evolution of Artificial Intelligence."
              desc="Artificial Intelligence (AI) is a groundbreaking field of computer science that aims to create intelligent machines capable of performing tasks that typically require human intelligence. By simulating human cognitive processes,…"
              authorCategory="Admin"
              date="13 July, 2023"
              name="AI Revolution"
            />
          </div>
          <FilterSide />
        </div>
      </div>
    </section>
  );
}

export default BlogsCom;
