import React from "react";
import { FaGoogle } from "react-icons/fa";

export default function SocialLogin({ className, children, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`btn bg-white text-black border-[#e5e5e5] ${className}`}
    >
      <FaGoogle size={15} />
      Login with Google
    </button>
  );
}
