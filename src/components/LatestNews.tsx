const news = [
  {
    title: `기사 제목이 이렇게 들어가고 기사 제목이 좀 기이이이이이이이일면이렇게두줄로`,
    description: `Max Verstappen shared mixed feelings after pre-season testing came to an end at the Bahrain International Circuit on Friday, saying there is “still a bit of work to do” for Red Bull.`,
  },
  {
    title: `기사 제목이 이렇게 들어가고 기사 제목이 좀 기이이이이이이이일면이렇게두줄로`,
    description: `Max Verstappen shared mixed feelings after pre-season testing came to an end at the Bahrain International Circuit on Friday, saying there is “still a bit of work to do” for Red Bull.`,
  },
  {
    title: `기사 제목이 이렇게 들어가고 기사 제목이 좀 기이이이이이이이일면이렇게두줄로`,
    description: `Max Verstappen shared mixed feelings after pre-season testing came to an end at the Bahrain International Circuit on Friday, saying there is “still a bit of work to do” for Red Bull.`,
  },
  {
    title: `기사 제목이 이렇게 들어가고 기사 제목이 좀 기이이이이이이이일면이렇게두줄로`,
    description: `Max Verstappen shared mixed feelings after pre-season testing came to an end at the Bahrain International Circuit on Friday, saying there is “still a bit of work to do” for Red Bull.`,
  },
];

export default function LatestNews() {
  return (
    <div className="rounded-[14px] p-[10px] h-[920px] bg-[#171717]">
      <section className="h-[270px] border-solid borser-while border-4 rounded-[14px] relative">
        <div className="px-2 absolute top-2 left-2 font-bold text-xs border-solid border-primary border-[1px] rounded-[42px] bg-[#f3f4f6] text-primary">
          NEWS
        </div>
        <div className="flex flex-col ">
          <p>
            에프원의 기사 제목이 여기에 들어갑니다. 란도 노리스, 대한민국 사는
            29세 이유주에게 청혼하다: 이유주는 즉시 퇴사하고 영국으로 이사를
            갔다고 합니다.
          </p>
          <p>
            Max Verstappen shared mixed feelings after pre-season testing came
            to an end at the Bahrain International Circuit on Friday, saying
            there is “still a bit of work to do” for Red Bull.
          </p>
        </div>
      </section>
      <section>section2</section>
    </div>
  );
}
