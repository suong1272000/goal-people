const QuerySection = () => {
  return (
    <div className="w-screen h-screen mt-16">
      <div className="w-full h-full bg-white">
        <div className="w-full h-96 bg-ask-bg bg-center bg-cover flex items-center justify-center">
          <div className="text-white flex flex-col items-center mt-12">
            <h2 className="text-6xl py-6 font-Giants-Inline">Ask</h2>
            <p className="font-semibold">문의 및 신청</p>
          </div>
        </div>
        <div
          className="max-w-screen-xl bg-white relative bottom-20 left-80 flex flex-col"
          style={{ height: '65vh' }}
        >
          <div className="flex flex-col items-center mt-20">
            <p>골때리는 MZ축구</p>
            <h2 className="text-3xl mt-2 font-MaruBuri">문의 및 신청</h2>
          </div>
          <div className="w-full mt-12  border border-solid border-zinc-300 border-t-0" />
          <div className="mx-20 my-10 text-center">
            <h2 className="text-xl mb-10">
              수업에 대한 자세한 정보와 예약은 아래 연락처로 문의해주세요.
            </h2>
            <div className="flex flex-col gap-3">
              <p>
                전화번호: <br />
                감독 010-9504-8871
                <br /> 코치 010-5221-8407
              </p>
              <p>
                오픈채팅방:
                <br /> https://open.kakao.com/o/guT7Z6kg
              </p>
              <p className="mt-5">
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
