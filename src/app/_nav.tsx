'use client';
import Link from 'next/link';
import { GiHamburgerMenu } from 'react-icons/gi';
const NavBar = () => {
  return (
    <div className="bg-white text-black whitespace-nowrap py-5 px-auto fixed w-full top-0 z-10">
      <div className="max-w-screen-xl mx-auto justify-between items-center flex">
        <div className="font-bold text-lg cursor-pointer font-Giants-Inline max-2xl:ml-20">
          <Link href="/">골때리는 MZ축구</Link>
        </div>

        <ul className="flex items-center text-base mr-96 max-2xl:mr-20 max-lg:mr-10">
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
        {/* <p className="flex items-center hover:text-blue-500 transition-colors duration-300 cursor-pointer">
          <GiHamburgerMenu className="mx-1" />
          전체보기
        </p> */}
      </div>
    </div>
  );
};
export default NavBar;
