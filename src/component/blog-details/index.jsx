import React from "react";
import FilterSide from "../blog/FilterSide";
import Comment from "../forms/Comment";
import BlogsCom from "../blog";

function BlogDetailsCom() {
  return (
    <section className="aai-blog-posts pb-120">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-7 col-xl-8">
            <div className="aai-post-details-wrapper">
              <BlogsCom />
              <Comment />
            </div>
          </div>
          <FilterSide />
        </div>
      </div>
    </section>
  );
}

export default BlogDetailsCom;
