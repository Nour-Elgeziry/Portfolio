"use client";

import Link from "next/link";

import { usePathname } from "next/navigation";

const Navbar = () => {
  const currentRoute = usePathname();

  const baseTabClass = "mr-2  btn btn-ghost normal-case text-l text-gray-400";
  const selectedTabClass = baseTabClass + "bg-opacity-40 text-white";

  return (
    <div className="navbar bg-black-500">
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
          currentRoute === "/portfolio" ? selectedTabClass : baseTabClass
        }
        href={"/portfolio"}
      >
        Portfolio
      </Link>
      <Link
        className={
          currentRoute === "/projects" ? selectedTabClass : baseTabClass
        }
        href={"/projects"}
      >
        Personal Projects
      </Link>
      <Link
        className={
          currentRoute === "/getInTouch" ? selectedTabClass : baseTabClass
        }
        href={"/getInTouch"}
      >
        Get in touch
      </Link>
    </div>
  );
};

export default Navbar;
