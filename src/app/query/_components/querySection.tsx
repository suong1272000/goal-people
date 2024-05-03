const QuerySection = () => {
  return (
    <div className="w-screen h-full mt-16 max-2xl:h-full landscape:h-150vh max-sm:h-150vh">
      <div className="w-full h-full bg-white">
        <div className="w-full h-96 bg-ask-bg bg-center bg-cover flex items-center justify-center">
          <div className="text-white flex flex-col items-center mt-12">
            <h2 id="title" className="text-6xl py-6 font-Giants-Inline">
              Ask
            </h2>
            <p className="font-semibold">문의 및 신청</p>
          </div>
        </div>
        <div
          className="max-w-screen-xl bg-white relative bottom-20 left-80 flex flex-col max-2xl:items-center max-2xl:mx-auto max-2xl:left-0"
          style={{ height: '65vh' }}
        >
          <div className="flex flex-col items-center mt-20">
            <p>골때리는 MZ축구</p>
            <h2 className="text-3xl mt-2 font-MaruBuri max-2xl:text-5xl max-sm:text-3xl">
              문의 및 신청
            </h2>
          </div>
          <div className="w-full mt-12  border border-solid border-zinc-300 border-t-0 max-2xl:w-5/6" />
          <div className="mx-20 my-10 text-center">
            <h2 className="text-xl mb-10 lg:text-2xl max-2xl:mb-20   landscape:max-lg:mb-0 max-sm:text-base max-sm:mb-0">
              수업에 대한 자세한 정보와 예약은 아래 연락처로 문의해주세요.
            </h2>
            <div className="flex flex-col gap-3 max-2xl:text-2xl max-2xl:gap-10 max-sm:text-lg">
              <p>
                전화번호: <br />
                감독 010-9504-8871
                <br /> 코치 010-5221-8407
              </p>
              <p>
                오픈채팅방:
                <br /> https://open.kakao.com/o/guT7Z6kg
              </p>
              <p className="mt-5 font-semibold">
                지금 참여하고, 함께 성장해나가는 축구 레슨 수업에 함께해보세요!
                🚀
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default QuerySection;
