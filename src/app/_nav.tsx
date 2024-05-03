'use client';
import Link from 'next/link';
import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="bg-white text-black whitespace-nowrap py-5 px-auto fixed w-full top-0 z-10">
      <div className="max-w-screen-xl mx-auto justify-between items-center flex">
        <div className="font-bold text-lg cursor-pointer font-Giants-Inline max-2xl:ml-20 max-sm:ml-5">
          <Link href="/">골때리는 MZ축구</Link>
        </div>

        <ul className="flex items-center text-base mr-96 max-2xl:mr-20 max-lg:mr-10 max-sm:hidden">
          <li className="mx-8 hover:text-blue-500 transition-colors duration-300 cursor-pointer">
            <Link href="/">홈</Link>
          </li>
          <li className="mx-8 hover:text-blue-500 transition-colors duration-300 cursor-pointer">
            <Link href="/education"> 교육비/교육시간</Link>
          </li>
          <li className="mx-8 hover:text-blue-500 transition-colors duration-300 cursor-pointer">
            <Link href="/career">경력</Link>
          </li>
          <li className="mx-8 hover:text-blue-500 transition-colors duration-300 cursor-pointer">
            <Link href="/query">문의 및 신청</Link>
          </li>
        </ul>
        <div
          className={`bg-white w-screen h-screen z-20 absolute top-16 transition-all duration-500 ${
            isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <ul className="text-2xl font-WavvePADO mx-8 my-20 flex flex-col gap-10 items-end">
            <li
              onClick={closeMenu}
              className="hover:text-blue-500 transition-colors duration-300 cursor-pointer"
            >
              <Link href="/">홈</Link>
            </li>
            <li
              onClick={closeMenu}
              className="hover:text-blue-500 transition-colors duration-300 cursor-pointer"
            >
              <Link href="/education"> 교육비/교육시간</Link>
            </li>
            <li
              onClick={closeMenu}
              className="hover:text-blue-500 transition-colors duration-300 cursor-pointer"
            >
              <Link href="/career">경력</Link>
            </li>
            <li
              onClick={closeMenu}
              className="hover:text-blue-500 transition-colors duration-300 cursor-pointer"
            >
              <Link href="/query">문의 및 신청</Link>
            </li>
          </ul>
        </div>

        <p
          className="hidden flex items-center hover:text-blue-500 transition-colors duration-300 cursor-pointer max-sm:mr-4 max-sm:block"
          onClick={toggleMenu}
        >
          <GiHamburgerMenu className="mx-1 text-2xl" />
        </p>
      </div>
    </div>
  );
};
export default NavBar;
