import LatestNews from "./LatestNews";
import NextMatchSchedule from "./NextMatchSchedule";

export default function MainPage() {
  return (
    <main className="w-[1520px] margincenter">
      <NextMatchSchedule />
      <div className="w-[620px]">
        <LatestNews />
      </div>
      <p>메인 페이지 내용</p>
    </main>
  );
}
