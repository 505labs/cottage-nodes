"use client";
import React, { useEffect, useState } from "react";
import AOS from "aos";

function AosInit() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      AOS.init({
        duration: 1000,
        once: false,
        mirror: false,
      });
    }
  }, [mounted]);

  return <></>;
}

export default AosInit;
