import React, { useState } from 'react';
import Image from 'next/image';

const Nav = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Function to toggle dropdown
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <div className="h-[12vh] bg-gradient-to-r from-green-400 via-teal-400 to-blue-500 shadow-md">
      <div className="w-[85%] flex items-center justify-between mx-auto h-full">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/images/logo.svg"
            alt="Logo"
            width={100}
            height={100}
            className="object-contain"
          />
        </div>

        {/* Navigation Links */}
        <div className="flex items-center gap-8 relative">
          {/* 채용 Button */}
          <div className="relative">
            <button
              className="text-white text-base font-semibold flex items-center"
              onClick={toggleDropdown}
            >
              채용 <span className="ml-1 text-xs">▼</span>
            </button>

            {/* Dropdown Menu */}
            {dropdownOpen && (
              <div className="absolute top-full mt-2 left-0 bg-white shadow-md rounded-md w-64">
                <ul className="py-2">
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    해외 개발자 원격 채용
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    외국인 원격 채용 (비개발 직군)
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    한국어 가능 외국인 채용
                  </li>
                </ul>
              </div>
            )}
          </div>

         
          <span className="text-white text-base font-semibold cursor-pointer">
            해외 개발자 활용 서비스
          </span>
        </div>

        {/* Contact us Button */}
        <button
        // href="https://github.com/raskan23"
        // target="_blank"
        // rel="noopener noreferrer"
        className="px-4 py-2 bg-white text-blue-500 font-bold text-sm rounded-full shadow-lg">
          문의하기
        </button>
      </div>
    </div>
  );
};

export default Nav;
