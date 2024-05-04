const CareerSection = () => {
  // gsap.from('#title', { y: -500, duration: 0.7 });
  return (
    <div className="w-screen mt-16 h-120vh landscape:h-200vh max-lg:h-180vh max-sm:h-300vh">
      <div className="w-full h-full bg-white">
        <div className="w-full h-96 bg-career-bg bg-center bg-cover flex items-center justify-center">
          <div className="text-white flex flex-col items-center mt-12">
            <h2 id="title" className="text-6xl py-6 font-Giants-Inline">
              Career
            </h2>
            <p className="font-semibold">경력</p>
          </div>
        </div>
        <div
          className="max-w-screen-xl bg-white relative bottom-20  left-80 flex flex-col max-2xl:items-center max-2xl:mx-auto max-2xl:left-0 "
          style={{ height: '65vh' }}
        >
          <div className="flex flex-col items-center mt-20">
            <p>골때리는 MZ축구 - 경력</p>
            <h2 className="text-3xl mt-2 font-MaruBuri max-2xl:text-5xl max-sm:text-3xl">
              경력 상황
            </h2>
          </div>
          <div className="w-full mt-12  border border-solid border-zinc-300 border-t-0 max-2xl:w-5/6"></div>
          <div className="w-full flex mt-32 justify-center max-lg:flex max-lg:flex-col max-lg:items-center max-sm:mt-10">
            <div
              className="bg-player bg-cover bg-center mx-20 "
              style={{ width: '340px', height: '600px' }}
            />
            <div className="max-2xl:mx-20 max-2xl:text-center ">
              <div className="flex flex-col my-20 text-zinc-600">
                <p className="text-black font-bold max-2xl:text-2xl">
                  FC서울 이성운
                </p>
                <p>나이 : 1998년생</p>
                <p>출신학교 : 대신고</p>
              </div>
              <div>
                <h2 className="mt-2 font-bold text-zinc-600 max-2xl:text-2xl">
                  활동 경력
                </h2>
                <p>fc서울 유스 12,15</p>
                <p>tnt fc</p>
                <p>대신고</p>
                <p>엘리트선수 레슨</p>
                <p>최우수 선수상</p>
                <p>리그 우승</p>
                <p>각종 대회 3위</p>
                <p>유소년 생활체육 코칭</p>
                <p>스포츠재활학과 졸업</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5 mt-20 text-sm text-neutral-600  justify-center items-center max-2xl:text-lg max-2xl:text-center max-2xl:mx-28 max-sm:mx-4 max-sm:text-base">
            <p>
              제 레슨은 다른 레슨과는 좀 다르게 수강생과 많은 소통을 하면서 그냥
              정해진 프로그램만 하는 것이 아닌 작은 것 하나하나 편하게,재밌게
              배우는 시간을 가지려고 하고 있습니다.
            </p>
            <p>
              훈련 방식으로는 이 수강생이 필요한 것이 무엇인지 잘하는게 무엇인지
              테스트를 통해서 훈련 방식을 수강생마다 다르게 진행하는 식으로
              훈련하고 있습니다 <br />
            </p>
            <p>
              그리고 저는 초,중,고,대 모두 선발을 뛰고 있습니다 또 한 전국
              유소년 대회에서 개인상과 성적을 냈습니다 그러니 믿고 맡겨주세요!
              친근하게 또 재밌게 가르치겠습니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CareerSection;
