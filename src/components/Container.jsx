import React from "react";

export default function Container({ children, className }) {
  return <div className={`max-w-7xl mx-auto py-6 md:py-10 px-4 ${className}`}>{children}</div>;
}
