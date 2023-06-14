import React from "react";
import { useState, useEffect } from "react";

import { Link } from "react-router-dom";

const Navbar = () => {
  const navItems = [
    { id: 1, title: "Home", link: "/" },
    { id: 2, title: "About", link: "/about" },
    { id: 3, title: "Services", link: "/services" },
    { id: 4, title: "Contact", link: "/contact" },
  ];

  const [show, setShow] = useState(false);
  const [showNav, setShowNav] = useState(false);

  const openModal = () => {
    setShow(true);
    // Additional logic for displaying the modal
  };

  const closeModal = () => {
    setShow(false);
    // Additional logic for closing the modal
  };

  return (
    <nav className="bg-white py-2">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center w-full justify-between">
            <div className="flex-shrink-0 flex gap-x-4 items-center">
              <div className="text-white flex">
                <img
                  src="https://i.postimg.cc/SN5XpHXn/MINDCH-45-01-1.png"
                  className="w-[150px] h-auto"
                  alt=""
                  srcSet=""
                />
              </div>
              <div className="rounded-full px-2 py-1 text-[13px] text-white font-bold bg-colorprimary">
                Validators
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navItems.map((item) => (
                  <Link
                    key={item.id}
                    href={item.link}
                    className="text-black !no-underline hover:bg-colorprimary hover:!text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    {item.title}
                  </Link>
                ))}
                <div
                  className="py-[8px] px-[20px] text-white rounded-md duration-300 hover:bg-black hover:text bg-colorprimary font-bold cursor-pointer"
                  onClick={openModal}
                >
                  Connect Wallet
                </div>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              type="button"
              className={`${
                show ? "!text-colorprimary" : "!text-gray-400"
              } inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-colorprimary focus:ring-white`}
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={() => setShowNav((prev) => !prev)}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className="hidden h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {showNav && (
        <div className="md:hidden " id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={item.link}
                className="text-black !no-underline  hover:bg-colorprimary hover:!text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                {item.title}
              </Link>
            ))}
            <div
              className="py-[8px] px-[20px] text-white rounded-md duration-300 hover:bg-black hover:text bg-colorprimary font-bold cursor-pointer"
              onClick={openModal}
            >
              Connect Wallet
            </div>
          </div>
        </div>
      )}
      {show && (
        <div className="fixed inset-0 flex items-center justify-center z-10 ">
          <div
            onClick={closeModal}
            className="bg-colorprimary opacity-75 fixed inset-0"
          ></div>
          <div className="relative bg-white rounded-lg p-8 shining-box shadow-lg">
            {/* Content for the modal */}
            <h2 className="text-lg font-semibold mb-4">Modal Title</h2>
            <p className="text-gray-700 mb-4">
              This is the content of the modal. You can add any React components
              or custom styles here.
            </p>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
