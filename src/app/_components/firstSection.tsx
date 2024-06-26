import { TfiAngleDoubleDown } from 'react-icons/tfi';

const FirstSection = () => {
  return (
    <div className="w-full h-screen mt-16">
      <div className="w-full h-full bg-bg-img bg-center bg-cover">
        <div className="mt-14 text-white relative top-1/4 max-lg:mx-10">
          <p
            id="titleText"
            className="text-7xl font-medium tracking-tight text-center font-Giants-Inline mb-10 max-sm:text-4xl"
          >
            Join, Kick, Succeed!
          </p>
          <p className="text-3xl leading-loose font-WavvePADO text-center max-sm:text-xl">
            지금 실력을 키우고 리더십을 발휘하는 축구 레슨 수업!
            <br /> 서울, 경기도, 그리고 김포지역에서 <br />
            현역 축구 선수들이 직접 코칭하는 축구 레슨 수업을 소개합니다.
          </p>
          <TfiAngleDoubleDown
            id="downIcon"
            className="text-6xl mx-auto mt-48 max-2xl:text-8xl max-2xl:mt-80 landscape:mt-32 max-sm:hidden"
          />
        </div>
      </div>
    </div>
  );
};
export default FirstSection;
