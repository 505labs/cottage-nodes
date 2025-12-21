"use client";
import React from "react";
import ProtoTypes from "prop-types";
import { usePathname } from "next/navigation";
import Header from "@/component/Header";
import Footer from "@/component/homeOne/Footer";

function Layout({ children }) {
  const pathname = usePathname();
  const isLegalPage = pathname?.includes("/privacy-policy") || 
                      pathname?.includes("/disclaimer") || 
                      pathname?.includes("/terms-and-conditions");

  return (
    <>
      <Header />
      <main className="wrapper" style={isLegalPage ? { 
        position: "relative",
        zIndex: 1,
        paddingBottom: 0,
        marginBottom: 0
      } : {}}>
        {children}
      </main>
      {!isLegalPage && <Footer />}
    </>
  );
}
Layout.propTypes = {
  children: ProtoTypes.node,
};
export default Layout;
