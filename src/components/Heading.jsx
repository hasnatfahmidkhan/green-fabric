import React from "react";

export default function Heading({ children, className }) {
  return <h2 className={`heading ${className}`}>{children}</h2>;
}
