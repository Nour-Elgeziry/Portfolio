"use client";

import Link from "next/link";

import { usePathname } from "next/navigation";

const Navbar = () => {
  const currentRoute = usePathname();

  const baseTabClass = "mr-2  btn btn-ghost normal-case text-xl text-white";
  const selectedTabClass = baseTabClass + " bg-gray-800";

  return (
    <div className="navbar bg-teal-900">
      <Link
        className={currentRoute === "/" ? selectedTabClass : baseTabClass}
        href={"/"}
      >
        Home
      </Link>
      <Link
        className={currentRoute === "/about" ? selectedTabClass : baseTabClass}
        href={"/about"}
      >
        About
      </Link>
      <Link
        className={
          currentRoute === "/projects" ? selectedTabClass : baseTabClass
        }
        href={"/projects"}
      >
        Projects
      </Link>
      <Link
        className={
          currentRoute === "/connect" ? selectedTabClass : baseTabClass
        }
        href={"/connect"}
      >
        Connect
      </Link>
    </div>
  );
};

export default Navbar;
