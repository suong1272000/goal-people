import Link from 'next/link';
const SecondSection = () => {
  return (
    <div
      className="w-full py-24 bg-stone-300 text-black flex justify-center gap-x-6 max-2xl:px-10 max-sm:hidden"
      style={{ height: '400px' }}
    >
      <div className="w-1/5 pt-6 bg-soccer-3 bg-center bg-cover shadow-xl bg-blend-overlay cursor-pointer max-2xl:w-1/3">
        <Link href="/education">
          <p className="bg-zinc-800 text-white font-bold p-2 w-20 text-center ml-8 z-10 relative">
            취미반
          </p>
          <p
            className="text-white font-bold text-xl text-center font-WavvePADO font-light flex justify-center  bg-black bg-opacity-50  flex relative bottom-16 items-center h-4 w-full z-0"
            style={{ height: '208px' }}
          >
            1회기준 3.5만원
          </p>
        </Link>
      </div>
      <div className="w-1/5 pt-6 pb-36 bg-soccer-2 bg-center bg-cover shadow-xl cursor-pointer max-2xl:w-1/3">
        <Link href="/education">
          <p className="bg-zinc-800 text-white font-bold p-2 w-20 text-center ml-8 z-10 relative">
            성인반
          </p>
          <p
            className="text-white font-bold text-xl text-center font-WavvePADO font-light flex justify-center  bg-black bg-opacity-50  flex relative bottom-16 items-center h-4 w-full z-0"
            style={{ height: '208px' }}
          >
            1회기준 3.5만원
          </p>
        </Link>
      </div>
      <div className="w-1/5 pt-6 pb-36 bg-soccer-1 bg-center bg-cover shadow-xl cursor-pointer max-2xl:w-1/3">
        <Link href="/education">
          <p className="bg-zinc-800 text-white font-bold p-2 w-20 text-center ml-8 z-10 relative">
            그룹반
          </p>
          <div
            className="text-white font-bold text-xl text-center font-WavvePADO font-light flex justify-center  bg-black bg-opacity-50  flex relative bottom-16 items-center h-4 w-full z-0 flex-col"
            style={{ height: '208px' }}
          >
            <p className="max-lg:mt-5">4명~</p>
            <p>1회 기준 2만원</p>
            <p>단, 6명 이상 1만원 할인</p>
          </div>
        </Link>
      </div>
    </div>
  );
};
export default SecondSection;
