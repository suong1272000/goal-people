'use client';
import { RxDividerVertical } from 'react-icons/rx';
const Footer = () => {
  return (
    <div className="bg-gray-700 py-12 px-auto text-white">
      <div className="max-w-screen-xl mx-auto max-2xl:mx-20 max-lg:mx-5 max-sm:text-center">
        <div className="font-bold text-lg my-4 max-sm:my-1">
          골때리는 MZ축구
        </div>
        <div className="flex items-center text-gray-400 font-medium text-sm max-sm:flex-col">
          <span>대표: 홍길동</span>
          <RxDividerVertical />
          <span>황금네 근린공원(풋살장)</span>
          <RxDividerVertical />
          <span>전화번호:010-9504-8871</span>
          <RxDividerVertical />
          <span>오픈채팅방:https://open.kakao.com/o/guT7Z6kg </span>
        </div>
      </div>
    </div>
  );
};
export default Footer;
