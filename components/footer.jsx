"use client";
import React from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Footer() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div
      data-aos="fade-up"
      className="relative bg-gradient-to-br from-cyan-400 via-blue-500 to-cyan-400 animate-gradient text-gray-100 py-10 mt-12 shadow-2xl rounded-t-[3rem]"
    >
      {/* Blurred Curved Top */}
      <div className="absolute -top-10 left-0 w-full h-10 bg-gradient-to-b from-transparent via-blue-900/50 to-blue-900 rounded-t-[3rem] blur-2xl"></div>

      <div className="relative max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Left Section */}
        <div data-aos="fade-right" className="mb-6 md:mb-0 text-center md:text-left">
          <h2 className="text-2xl font-extrabold tracking-tight text-white mb-2">
            PocketTrack
          </h2>
          <p className="text-base text-blue-100 mb-2">
            Your trusted finance platform for tracking expenses, budgeting, and financial growth.
          </p>
          <p className="text-xs text-blue-300">
            &copy; {new Date().getFullYear()} PocketTrack. All rights reserved.
          </p>
        </div>

        {/* Right Section */}
        <div data-aos="fade-left" className="text-center md:text-left">
          <h3 className="font-semibold text-lg mb-3 text-blue-200">
            Contact Developers
          </h3>
          <ul className="space-y-2">
            <li>
              <a
                href="mailto:dev1@pockettrack.com"
                className="hover:text-blue-400 transition-colors duration-200"
              >
                dev1@pockettrack.com
              </a>
            </li>
            <li>
              <a
                href="mailto:dev2@pockettrack.com"
                className="hover:text-blue-400 transition-colors duration-200"
              >
                dev2@pockettrack.com
              </a>
            </li>
            <li>
              <a
                href="https://github.com/pockettrack"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors duration-200 flex items-center gap-2 justify-center md:justify-start"
              >
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="inline-block"
                >
                  <path d="M10 .5A9.5 9.5 0 0 0 .5 10c0 4.2 2.7 7.7 6.4 8.9.5.1.7-.2.7-.5v-1.7c-2.6.6-3.1-1.2-3.1-1.2-.4-1-1-1.3-1-1.3-.8-.6.1-.6.1-.6.9.1 1.4.9 1.4.9.8 1.4 2.1 1 2.6.8.1-.6.3-1 .6-1.2-2.1-.2-4.3-1-4.3-4.5 0-1 .4-1.8 1-2.5-.1-.2-.4-1.2.1-2.5 0 0 .8-.3 2.6 1a9 9 0 0 1 4.8 0c1.8-1.3 2.6-1 2.6-1 .5 1.3.2 2.3.1 2.5.6.7 1 1.5 1 2.5 0 3.5-2.2 4.3-4.3 4.5.3.3.6.8.6 1.7v2.5c0 .3.2.6.7.5A9.5 9.5 0 0 0 19.5 10 9.5 9.5 0 0 0 10 .5z" />
                </svg>
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
