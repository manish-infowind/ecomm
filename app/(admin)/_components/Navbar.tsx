import Logo from "@/components/Logo";
import React from "react";
import CreateButton from "./create-button";
import MobileSidebar from "./mobile-sidebar";
import Sidebar from "./Sidebar";

// Mock user button component
const MockUserButton = () => (
  <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
    <span className="text-sm font-semibold">U</span>
  </div>
);

const Navbar = () => {
  return (
    <nav className="z-50 fixed bg-neutral-800 w-full h-14 flex items-center justify-between px-4 border-b border-b-gray-600">
      <div className="flex items-center gap-x-2">
        <Logo />
        <MobileSidebar>
          <Sidebar />
        </MobileSidebar>
        <p className="text-white max-sm:hidden">ADMIN PANEL</p>
      </div>
      <div className="flex items-center gap-x-4">
        <CreateButton />
        <MockUserButton />
      </div>
    </nav>
  );
};

export default Navbar;