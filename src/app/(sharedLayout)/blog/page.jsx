import React from "react";
import Breadcrumb from "@/component/common/Breadcrumb";
import BlogsCom from "@/component/blog";

function Blogs() {
  return (
    <>
      <Breadcrumb title="Blogs" />
      <BlogsCom />
    </>
  );
}

export default Blogs;
