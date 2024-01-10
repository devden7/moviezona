"use client";

import Image from "next/image";
import Link from "next/link";
import Search from "./Search";
import { Switch } from "../ui/switch";
import { useState } from "react";

const Navbar = () => {
  const [isChecked, setChecked] = useState(false);

  const checkedBtn = () => {
    setChecked((prevChecked) => !prevChecked);
  };
  return (
    <nav className="border-b-[1px] border-slate-200">
      <header className="flex-between container h-16 gap-5">
        <Link href="/" className="flex-center gap-2">
          <Image src="film-outline.svg" alt="logo" width={50} height={50} />
          <p className="text-xl font-bold">MOV</p>
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
