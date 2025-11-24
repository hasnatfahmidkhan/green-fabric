import Link from "next/link";

export default function Navbar() {
  const links = (
    <>
      <li>
        <Link href={"/"}>Home</Link>
      </li>
      <li>
        <Link href={"/products"}>Products</Link>
      </li>
      <li>
        <Link href={"/about"}>About</Link>
      </li>
      <li>
        <Link href={"/contact"}>Contact</Link>
      </li>
    </>
  );

  return (
    <div className="bg-base-100 shadow-sm">
      <nav className="navbar max-w-7xl mx-auto px-3">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Link href={"/"} className="text-xl md:text-2xl font-semibold">
            Green Fabric
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-3 text-base font-medium tracking-wide">
            {links}
          </ul>
        </div>
        <div className="navbar-end space-x-4">
          <Link href={"/signIn"} className="btn">
            Sign In
          </Link>
          <Link href={"/signUp"} className="btn hidden md:flex btn-primary ">
            Sign Up
          </Link>
        </div>
      </nav>
    </div>
  );
}
