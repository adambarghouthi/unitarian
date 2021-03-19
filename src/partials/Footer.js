import React from "react";
import Link from "next/link";

function Footer() {
  return (
    <footer>
      <div className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Top area: Blocks */}
          <div className="grid md:grid-cols-12 gap-8 lg:gap-20 mb-8 md:mb-12">
            {/* 1st block */}
            <div className="md:col-span-4 lg:col-span-5">
              <div className="mb-2">
                {/* Logo */}
                <Link href="/">
                  <a className="h4 block text-purple-900" aria-label="Cruip">
                    Caasflow
                  </a>
                </Link>
              </div>
              <div className="text-gray-400">
                Get funding for your online business.
              </div>
            </div>
          </div>

          {/* Bottom area */}
          <div className="md:flex md:items-center md:justify-between">
            {/* Copyrights note */}
            <div className="text-gray-400 text-sm mr-4">
              &copy; 2021 Caasflow. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
