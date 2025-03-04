import Image from "next/image";
import Link from "next/link";
import logo from "@/../public/icons/logo.svg";

export default function Footer() {
  return (
    <footer className="h-[259px] gradient flex justify-center items-center">
      <div className="flex items-center justify-between w-[1520px]">
        <div className="max-w-[378px] flex flex-col gap-[6px] pl-1">
          <div className="flex gap-[10px]">
            <Image src={logo} alt="logo" width={105} height={31} />
            <div className="text-xs font-bold">
              <p>DESIGNED BY. @YUJU-LEE </p>
              <p>ENGINERING BY. @YUJU-LEE, @JAESEO-LEE</p>
            </div>
          </div>
          <div className="font-bold text-[8px]">
            This site is a non-commercial project that aggregates publicly
            available F1 news links and RSS data. All content, news, and
            information belongs to their respective copyright holders. This
            service is not affiliated with, endorsed, or sponsored by Formula
            1®, FIA, or any F1 teams. We respect all copyright holders and aim
            to comply with fair use principles. If you are a copyright holder
            and have concerns, please contact our contact point.
            <br /> © 2003-2025 Formula One World Championship Limited.
          </div>
        </div>
        <Link
          href={"https://www.naver.com"}
          target="_blank"
          className="text-xs font-bold"
        >
          CONTACT US
        </Link>
      </div>
    </footer>
  );
}
