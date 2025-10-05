import React from "react";
import Link from "next/link";

function FilterSide() {
  return (
    <div className="col-lg-5 col-xl-4">
      <aside className="aai-blog-sidebar">
        {/* Search */}
        <div className="aai-sidebar-widget mb-4">
          <form action="">
            <div className="aai-sidebar-search-from">
              <input
                type="text"
                className="form-control shadow-none"
                placeholder="Search Here"
              />
              <button className="aai-sidebar-search-button">
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </div>
          </form>
        </div>
        {/* Recent Post */}
        <div className="aai-sidebar-widget mb-4">
          <h3 className="aai-sidebar-title">Recent Post</h3>
          <ul className="mt-4 aai-blog-lists d-flex flex-column gap-2">
            <li className="aai-blog-list-item">
              <Link
                href="/blog-details"
                className="d-flex align-items-center gap-3"
              >
                <i className="fa-solid fa-angle-right"></i>
                <span>Balancing Innovation and Responsibility With AI.</span>
              </Link>
            </li>
            <li className="aai-blog-list-item">
              <Link
                href="/blog-details"
                className="d-flex align-items-center gap-3"
              >
                <i className="fa-solid fa-angle-right"></i>
                <span>Shaping the Future of Work and Society.</span>
              </Link>
            </li>
            <li className="aai-blog-list-item">
              <Link
                href="/blog-details"
                className="d-flex align-items-center gap-3"
              >
                <i className="fa-solid fa-angle-right"></i>
                <span>Exploring Trends, Challenges, and Opportunities.</span>
              </Link>
            </li>
            <li className="aai-blog-list-item">
              <Link
                href="/blog-details"
                className="d-flex align-items-center gap-3"
              >
                <i className="fa-solid fa-angle-right"></i>
                <span>The Evolution of Artificial Intelligence.</span>
              </Link>
            </li>
          </ul>
        </div>
        {/* Post Category */}
        <div className="aai-sidebar-widget">
          <h3 className="aai-sidebar-title">Category</h3>
          <ul className="mt-4 aai-blog-lists d-flex flex-column gap-3">
            <li className="aai-blog-list-item">
              <Link href="#" className="d-flex align-items-center gap-3">
                <i className="fa-solid fa-angle-right"></i>
                <span>AI Revolution(4)</span>
              </Link>
            </li>
            <li className="aai-blog-list-item">
              <Link href="#" className="d-flex align-items-center gap-3">
                <i className="fa-solid fa-angle-right"></i>
                <span>New AI(2)</span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
}

export default FilterSide;
