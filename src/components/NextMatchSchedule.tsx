"use client";
import { useCountdown } from "../hooks/useCountdown";
import { CountdownUnit } from "./CountdownUnit";

interface NextMatchScheduleProps {
  eventName: string;
  eventTitle: string;
  eventSubtitle: string;
  koreanTitle: string;
  eventDate: string; // ISO 문자열 형식
}

export default function NextMatchSchedule({
  eventName = "FORMULA 1 LOUIS VUITTON",
  eventTitle = "AUSTRALIAN",
  eventSubtitle = "GRAND PRIX 2025",
  koreanTitle = "2025 F1 호주 그랑프리",
  eventDate = "2025-04-24T12:00:00",
}: Partial<NextMatchScheduleProps>) {
  const { days, hours, minutes } = useCountdown(eventDate);

  return (
    <div className="flex justify-between items-center h-[340px] px-[180px] py-[110px]">
      <div className="font-black flex flex-col gap-1">
        <div>
          <p className="text-2xl">{eventName}</p>
          <p className="text-3xl">
            <span className="font-gradient">{eventTitle}</span> {eventSubtitle}
          </p>
        </div>
        <p className="text-2xl">{koreanTitle}</p>
      </div>
      <div className="flex flex-col gap-1">
        <p className="text-[22px] font-black text-gray-900">D-Day</p>
        <div className="flex items-center justify-between">
          <CountdownUnit value={days} label="일" />
          <CountdownUnit value={hours} label="시" />
          <CountdownUnit value={minutes} label="분" showBorder={false} />
        </div>
      </div>
    </div>
  );
}
