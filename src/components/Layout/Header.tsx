"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "@/../public/icons/logo.svg";

interface NavItem {
  label: string;
  href: string;
}

export default function Header() {
  const pathname = usePathname();

  // 네비게이션에 들어갈 메뉴와 경로
  const navItems: NavItem[] = [
    { label: "HOME", href: "/" },
    { label: "SCHEDULE", href: "/schedule" },
    { label: "COMMUNITY", href: "/community" },
  ];

  return (
    <div className="max-w-[1520px] h-20 flex items-center gap-40 margincenter font-bold leading-6">
      <Image src={logo} alt="logo" width={105} height={31} />
      <nav className="flex gap-[62px] font-">
        {navItems.map((navItem) => (
          <Link
            key={navItem.label}
            href={navItem.href}
            className={`${
              pathname === navItem.href ? "text-primary" : "text-mainfont"
            } hover:text-primary `}
          >
            {navItem.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
