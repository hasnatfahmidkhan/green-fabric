import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className=" bg-base-100 text-base-content p-10">
      <div className="footer sm:footer-horizontal max-w-7xl mx-auto">
        <aside>
          <Link href={"/"} className="logo">
            Green Fabric
          </Link>
          <p>
            Green Fabric Ltd.
            <br />
            phone: 01898934584
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </div>
      <p className="text-center text-sm text-accent mt-8">
        Green Fabric &copy; {new Date().getFullYear()}. All rigths reserved.
      </p>
    </footer>
  );
}
