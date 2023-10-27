import Link from "next/link";

const Navbar = () => {
  return (
    <div className="navbar bg-teal-900">
      <Link className="btn btn-ghost normal-case text-xl text-white" href={"/"}>
        Home
      </Link>
      <Link
        className="btn btn-ghost normal-case text-xl text-white"
        href={"/about"}
      >
        About
      </Link>
      <Link
        className="btn btn-ghost normal-case text-xl text-white"
        href={"/projects"}
      >
        Projects
      </Link>
      <Link
        className="btn btn-ghost normal-case text-xl text-white"
        href={"/connect"}
      >
        Connect
      </Link>
    </div>
  );
};

export default Navbar;
