import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Search, Bell, ChevronDown } from "lucide-react";
import logo from "../assets/netflix-wordmark.svg";
import profilePic from "../assets/profiles-icon.svg";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 md:px-12 py-4 transition-colors duration-500 ${
        scrolled ? "bg-black" : "bg-linear-to-b from-black/80 to-transparent"
      }`}
    >
      {/* Left: logo + nav links */}
      <div className="flex items-center gap-8">
        <Link to="/">
          <img src={logo} alt="Logo" className="h-6 md:h-7 w-auto" />
        </Link>
      </div>

      {/* Right: search, notifications, profile */}
      <div className="flex items-center gap-4">
        <div className="flex items-center">
          <button
            className="text-white p-1"
            aria-label="Search"
          >
            <Search size={20} />
          </button>
        </div>

        <button className="text-white hidden sm:block" aria-label="Notifications">
          <Bell size={20} />
        </button>

        <div className="relative group">
          <button className="flex items-center gap-1">
            <img
              src={profilePic}
              alt="Profile"
              className="h-8 w-8 rounded object-cover"
            />
            <ChevronDown
              size={16}
              className="text-white transition-transform group-hover:rotate-180"
            />
          </button>

          {/* Profile dropdown */}
          <div className="absolute right-0 top-full mt-2 w-44 bg-black/90 border border-gray-800 rounded-sm py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
            <Link to="/" className="block px-4 py-2 text-sm text-gray-200 hover:underline">
              Manage Profiles
            </Link>
            <Link to="/" className="block px-4 py-2 text-sm text-gray-200 hover:underline">
              Account
            </Link>
            <Link to="/" className="block px-4 py-2 text-sm text-gray-200 hover:underline">
              Help Center
            </Link>
            <hr className="border-gray-700 my-1" />
            <button className="w-full text-left px-4 py-2 text-sm text-gray-200 hover:underline">
              Sign out of Netflix
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}