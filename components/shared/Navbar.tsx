"use client";

import Image from "next/image";
import Link from "next/link";
import Search from "./Search";
import { Switch } from "../ui/switch";
import { useEffect, useState } from "react";
import { useTheme } from "@/context/ThemeProvider";

const Navbar = () => {
  const [isChecked, setChecked] = useState(false);
  const { setMode } = useTheme();

  useEffect(() => {
    if (isChecked) {
      localStorage.theme = "dark";
      setMode("dark");
    } else {
      setMode("light");
      localStorage.theme = "light";
    }
  }, [isChecked, setMode]);

  const checkedBtn = () => {
    setChecked((prevChecked) => !prevChecked);
  };

  return (
    <nav className="border-b-[1px] border-slate-200 dark:border-slate-800">
      <header className="flex-between container h-16 gap-5">
        <Link href="/" className="flex-center gap-2">
          <Image
            src="/assets/film-outline.svg"
            alt="logo"
            width={50}
            height={50}
            className="dark:text-red-500"
            priority={true}
          />
          <p className="text-black_white text-xl font-bold">MOV</p>
        </Link>
        <Search />
        <div>
          <Switch checked={isChecked} onCheckedChange={checkedBtn} />
        </div>
      </header>
    </nav>
  );
};

export default Navbar;
