import React, { useState } from "react";
import Profile from "../Profile";

const MobileNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "features", label: "Features" },
    { id: "portfolio", label: "Portfolio" },
    { id: "resume", label: "Resume" },
    { id: "clients", label: "Clients" },
    { id: "blogs", label: "Blogs" },
    { id: "contacts", label: "Contact" },
  ];

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <div className="md:hidden">
      <button
        className="block p-2 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        )}
      </button>

      {isOpen && (
        <ul className="absolute top-0 left-0 w-96 bg-white h-screen shadow-md p-4 flex flex-col items-center space-y-4">
          <Profile />

          {navItems.map(({ id, label }) => (
            <li key={id} className="w-full text-center">
              <button
                className="w-full bg-amber-700 py-2 text-lg uppercase hover:text-blue-500 transition"
                onClick={() => scrollToSection(id)}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MobileNavigation;
