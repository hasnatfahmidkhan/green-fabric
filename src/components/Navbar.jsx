"use client";

import useAuth from "@/hooks/useAuth";
import {
  LogOut,
  PackagePlus,
  SlidersVertical,
  UserPen,
  Home,
  Box,
  Info,
  Phone,
  ChevronDown,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import toast from "react-hot-toast";

export default function Navbar() {
  const { user, signOutFunc } = useAuth();
  const pathname = usePathname();
  // console.log(user);

  const handleSignOut = () => {
    try {
      signOutFunc().then(() => {
        toast.success("Sign out successfully");
      });
    } catch (error) {
      toast.error(error.message);
    }
  };

  const navLinks = [
    { label: "Home", href: "/", icon: <Home size={18} /> },
    { label: "Products", href: "/products", icon: <Box size={18} /> },
    { label: "About", href: "/about", icon: <Info size={18} /> },
    { label: "Contact", href: "/contact", icon: <Phone size={18} /> },
  ];

  const userLinks = [
    { label: "Profile", href: "/profile", icon: <UserPen size={18} /> },
    {
      label: "Add Product",
      href: "/addProduct",
      icon: <PackagePlus size={18} />,
    },
    {
      label: "Manage Products",
      href: "/manageProducts",
      icon: <SlidersVertical size={18} />,
    },
  ];

  return (
    <div className="bg-base-100 shadow-sm sticky top-0 z-40">
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
              tabIndex={0}
              className="menu dropdown-content bg-base-100 shadow-md rounded-box w-52 font-semibold tracking-wide divide-y divide-dashed divide-gray-300 space-y-2"
            >
              {navLinks.map((link, idx) => {
                const isActive = pathname === link.href;

                return (
                  <li key={idx} className="pb-2">
                    <Link
                      href={link.href}
                      className={` ${
                        isActive
                          ? "text-primary font-bold"
                          : "hover:text-primary"
                      }`}
                    >
                      {link.icon && <span>{link.icon}</span>}
                      <span>{link.label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <Link href={"/"} className="logo">
            Green Fabric
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-3 text-base font-medium tracking-wide">
            {navLinks.map((link, idx) => {
              const isActive = pathname === link.href;

              return (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className={`flex items-center gap-1 hover:bg-primary hover:text-white py-2 px-3.5 ${
                      isActive ? "bg-primary text-white" : "hover:text-primary"
                    }`}
                  >
                    {link.icon && <span>{link.icon}</span>}
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="navbar-end space-x-4">
          {user ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="cursor-pointer flex items-center justify-center gap-0.5"
              >
                <Image
                  src={user?.photoURL || "/default-user.jpg"}
                  alt=""
                  width={40}
                  height={40}
                  className="rounded-full object-cover"
                />
                <ChevronDown size={20} />
              </div>
              <ul
                tabIndex="-1"
                className="dropdown-content menu font-semibold tracking-wide bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm divide-y divide-dashed divide-gray-300 space-y-2"
              >
                {userLinks.map((link, i) => {
                  const isActive = pathname === link.href;
                  return (
                    <li
                      key={i}
                      className={`pb-2 ${isActive ? "text-primary" : ""}`}
                    >
                      <Link href={link.href}>
                        {link.icon && <span>{link.icon}</span>}
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
                <li>
                  <button
                    className="text-red-500"
                    onClick={() => handleSignOut()}
                  >
                    <LogOut size={18} /> Sign out
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <>
              <Link href={"/signIn"} className="btn btn-primary btn-outline">
                Sign In
              </Link>
              <Link
                href={"/signUp"}
                className="btn hidden md:flex btn-primary "
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </nav>
    </div>
  );
}
