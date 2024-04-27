'use client'
import { getCategories } from "@/helpers/getCategories";
import Link from "next/link";
import React, { useState } from "react";



export const SideBar =  () => {
  const categories =  getCategories();
  console.log(categories);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prevState) => !prevState);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <>
      <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        onClick={toggleSidebar}
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        id="default-sidebar"
        className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full sm:translate-x-0"
        }`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-blue-500 ">
          <ul className="space-y-2 font-medium">
            <p className="my-9 p-3 font-bold text-white text-2xl">
              Food
              <span className=" text-blue-900">Shop</span>
            </p>
            <ul className="space-y-2 font-medium">
              {/* 
              {menuItems.map((item) => (
                <li key={item.name} className="mt-9">
                  <Link
                    href={item.href}
                    className="flex items-center p-2 text-white rounded-lg hover:bg-blue-400"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              */}
              <li className="mt-9">
                <Link
                  href={"/order"}
                  className="flex items-center p-2 text-white rounded-lg hover:bg-blue-400 bg-blue-800"
                >
                  MyOrder
                </Link>
              </li>
            </ul>
          </ul>
        </div>
      </aside>

      <div
        className={`fixed top-0 left-0 z-30 w-full h-full bg-gray-50 bg-opacity-70 dark:bg-opacity-70 transition-opacity ${
          isSidebarOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        } sm:opacity-0 sm:pointer-events-none`}
        onClick={closeSidebar}
      ></div>
    </>
  );
};

export default SideBar;
