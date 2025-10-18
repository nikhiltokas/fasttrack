"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import AnimatedButton from "../ui/Button-Animated";
import { cn } from "@/common/lib/cn";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      setServicesOpen(false);
      setResourcesOpen(false);
    };

    if (servicesOpen || resourcesOpen) {
      document.addEventListener("click", handleClickOutside);
      return () => document.removeEventListener("click", handleClickOutside);
    }
  }, [servicesOpen, resourcesOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen]);

  const handleDropdownClick = (
    e: React.MouseEvent,
    dropdown: "services" | "resources"
  ) => {
    e.stopPropagation();
    if (dropdown === "services") {
      setServicesOpen(!servicesOpen);
      setResourcesOpen(false);
    } else {
      setResourcesOpen(!resourcesOpen);
      setServicesOpen(false);
    }
  };

  return (
    <>
      {/* Navbar */}
      <nav
        className={cn(
          "fixed left-0 right-0 z-50 px-4 transition-all duration-300",
          scrolled ? "top-2" : "top-6"
        )}
      >
        <div
          className={cn(
            "max-w-7xl mx-auto rounded-xl px-4 py-1.5 flex justify-between items-center shadow-lg transition-colors duration-300",
            scrolled ? "bg-white" : "bg-white/10 backdrop-blur-md"
          )}
        >
          {/* Logo */}
          <Link
            href="/"
            className={cn(
              "text-xl font-bold hover:opacity-80 transition-opacity",
              scrolled ? "text-gray-900" : "text-white"
            )}
          >
            Fast Track
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-0.5">
            <Link
              href="/"
              className={cn(
                "px-4 py-2 text-sm font-medium rounded-lg transition-colors",
                scrolled
                  ? "text-gray-700 hover:bg-gray-100"
                  : "text-white hover:bg-white/10"
              )}
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={(e) => handleDropdownClick(e, "services")}
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-lg transition-colors flex items-center gap-1.5",
                  scrolled
                    ? "text-gray-700 hover:bg-gray-100"
                    : "text-white hover:bg-white/10"
                )}
              >
                Services
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    servicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {servicesOpen && (
                <div className="absolute top-full mt-2 left-0 bg-white rounded-xl shadow-2xl py-2 min-w-[200px] animate-in fade-in slide-in-from-top-2 duration-200">
                  <Link
                    href="/air-cargo"
                    className="block px-5 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    Air cargo
                  </Link>
                  <Link
                    href="/ocean-cargo"
                    className="block px-5 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    Ocean cargo
                  </Link>
                  <Link
                    href="/container-cargo"
                    className="block px-5 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    Container cargo
                  </Link>
                  <Link
                    href="/rail-transport"
                    className="block px-5 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    Rail transport
                  </Link>
                  <Link
                    href="/last-mile-delivery"
                    className="block px-5 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    Last mile delivery
                  </Link>
                </div>
              )}
            </div>

            {/* Resources Dropdown */}
            <div className="relative">
              <button
                onClick={(e) => handleDropdownClick(e, "resources")}
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-lg transition-colors flex items-center gap-1.5",
                  scrolled
                    ? "text-gray-700 hover:bg-gray-100"
                    : "text-white hover:bg-white/10"
                )}
              >
                Resources
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    resourcesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {resourcesOpen && (
                <div className="absolute top-full mt-2 left-0 bg-white rounded-xl shadow-2xl py-2 min-w-[200px] animate-in fade-in slide-in-from-top-2 duration-200">
                  <Link
                    href="/login"
                    className="block px-5 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    Login
                  </Link>
                  <Link
                    href="/signup"
                    className="block px-5 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    Sign Up
                  </Link>
                  <Link
                    href="/schedules"
                    className="block px-5 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    Schedules
                  </Link>
                  <Link
                    href="/tracking"
                    className="block px-5 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    Tracking
                  </Link>
                  <Link
                    href="/contact"
                    className="block px-5 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    Contact
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/about"
              className={cn(
                "px-4 py-2 text-sm font-medium rounded-lg transition-colors",
                scrolled
                  ? "text-gray-700 hover:bg-gray-100"
                  : "text-white hover:bg-white/10"
              )}
            >
              About
            </Link>

            <Link
              href="/career"
              className={cn(
                "px-4 py-2 text-sm font-medium rounded-lg transition-colors",
                scrolled
                  ? "text-gray-700 hover:bg-gray-100"
                  : "text-white hover:bg-white/10"
              )}
            >
              Career
            </Link>
          </div>

          {/* Right Side - Button & Menu Toggle */}
          <div className="flex items-center gap-3">
            {/* Get Started Button */}
            <AnimatedButton href="/signup" variant="primary">
              Call Us (463) 283-2466
            </AnimatedButton>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={cn(
                "lg:hidden w-6 h-6 flex items-center justify-center",
                scrolled ? "text-gray-900" : "text-white"
              )}
              aria-label="Toggle menu"
            >
              {!isMenuOpen ? (
                <Menu className="w-6 h-6" />
              ) : (
                <X className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsMenuOpen(false)}
        >
          <div
            className="absolute top-20 left-6 right-6 bg-white rounded-2xl shadow-2xl p-6 animate-in slide-in-from-top duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col gap-2">
              <Link
                href="/"
                className="px-4 py-2.5 text-gray-900 text-sm font-medium hover:bg-gray-50 rounded-lg transition-colors"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="px-4 py-2.5 text-gray-900 text-sm font-medium hover:bg-gray-50 rounded-lg transition-colors"
              >
                About
              </Link>
              <Link
                href="/career"
                className="px-4 py-2.5 text-gray-900 text-sm font-medium hover:bg-gray-50 rounded-lg transition-colors"
              >
                Career
              </Link>

              <div className="border-t border-gray-200 my-2" />

              <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase">
                Services
              </div>
              <Link
                href="/air-cargo"
                className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
              >
                Air cargo
              </Link>
              <Link
                href="/ocean-cargo"
                className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
              >
                Ocean cargo
              </Link>
              <Link
                href="/container-cargo"
                className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
              >
                Container cargo
              </Link>

              <div className="border-t border-gray-200 my-2" />

              <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase">
                Resources
              </div>
              <Link
                href="/login"
                className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
              >
                Login
              </Link>
              <Link
                href="/signup"
                className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
              >
                Sign Up
              </Link>
              <Link
                href="/contact"
                className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
