import React from "react";
import ProtoTypes from "prop-types";
import Header from "@/component/Header";
import Footer from "@/component/homeOne/Footer";

function Layout({ children }) {
  return (
    <>
      <Header />
      <main className="wrapper">{children}</main>
      <Footer />
    </>
  );
}
Layout.propTypes = {
  children: ProtoTypes.node,
};
export default Layout;
