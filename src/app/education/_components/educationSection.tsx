const EducationSection = () => {
  return (
    <div className="w-screen mt-16 h-100vh">
      <div className="w-full h-full bg-white max-2xl:h-300vh  max-lg:h-340vh landscape:h-400vh">
        <div className="w-full h-96 bg-top-bg bg-center bg-cover flex items-center justify-center">
          <div className="text-white flex flex-col items-center mt-12">
            <h2 id="title" className="text-6xl py-6 font-Giants-Inline">
              Education
            </h2>
            <p className="font-semibold">교육 과정 안내</p>
          </div>
        </div>
        <div
          className="max-w-screen-xl bg-white relative bottom-20 left-80 flex flex-col max-2xl:items-center max-2xl:mx-auto max-2xl:left-0"
          style={{ height: '260vh' }}
        >
          <div className="flex flex-col items-center mt-20">
            <p>골때리는 MZ축구 - 교육 과정 안내</p>
            <h2 className="text-3xl mt-2 font-MaruBuri max-2xl:text-5xl max-sm:text-3xl">
              자격 조건
            </h2>
          </div>
          <div className="w-full mt-12  border border-solid border-zinc-300 border-t-0 max-2xl:w-5/6 "></div>
          <div className="w-full flex justify-between mt-32 items-center max-2xl:flex-col max-sm:mt-8">
            <div
              className="bg-soccer-player bg-cover bg-center max-sm:hidden"
              style={{ width: '600px', height: '600px' }}
            />
            <div>
              <div className="flex flex-col my-20 text-2xl font-WavvePADO gap-3  max-2xl:items-center max-2xl:text-4xl max-2xl:gap-10 max-sm:text-2xl max-sm:gap-4 max-sm:my-4">
                <p>축구를 즐기는 사람!</p>
                <p>배우려는 사람!</p>
                <p>선출 없는 팀</p>
                <p>성인이라면 누구나 가능합니다!</p>
              </div>
              <div className="max-2xl:flex max-2xl:text-center max-2xl:text-2xl max-2xl:mx-24 max-sm:text-base max-sm:mx-12 max-sm:mt-8">
                <p className="max-2xl:leading-relaxed">
                  1대1, 2대1, 3대1 개인레슨 받고 싶은 분들!
                  <br /> 현역한테 축구를 재밌게 또한 현실 축구 선수 경험으로
                  기초부터 차근차근 배우고 싶은 분들!
                  <br />
                  슈팅 킥 패스 감각등등 구체적으로 배우고 싶은 분들!
                  <br /> 모두모두 환영합니다.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center mt-40">
            <h2 className="text-3xl mt-2 font-MaruBuri max-2xl:text-5xl max-sm:text-3xl">
              교육비 안내
            </h2>
          </div>
          <div className="w-full mt-12  border border-solid border-zinc-300 border-t-0 max-2xl:w-5/6"></div>
          <div
            id="grid"
            className="mt-20 max-2xl:text-lg max-2xl:mx-20 max-sm:mx-4"
          >
            <div className="grid grid-cols-4 max-sm:text-sm">
              <div className="border-r border-gray-200 p-4 border-l-0 "></div>
              <div className="border-r border-gray-200 p-4 font-bold max-2xl:text-lg max-sm:text-sm">
                취미반
              </div>
              <div className="border-r border-gray-200 p-4 font-bold max-2xl:text-lg max-sm:text-sm">
                성인반
              </div>
              <div className="border-gray-200 p-4 border-l-1 font-bold max-2xl:text-lg max-sm:text-sm">
                그룹반(4명~)
              </div>
              <div className="border-y border-r border-gray-200 p-4 border-l-0 font-bold max-2xl:text-lg max-sm:text-sm">
                1회권
              </div>
              <div className="border-y border-r border-gray-200 p-4">3만원</div>
              <div className="border-y border-r border-gray-200 p-4">3만원</div>
              <div className="border-y border-gray-200 p-4">
                2만원(6명 이상 1만원 할인)
              </div>
              <div className="border-b border-r border-gray-200 p-4 border-l-0 font-bold max-2xl:text-lg max-sm:text-sm">
                5회권
              </div>
              <div className="border-b border-r border-gray-200 p-4">
                11만원
              </div>
              <div className="border-b border-r border-gray-200 p-4">
                11만원
              </div>
              <div className="border-b border-gray-200 p-4">-</div>
              <div className="border-b border-r border-gray-200 p-4 border-l-0 font-bold max-2xl:text-lg max-sm:text-sm">
                10회권
              </div>
              <div className="border-b border-r border-gray-200 p-4">
                22.5만원
              </div>
              <div className="border-b border-r border-gray-200 p-4">
                22.5만원
              </div>
              <div className="border-b border-gray-200 p-4">-</div>
              <div className="border-r border-gray-200 p-4 border-l-0 font-bold max-2xl:text-lg max-sm:text-sm">
                15회권
              </div>
              <div className="border-r border-gray-200 p-4">32.5만원</div>
              <div className="border-r border-gray-200 p-4">32.5만원</div>
              <div className="border-gray-200 p-4">-</div>
            </div>
          </div>
          <div className="flex flex-col items-center mt-40">
            <h2 className="text-3xl mt-2 font-MaruBuri max-2xl:text-5xl max-sm:text-3xl">
              교육시간 안내
            </h2>
          </div>
          <div className="w-full mt-12  border border-solid border-zinc-300 border-t-0 max-2xl:w-5/6" />
          <div className="mx-20 my-10 max-sm:mx-8">
            <h2 className="text-xl mb-5 max-2xl:text-3xl max-2xl:mb-10 max-2xl:mt-20 max-sm:text-2xl">
              ※ 수업 내용
            </h2>
            <div className="flex flex-col gap-3 max-2xl:text-xl max-sm:text-base">
              <p>3시간 중 팀적인 훈련 1시간, 경기 2시간</p>
              <p>
                각 훈련 시 정원은 17명으로, 개개인의 실력 향상을 위한 집중된
                수업을 제공합니다.
                <br />
                -팀적인 전술,패스훈련,여러가지 훈련세션을 진행합니다.
              </p>
            </div>
            <h2 className="text-xl mb-5 mt-10 max-2xl:text-3xl max-2xl:mb-10 max-2xl:mt-20 max-sm:text-2xl">
              ※ 수업 일정
            </h2>
            <div className="flex flex-col gap-3 max-2xl:text-xl max-sm:text-base">
              <p>
                일요일 오전에 진행되며, 실력 향상과 함께 리더십을 키우는 기회를
                제공합니다.
              </p>
              <p>레슨 장소: 황금네 근린공원(풋살장)조율가능</p>
              <p>레슨 일정: 월,화,수,목,금,토,일 모두 협의가능!</p>
              <p>레슨 시간: 1시간 10분-30분</p>
            </div>
            <h2 className="text-xl mb-5 mt-10 max-2xl:text-3xl max-2xl:mb-10 max-2xl:mt-20 max-sm:text-2xl">
              ※ 혜택
            </h2>
            <div className="flex flex-col gap-3 max-2xl:text-xl max-sm:text-base">
              <p>
                3개월마다 주장과 부주장을 선정하며, 주장과 부주장에게는 매달 1회
                무료 수업권을 제공합니다.
              </p>
              <p>
                매 훈련마다 우수 선수를 선정하여 기프티콘을 증정합니다.
                <br />
                -조기축구 팀원에게는 개인레슨 진행시 수강료를 할인해드립니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EducationSection;
