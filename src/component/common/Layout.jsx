import React from "react";
import ProtoTypes from "prop-types";
import Header from "../Header";
import Footer from "../homeOne/Footer";

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
