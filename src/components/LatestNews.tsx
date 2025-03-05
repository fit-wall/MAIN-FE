import linkto from "@/../public/btns/linkto.svg";
import Image from "next/image";

interface News {
  id?: number;
  title: string;
  discription: string;
}

const news: News[] = [
  {
    id: 1,
    title: `기사 제목이 이렇게 들어가고 기사 제목이 좀 기이이이이이이이일면이렇게두줄로`,
    discription: `Max Verstappen shared mixed feelings after pre-season testing came to an end at the Bahrain International Circuit on Friday, saying there is “still a bit of work to do” for Red Bull.`,
  },
  {
    id: 2,
    title: `기사 제목이 이렇게 들어가고 기사 제목이 좀 기이이이이이이이일면이렇게두줄로`,
    discription: `Max Verstappen shared mixed feelings after pre-season testing came to an end at the Bahrain International Circuit on Friday, saying there is “still a bit of work to do” for Red Bull.`,
  },
  {
    id: 3,
    title: `기사 제목이 이렇게 들어가고 기사 제목이 좀 기이이이이이이이일면이렇게두줄로`,
    discription: `Max Verstappen shared mixed feelings after pre-season testing came to an end at the Bahrain International Circuit on Friday, saying there is “still a bit of work to do” for Red Bull.`,
  },
  {
    id: 4,
    title: `기사 제목이 이렇게 들어가고 기사 제목이 좀 기이이이이이이이일면이렇게두줄로`,
    discription: `Max Verstappen shared mixed feelings after pre-season testing came to an end at the Bahrain International Circuit on Friday, saying there is “still a bit of work to do” for Red Bull.`,
  },
  {
    id: 5,
    title: `기사 제목이 이렇게 들어가고 기사 제목이 좀 기이이이이이이이일면이렇게두줄로`,
    discription: `Max Verstappen shared mixed feelings after pre-season testing came to an end at the Bahrain International Circuit on Friday, saying there is “still a bit of work to do” for Red Bull.`,
  },
];

export default function LatestNews() {
  return (
    <div className="rounded-[14px] p-[10px] h-[920px] bg-[#171717] flex flex-col gap-[10px]">
      <section className="h-[270px] border-solid borser-while border-4 rounded-[14px] relative p-5 flex flex-col justify-end">
        <div className="px-2 absolute top-2 left-2 font-bold text-xs border-solid border-primary border-[1px] rounded-[42px] bg-[#f3f4f6] text-primary">
          NEWS
        </div>
        <div className="flex flex-col w-[85%] gap-2">
          <p className="text-lg font-bold">
            에프원의 기사 제목이 여기에 들어갑니다. 란도 노리스, 대한민국 사는
            29세 이유주에게 청혼하다: 이유주는 즉시 퇴사하고 영국으로 이사를
            갔다고 합니다.
          </p>
          <p className="text-sm">
            Max Verstappen shared mixed feelings after pre-season testing came
            to an end at the Bahrain International Circuit on Friday, saying
            there is “still a bit of work to do” for Red Bull.
          </p>
        </div>
        <button className="absolute bottom-2 right-2 flex items-center gap-2">
          <Image src={linkto} alt="linkto" />
        </button>
      </section>
      <section className="h-[620px] px-[35px] py-[27px] bg-[#303235] rounded-[14px] flex flex-col gap-[10px] overflow-y-scroll">
        {news.map((news) => (
          <div
            className="flex gap-[28px] h-[132px] border-solid border-b-2 border-[#4D5155] pb-5"
            key={news.id}
          >
            <div className="min-w-[109px] min-h-[109px] bg-white">
              이미지를 대체
            </div>
            <div className="flex flex-col justify-between">
              <p className="text-[18px] font-bold leading-[22px]">
                {news.title}
              </p>
              <p className="text-[14px] leading-[18px]">{news.discription}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
