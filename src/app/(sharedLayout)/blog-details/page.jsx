import React from "react";
import BreadcrumbV2 from "@/component/common/BreadcrumbV2";
import BlogDetailsCom from "@/component/blog-details";

function BlogDetails() {
  return (
    <>
      <BreadcrumbV2
        title="Balancing Innovation and Responsibility With AI."
        name="AI Revolution"
        authorCategory="Admin"
        date="13 July, 2023"
      />
      <BlogDetailsCom />
    </>
  );
}

export default BlogDetails;
