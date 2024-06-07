"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const menuItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Tracks",
    href: "/tracks",
  },
];

export const TopNavigation = () => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  const pathname = usePathname();
  useEffect(() => {
    setNav(false);
  }, [pathname]);

  return (
    <>
      {/* Desktop Navigation */}
      <ul className="gap-x-8 ml-12 hidden md:flex">
        {menuItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <li key={`navigation-${item.href}`}>
              <Link
                href={item.href}
                className={`hover:text-purple-600 dark:hover:text-purple-500 transition-colors pb-2 ${
                  isActive &&
                  "border-b-2 text-purple-600 border-purple-600/40 dark:text-purple-500 dark:border-purple-500/30"
                }`}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? "fixed md:hidden left-0 top-0 w-[60%] h-full border-r dark:border-r-gray-900 dark:bg-slate-600 border-r-gray-300 bg-slate-200 ease-in-out duration-500"
            : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]"
        }
      >
        <div className="flex justify-center items-center">
          {/* Mobile Logo */}
          <Link href={"/"} className="w-ful font-bold m-4">
            Music stream
          </Link>
        </div>

        {/* Mobile Navigation Items */}
        {menuItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <li key={`navigation-${item.href}`} className="p-4">
              <Link
                href={item.href}
                className={`hover:text-purple-600 dark:hover:text-purple-500 transition-colors pb-2 ${
                  isActive &&
                  "border-b-2  text-purple-600 border-purple-600/40 dark:text-purple-500 dark:border-purple-500/30  "
                }`}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};
