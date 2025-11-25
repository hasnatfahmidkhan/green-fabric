"use client";
import errorPage from "../../public/errorpage.json";
import Lottie from "lottie-react";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

export default function NotFound() {
  return (
    <section className="flex items-center justify-center min-h-[calc(100vh-292px)] bg-base-100">
      <Lottie
        animationData={errorPage}
        loop={true}
        className="w-4xl h-full relative"
      >
        <Link
          href={"/"}
          className="btn btn-primary absolute bottom-5 left-[50%] translate-x-[-50%]"
        >
          <FaArrowLeft />
          Go Back
        </Link>
      </Lottie>
    </section>
  );
}
