"use client";

import React from "react";
import Sidebar from "../Sidebar/Sidebar";

export const Layout = ({ children }) => {
  return (
    <div className="bg-white flex justify-start min-h-screen">
      <div className="w-[250px] h-full">
        <Sidebar />
      </div>
      {children}
    </div>
  );
};
